#%%
import numpy as np
import pandas as pd
# from keras.losses import mean_squared_error
from keras.models import Sequential
from keras.layers import Dense, Dropout
from keras.wrappers.scikit_learn import KerasRegressor
from math import sqrt
from sklearn import metrics

# from sklearn.metrics import mean_squared_error
from sklearn.preprocessing import StandardScaler
from matplotlib import pyplot as plt
import seaborn as sns
import warnings
warnings.filterwarnings('ignore')
from sklearn.model_selection import train_test_split
#%%
df = pd.read_csv('data/data.csv')
df.head()
#%%
# test_df = pd.read_csv('data.csv')
# test_df.head()
#%%
# df['date'] = df['date'].apply(lambda x: int(x[:8]))
df.head()
#%%
# test_df['date'] = test_df['date'].apply(lambda x: int(x[:8]))
# test_df.head()
#%%
X = df[['dtmr', 'extent', 'acc_index', 'zipcode', 'lat', 'long']].values
y = df['price'].values
#%%
# Splitting the training set and test set
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size = 0.3, random_state = 0)
# Feature Scaling
sc = StandardScaler()

X_train = sc.fit_transform(X_train)
X_test = sc.transform(X_test)


#%%
# define base model
def baseline_model():
    # create model
    model = Sequential()
    model.add(Dense(6, input_dim=10, kernel_initializer='normal', activation='relu'))
    model.add(Dropout(0.1))
    model.add(Dense(output_dim = 10, init = 'uniform', activation = 'relu'))
    model.add(Dropout(0.1))
    model.add(Dense(output_dim = 10, init = 'uniform', activation = 'relu'))
    model.add(Dropout(0.1))
    model.add(Dense(1, kernel_initializer='normal'))
    # Compile model
    # model.compile(loss='mean_squared_error', optimizer='adam',metrics=["accuracy"])
    model.compile(loss='mean_squared_error', optimizer='adam')
    return model
# Fitting to the training set
# estimator = KerasRegressor(build_fn=baseline_model, validation_split=0.33, epochs=50, batch_size=500, verbose=2)
estimator = KerasRegressor(build_fn=baseline_model, validation_split=0.33, epochs=50, batch_size=500, verbose=2)
history = estimator.fit(X_train, y_train)
# Predicting the results
prediction = estimator.predict(X_test)

##generating the flask model
estimator.model.save("model_ann.h5")

mae = metrics.mean_absolute_error( y_test, prediction)
mse = metrics.mean_squared_error(y_test, prediction)

rmse = sqrt(metrics.mean_squared_error(y_test, prediction))
# accuracy_score = metrics.accuracy_score(y_test, prediction,True)
# Use a custom metricfunction
def auc(y_test, prediction):
    auc = tf.metrics.auc(y_test, prediction)[1]
    keras.backend.get_session().run(tf.local_variables_initializer())
    return auc

print('Test MAE: %.3f' % mae)
print('Test MSE: %.3f' % mse)
print('Test RMSE: %.3f' % sqrt(mse))


#%%
# # Visualization the results and evaluation
n = 12
length = len(prediction)
sns.set_style('darkgrid', {'axis.facecolor':'black'})
f, axes = plt.subplots(n, 1, figsize=(25,30))
times = 0
for i in range(n):
    if i == 0:
        plt.sca(axes[0])
        plt.plot(y_test[:round(length/n)], color = 'red', label = 'Real Price')
        plt.plot(prediction[:round(length/n)], color = 'blue', label = 'Predicted Price')
        plt.title('Price Predicition', fontsize=30)
        plt.ylabel('Price', fontsize=20)
        plt.legend(loc=1, prop={'size': 10})
    else:
        if i == n-1:
            plt.sca(axes[n-1])
            plt.plot(y_test[round(length/n*(n-1)):], color = 'red', label = 'Real Price')
            plt.plot(prediction[round(length/n*(n-1)):], color = 'blue', label = 'Predicted Price')
            plt.ylabel('Price', fontsize=20)
            plt.legend(loc=1, prop={'size': 10})
        else:
            plt.sca(axes[i])
            plt.plot(y_test[round(length/n*i):round(length/n*(i+1))], color = 'red', label = 'Real Price')
            plt.plot(prediction[round(length/n*i):round(length/n*(i+1))], color = 'blue', label = 'Predicted Price')
            plt.ylabel('Price', fontsize=20)
            plt.legend(loc=1, prop={'size': 10})
plt.show()