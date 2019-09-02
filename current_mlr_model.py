import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
from sklearn.preprocessing import StandardScaler



land_data = pd.read_csv('./data.csv')
print(land_data.shape)
print(land_data.head())


fig_size = plt.rcParams['figure.figsize']
fig_size[0] = 10
fig_size[1] = 8
plt.rcParams['figure.figsize'] = fig_size

sns.distplot(land_data['price'], kde=False, bins=8)
sns.lineplot(x='dtmr', y='price', data=land_data)
sns.barplot(x='extent', y='price', data=land_data)


dataset_features = land_data.drop(['price', 'id', 'date'], axis=1)

dataset_labels = land_data['price']


from sklearn.model_selection import train_test_split

train_features,test_features,train_labels,test_labels = \
    train_test_split(dataset_features,dataset_labels,test_size=0.25, random_state=21)


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