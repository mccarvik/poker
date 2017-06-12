import sys, json, pdb
sys.path.append("/home/ubuntu/workspace/poker")
from app.deck_utils.card import Card
from app.deck_utils.deck import Deck
from app.deck_utils.hand_rules import HandRules
from app.deck_utils.deck_funcs import getCombinations
from app.deck_utils.stats import Single_Stats

def run_simulation(hand, board):
    ''' Will simulate the outcome for a given hand'''
    hand = [Card(h[0],h[1]) for h in hand]
    board = [Card(h[0],h[1]) for h in board]
    deck = Deck()
    deck.removeCards(hand + board)
    hand_combs = getCombinations(deck, 7-len(hand+board))
    stats = Single_Stats()
    for hc in hand_combs:
        print([hc[0]] + hand + board)
        stat = HandRules([hc[0]] + hand + board)
        
    
if __name__ == "__main__":
    hand = [('K','s'), ('10', 'h')]
    board = [('3','d'), ('3', 's'), ('4', 'h'), ('J', 'c')]
    run_simulation(hand, board)