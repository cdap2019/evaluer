import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
from sklearn.preprocessing import StandardScaler



house_data = pd.read_csv('./kc_house_data.csv')
print(house_data.shape)
print(house_data.head())


fig_size = plt.rcParams['figure.figsize']
fig_size[0] = 10
fig_size[1] = 8
plt.rcParams['figure.figsize'] = fig_size

sns.distplot(house_data['price'], kde=False, bins=8)
sns.lineplot(x='sqft_living', y='price', data=house_data)
sns.barplot(x='bedrooms', y='price', data=house_data)
sns.barplot(x='waterfront', y='price', data=house_data)
sns.lineplot(x='yr_built', y='price', data=house_data)
sns.lineplot(x='grade', y='price', data=house_data)


dataset_features = house_data.drop(['price', 'id', 'date'], axis=1)

dataset_labels = house_data['price']


from sklearn.model_selection import train_test_split

train_features,test_features,train_labels,test_labels = \
    train_test_split(dataset_features,dataset_labels,test_size=0.25, random_state=21)

# sc = StandardScaler()
#
# train_features = sc.fit_transform(train_features)
# test_features = sc.transform(test_features)

# train_labels = train_labels.values.reshape(-1,1)
# train_labels = sc.fit_transform(train_labels)
#
# test_labels = test_labels.values.reshape(-1,1)
# test_labels = sc.transform(test_labels)


from sklearn.linear_model import LinearRegression
regressor = LinearRegression()
regressor.fit(train_features, train_labels)
predicted_price = regressor.predict(test_features)

from sklearn import metrics
print('Linear regression')
print('Mean Absolute Error:', metrics.mean_absolute_error( test_labels, predicted_price))

print('Mean Squared Error:', metrics.mean_squared_error(test_labels,predicted_price))

print('Root Mean Squared Error:', np.sqrt(metrics.mean_squared_error(test_labels, predicted_price)))


from sklearn.ensemble import RandomForestRegressor
regressor = RandomForestRegressor(n_estimators=200, random_state=0)
regressor.fit(train_features, train_labels)
predicted_price = regressor.predict(test_features)

from sklearn import metrics
print('Random forest regressor')
print('Mean Absolute Error:', metrics.mean_absolute_error( test_labels, predicted_price))

print('Mean Squared Error:', metrics.mean_squared_error(test_labels,predicted_price))

print('Root Mean Squared Error:', np.sqrt(metrics.mean_squared_error(test_labels, predicted_price)))