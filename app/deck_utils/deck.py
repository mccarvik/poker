import pdb
from app.deck_utils.card import Card

class Deck():
    ''' Class to represent a deck of cards '''
    
    SUITS = ['s', 'h', 'c', 'd']
    VALUES = ['A', 'K', 'Q', 'J', '10', '9', '8', '7', '6', '5', '4', '3', '2']
    VAL_MAP = {
        'A' : 14,
        'K' : 13,
        'Q' : 12,
        'J' : 11,
        '10' : 10,
        '9' : 9,
        '8' : 8,
        '7' : 7,
        '6' : 6,
        '5' : 5,
        '4' : 4,
        '3' : 3,
        '2' : 2
    }
    
    def __init__(self):
        self.initialize()
    
    def initialize(self):
        self._cards = []
        for s in self.SUITS:
            for v in self.VALUES:
                self._cards.append(Card(v,s))
    
    def drawRandom(self):
        pass

    def removeCards(self, cards):
        pdb.set_trace()
        for c in cards:
            try:
                self._cards.remove(c)
            except:
                print("Card Already Used")
                raise AssertionError
    