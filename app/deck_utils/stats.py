import pdb
from app.deck_utils.deck_funcs import HAND_MAP

class Stats():
    def __init__(self):
        self._hands = 0
        self._stats_dict = {k : 0 for k in range(9)}
    
    def returnStats(self):
        return self._stats_dict

class Single_Stats(Stats):
    '''Class will hold the stats for a given scenario for single user outcomes'''
    
    def __init__(self):
        super().__init__()
    
    def addOutCome(self, outcome):
        self._hands += 1
        self._stats_dict[outcome[0]] += 1
    
    def printStats(self):
        print("Hand Results:")
        for k,v in self._stats_dict.items():
            print("{0}: {1}%".format(HAND_MAP[k], round((v / self._hands)*100, 2)))

class Multi_Stats(Stats):
    '''Class will hold the stats for a given scenario for multi_user outcomes'''
    
    def __init__(self):
        super().__init__()
        self._stats_winloss = {k : 0 for k in range(-1,2)}
        self._stats_hand_winloss = {k : [0,0,0] for k in range(9)}
    
    def addOutCome(self, outcome, win_loss_split):
        self._hands += 1
        self._stats_winloss[win_loss_split] += 1
        self._stats_dict[outcome[0]] += 1
        self._stats_hand_winloss[outcome[0]][win_loss_split] += 1
    
    def printStats(self):
        print("Hand Results:")
        print("Win / Split / Loss: \t{0}% / {1}% / {2}%".format(round((self._stats_winloss[1] / self._hands)*100, 2),
                                                                round((self._stats_winloss[0] / self._hands)*100, 2),
                                                                round((self._stats_winloss[-1] / self._hands)*100, 2)))
        print("")
        for k,v in self._stats_dict.items():
            if k in [2, 6]:
                tabs = '\t\t'
            elif k in [3,7,8]:
                tabs = '\t'
            else:
                tabs = '\t\t\t'
            
            if v > 0:
                print("{0}: {3}{1}% \t\t Win% (w/ outcome): {2}%".format(HAND_MAP[k], round((v / self._hands)*100, 2),
                                                            round((self._stats_hand_winloss[k][1] / v)*100, 2), tabs))
            else:
                print("{0}: {2}{1}% \t\t Win% (w/ outcome): 0%".format(HAND_MAP[k], round((v / self._hands)*100, 2), tabs))