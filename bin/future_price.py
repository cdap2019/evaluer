# run as follows, this script needs 11 arguments including -W ignore options

# python current_price.py -W ignore number_1 distance_1 number_2 distance_2 number_3 distance_3 number_4 distance_4 number_5 distance_5 current_price

# number_1 is the number of schools, distance_1 is the average distance of the schools from the point of interest.
# number_2 is the number of hospitals, distance_2 is the average distance of the hospitals from the point of interest.
# number_3 is the number of shops, distance_3 is the average distance of the shops from the point of interest.
# number_4 is the number of roads, distance_4 is the average distance of the roads from the point of interest.
# number_5 is the number of apartments, distance_5 is the average distance of the apartments from the point of interest.
# current_price is the current price of the land

import os
import tensorflow as tf
import sys
import numpy as np
from tensorflow.python.keras.models import load_model

os.environ['TF_CPP_MIN_LOG_LEVEL'] = '3'  # or any {'0', '1', '2'}
tf.compat.v1.logging.set_verbosity(tf.compat.v1.logging.ERROR)
# distance need to be divided by 1000 for normalization.
# distance does not exceed 1000m.
n1 = float(sys.argv[1])
d1 = float(sys.argv[2])/1000
n2 = float(sys.argv[3])
d2 = float(sys.argv[4])/1000
n3 = float(sys.argv[5])
d3 = float(sys.argv[6])/1000
n4 = float(sys.argv[7])
d4 = float(sys.argv[8])/1000
n5 = float(sys.argv[9])
d5 = float(sys.argv[10])/1000
current_price = float(sys.argv[11])

model = load_model('percent_model.h5')
increase_rate = model.predict(np.array([d1, d2, d3, d4, d5]).reshape(1,5))

increase_rate1 = 0.2 + n1*(increase_rate[0,0]-0.2)  # increase rate by school
increase_rate2 = 0.4 + n2*(increase_rate[0,1]-0.4)  # increase rate by hospital
increase_rate3 = 0.3 + n3*(increase_rate[0,2]-0.3)  # increase rate by shop
increase_rate4 = 0.1 + n4*(increase_rate[0,3]-0.1)  # increase rate by road
increase_rate5 = 0.3 + n5*(increase_rate[0,4]-0.3)  # increase rate by apartment

if n1 == 0: increase_rate1 = 0
if n2 == 0: increase_rate2 = 0
if n3 == 0: increase_rate3 = 0
if n4 == 0: increase_rate4 = 0
if n5 == 0: increase_rate5 = 0

total_increase_rate = increase_rate1 + increase_rate2 + increase_rate3 + increase_rate4 + increase_rate5
future_price = current_price * (1 + total_increase_rate)

print(increase_rate1)
print(increase_rate2)
print(increase_rate3)
print(increase_rate4)
print(increase_rate5)
print(future_price)

sys.stdout.flush()