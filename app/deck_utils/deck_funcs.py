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

def getCombinations(deck, cards_needed):
    deck = deck._cards
    return list(combinations(deck, cards_needed))
    
    
    