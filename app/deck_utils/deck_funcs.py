from itertools import combinations

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

def getCombinations(deck, cards_needed):
    deck = deck._cards
    return list(combinations(deck, cards_needed))
    
    
    