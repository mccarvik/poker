import pdb
import numpy as np
from scipy.stats import mode
from app.deck_utils.deck_funcs import VAL_MAP

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
    
    def __init__(self, hand):
        hand.sort(key=lambda x: VAL_MAP[x._val], reverse=True)
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
            result_str = self.checkStraight(result[1])
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
        max_suit = mode([n._suit for n in self._hand])
        if max_suit[1][0] > 4:
            return (5, [n for n in self._hand if n._suit == max_suit[0][0]])
        else:
            return None
    
    def checkStraight(self, hand=None):
        hand = self._hand if not hand else hand
        hand = [VAL_MAP[h._val] for h in hand]
        hand = list(set(hand))
        hand.sort(reverse=True)
        i = 0
        while i + 4 < len(hand):
            if hand[i] - hand[i+4] == 4:
                return (4, hand[i])
            i+=1
        return None
    
    def checkPairs(self):
        pdb.set_trace()
        mode_card = mode([n._val for n in self._hand])
        
        if mode_card[1][0] == 4:
            left = [c for c in self._hand if c._val != mode_card[0][0]]
            return (7, [mode_card[0][0], left[0]])
        elif mode_card[1][0] == 1:
            return (0, self._hand[:5])
        elif mode_card[1][0] == 3:
            pass
    
        return None
        