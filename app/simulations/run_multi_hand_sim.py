import sys, json, pdb
sys.path.append("/home/ubuntu/workspace/poker")
from app.deck_utils.card import Card
from app.deck_utils.deck import Deck
from app.deck_utils.hand_rules import HandRules
from app.deck_utils.deck_funcs import getCombinations, evaluateWinner
from app.deck_utils.stats import Multi_Stats

def run_simulation(hands, board):
    ''' Will simulate the outcome for a given hand'''
    hands = [[Card(h[0],h[1]) for h in hand] for hand in hands]
    board = [Card(h[0],h[1]) for h in board]
    deck = Deck()
    deck.removeCards([h for hand in hands for h in hand] + board)
    hand_combs = getCombinations(deck, 7-len(hands[0]+board))
    stats = {}
    for h in hands:
        stats[str(h[0])+str(h[1])] = Multi_Stats()
        
    for hc in hand_combs:
        hr = {}
        for h in hands:
            print([hc[0]] + h + board)
            pdb.set_trace()
            # TODO : Stuff here
            res = HandRules([hc[0]] + h + board)._result
            
            hr[str(h[0])+str(h[1])] = res
            
        hr = evaluateWinner(hr)
        for h in hr:
            stats[h[0]].addOutCome(h[1], h[2])
    # print(stats.returnStats())
    # stats.printStats()


if __name__ == "__main__":
    hands = []
    hands.append([('Q','h'), ('K', 'h')])
    hands.append([('A','h'), ('A', 's')])
    hands.append([('8','c'), ('7', 'c')])
    board = [('4','s'), ('3', 'd'), ('2', 's'), ('5', 's')]
    run_simulation(hands, board)