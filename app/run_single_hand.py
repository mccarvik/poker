import sys
sys.path.append("/home/ubuntu/workspace/poker")
from app.deck_cards.card import Card
from app.deck_cards.deck import Deck

def run_simulation(hand, board):
    ''' Will simulate the outcome for a given hand'''
    hand = [Card(h[0],h[1]) for h in hand]
    board = [Card(h[0],h[1]) for h in board]
    deck = Deck()
    print(deck._cards)

if __name__ == "__main__":
    hand = [('A','h'), ('A', 's')]
    board = []
    run_simulation(hand, board)