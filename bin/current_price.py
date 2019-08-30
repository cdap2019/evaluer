# run as follows
# python current_price.py -W ignore latitude_value longitude_value
# Disable
import os
import tensorflow as tf
import sys
from tensorflow.python.keras.models import load_model
import numpy as np

os.environ['TF_CPP_MIN_LOG_LEVEL'] = '3'  # or any {'0', '1', '2'}
tf.compat.v1.logging.set_verbosity(tf.compat.v1.logging.ERROR)

model = load_model('price_model.h5')

latitude = float(sys.argv[1]) - 6
longitude = float(sys.argv[2]) - 79
X = np.array([latitude, longitude]).reshape(1,2)

price = model.predict(X, batch_size=5)*1e7
print(price[0,0])
sys.stdout.flush()