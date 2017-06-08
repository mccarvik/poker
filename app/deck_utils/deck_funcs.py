from itertools import combinations

def getCombinations(deck, cards_needed):
    deck = deck._cards
    return list(combinations(deck, cards_needed))
    
    
    