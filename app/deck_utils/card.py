import pdb

class Card():
    def __init__(self, val, suit):
        self._val = val
        self._suit = suit
    
    def __str__(self):
        return (self._val+self._suit)
    
    def __repr__(self):
        return (self._val+self._suit)
    
    def __eq__(self, other):
        if (self._val == other._val and self._suit == other._suit):
            return True
        else:
            return False