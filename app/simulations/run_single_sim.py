import sys, json, pdb
sys.path.append("/home/ubuntu/workspace/poker")
from app.deck_utils.card import Card
from app.deck_utils.deck import Deck
from app.deck_utils.deck_funcs import getCombinations

def run_simulation(hand, board):
    ''' Will simulate the outcome for a given hand'''
    hand = [Card(h[0],h[1]) for h in hand]
    board = [Card(h[0],h[1]) for h in board]
    deck = Deck()
    deck.removeCards(hand + board)
    hand_combs = getCombinations(deck, 7-len(hand+board))
    print(hand_combs)
    for hc in hand_combs:
        print(hand_combs)
        
    
if __name__ == "__main__":
    hand = [('A','h'), ('A', 's')]
    board = [('A','c'), ('K', 's'), ('K', 'd'), ('K', 'h')]
    run_simulation(hand, board)