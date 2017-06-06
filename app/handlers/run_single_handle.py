import sys, json
sys.path.append("/home/ubuntu/workspace/poker")
from app.deck_cards.card import Card
from app.deck_cards.deck import Deck

def run_simulation(hand, board):
    ''' Will simulate the outcome for a given hand'''
    hand = [Card(h[0],h[1]) for h in hand]
    board = [Card(h[0],h[1]) for h in board]
    deck = Deck()
    print(deck._cards)





def read_in():
    lines = sys.stdin.readlines()
    # Since our input would only be having one line, parse our JSON data from that
    return json.loads(lines[0])

if __name__ == "__main__":
    # args = read_in()
    # hand, board = cleanInputs(args)
    
    hand = [('A','h'), ('A', 's')]
    board = []
    run_simulation(hand, board)