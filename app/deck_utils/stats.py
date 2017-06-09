import pdb

class Single_Stats():
    '''Class will hold the stats for a given scenario for single user outcomes'''
    
    def __init__(self):
        pdb.set_trace()
        self._hands = 0
        self._stats_dict = {(k,0) for k in range(9)}
    
    def addOutCome(self, outcome):
        self._hands += 1
        self._stats_dict[outcome[0]] += 1
    
    def returnStats(self):
        return self._stats_dict