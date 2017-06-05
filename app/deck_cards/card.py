

class Card():
    def __init__(self, val, suit):
        self.val = val
        self.suit = suit
    
    def cardStr(self):
        return (self.val+self.suit)