# run as follows
import os
import sys
import numpy as np
import itertools
import pandas as pd
from floodedarea import isfloodedArea
import pickle
from pyramid.arima import auto_arima

hospital = float(sys.argv[1])/1000
bank = float(sys.argv[2])/1000
school = float(sys.argv[3])/1000
distance = float(sys.argv[4])/1000
lat = float(sys.argv[5])
lng = float(sys.argv[6])

#import package for KNN regressor
from sklearn.neighbors import KNeighborsRegressor

#import package for spliting train and test 
from sklearn.model_selection import train_test_split

# Import data
data = pd.read_csv("LandSale.csv")
# Select an important columns
# Convert Date to numeric. for example '2012-01'->1, '2012-02'->2, ..... '2017-12'->72
data['SoldDate'] = pd.to_datetime(data['SoldDate'])
year = data['SoldDate'].dt.year
month = data['SoldDate'].dt.month
data['SoldDate'] = (year-2012)*12 + month

# data select for training
data_knn = data[['HospitalDistance', 'Bank/ATM', 'SchoolDistance', 'SoldDate', 'DistToTown', 'isfloodedArea', 'Latitude', 'Longtitude','Price']]
# convert to numbers
data_knn.apply(pd.to_numeric)
# delete nan data and select not nan data
data_norm = data_knn[(pd.notnull(data['HospitalDistance'])) & (pd.notnull(data['Bank/ATM'])) & (pd.notnull(data['SchoolDistance'])) & (pd.notnull(data['DistToTown']))  & (pd.notnull(data['isfloodedArea'])) & (pd.notnull(data['Latitude'])) & (pd.notnull(data['Longtitude'])) & (pd.notnull(data['Price']))]
data_norm = data_norm.round(6)
data_norm = data_norm.dropna()
data_norm.apply(pd.to_numeric)

# train and test data
x_train, x_test, y_train, y_test = train_test_split(data_norm[['HospitalDistance', 'Bank/ATM', 'SchoolDistance','SoldDate', 'DistToTown', 'isfloodedArea', 'Latitude','Longtitude']], data_norm['Price'], test_size=0.01, random_state=42)
# knn construct, n_neighbors is the number of nearest neighbors.
knn = KNeighborsRegressor(n_neighbors=5)
# knn train
knn.fit(x_train, y_train)
# variable 'result' is a list for historic data at special city/.
result = []
# get a isfloodedArea of selected area.
isflooded = isfloodedArea(lat,lng)

# generate historical data at selected city using trained KNN
for i in range(72):
    # i means year-month. i=1:'2012-1', i=2:'2012-02'....
    x_test = [hospital, bank, school, i, distance, isflooded, lat, lng]
    x_test = np.array(x_test).reshape(1, 8)
    # save historic data in result
    result.append(knn.predict(x_test)[0])

history_price = np.asarray(result)

# generate month
month = np.linspace(1, 72, 72)

# data construction
data = pd.DataFrame({'month': month, 'price': history_price})
train_data = data[1:72]

train_data = train_data['price']

# arima model create
model = auto_arima(train_data,start_p=1,start_q=1, max_q=3, m=12, start_P=0,seasonal=True,d=1,D=1,trace=False,error_action='ignore',suppress_warnings=True)
# train arima model
model.fit(train_data)
# predicting future price using trained arima model.
forecast = model.predict(n_periods=120)
print(forecast)
sys.stdout.flush()


# data construction
data = pd.DataFrame({'month': month, 'price': history_price})
train_data = data[1:72]

train_data = train_data['price']
# arima model create

model = auto_arima(train_data,start_p=1,start_q=1, max_q=3, m=12, start_P=0,seasonal=True,d=1,D=1,trace=False,error_action='ignore',suppress_warnings=True)
# train arima model
model.fit(train_data)

# save train result
filename = 'arimamodel.sav'
pickle.dump(model, open(filename, 'wb'))
# predicting future price
forecast = model.predict(n_periods=120)
print(forecast)
sys.stdout.flush()
