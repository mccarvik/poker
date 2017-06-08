import numpy as np
from scipy.stats import mode

class HandRules():
    '''This class will determine what hand a given board and hand combo has'''
    
    HAND_MAP = {
        0 : 'Hi Card',
        1 : 'Pair',
        2 : 'Two-Pair',
        3 : 'Three of a Kind',
        4 : 'Straight',
        5 : 'Flush',
        6 : 'Full House',
        7 : 'Four of a Kind',
        8 : 'Straight-Flush'
    }
    
    def __into__(self, hand):
        self._hand = hand
        self.getHandResult()
    
    def getHandResult(self):
        ''' Pseudo handler to determine the hand ranking
        
        Parameters
        ==========
        NONE
        
        Return
        ======
        res : tuple
            int representing the hand ranking and a string of the cards used for tie breakers
        '''
        result = self.checkFlush()
        if result:
            # if flush, check if a straight can be made for a straight flush
            result_str = self.checkStraight(res[1])
            if result_str:
                return (8, result_str[1])
            else:
                result = (5, result[1][:5])
        
        result_pairs = self.checkPairs()
        result = result if result[0] > result_pairs[0] else result_pairs
        if result[0] > 4:
            result_str = self.checkStraight()
            result = result_str if result_str else result
        return result
        
    def checkFlush(self):
        np_hand = np.array(self._hand)
        max_suit = mode(np_hand)[0]
        if max_suit[1] > 4:
            return (5, np.where(np_hand._suit == max_suit[1]))