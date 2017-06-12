import pdb
from app.deck_utils.deck_funcs import HAND_MAP

class Single_Stats():
    '''Class will hold the stats for a given scenario for single user outcomes'''
    
    def __init__(self):
        self._hands = 0
        self._stats_dict = {k : 0 for k in range(9)}
    
    def addOutCome(self, outcome):
        self._hands += 1
        self._stats_dict[outcome[0]] += 1
    
    def returnStats(self):
        return self._stats_dict
    
    def printStats(self):
        print("Hand Results:")
        for k,v in self._stats_dict.items():
            print("{0}: {1}%".format(HAND_MAP[k], round((v / self._hands)*100, 2)))