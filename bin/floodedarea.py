import pandas as pd
import numpy as np
def distance(lat1, lng1, lat2, lng2):
    R = 6378137; # Earth’s mean radius in meter
    dLat = np.deg2rad(lat1 - lat2)
    dLong = np.deg2rad(lng1 - lng2)
    a = np.sin(dLat / 2) * np.sin(dLat / 2) + np.cos(np.deg2rad(lat1)) * np.cos(np.deg2rad(lat2)) * np.sin(dLong / 2) * np.sin(dLong / 2)
    c = 2 * np.arctan2(np.sqrt(a), np.sqrt(1 - a))
    d = R * c
    return d
def isfloodedArea(lat, lng):
    data_flooded = pd.read_csv("isFloodedArea.csv")
    data_flooded.apply(pd.to_numeric)
    result = 0
    dist = []
    for i in range(3):
        for j in range(len(data_flooded['isfloodedArea'])):
            distant_two_points = distance(lat, lng, data_flooded['Latitude'][j], data_flooded['Longtitude'][j])
            dist.append(distant_two_points)
        dist = np.asarray(dist)
        idx = dist.argmin()
        result += data_flooded['isfloodedArea'][idx]
        data_flooded['Latitude'][idx] = 100
        data_flooded['Longtitude'][idx] = 100
        dist = []
    isflooded = result/ 3
    if isflooded < 0.5:
        isflooded = 0
    else:
        isflooded = 1
    return isflooded