import sys, json, pdb
sys.path.append("/home/ubuntu/workspace/poker")
from app.simulations.run_multi_hand_sim import run_simulation

def read_in():
    lines = sys.stdin.readlines()
    return json.loads(lines[0])

def cleanInputs(args):
    hands = {}; board = [];
    for k,v in args.items():
        if 'holecard' in k:
            hands[k] = []
        elif 'saved' in k:
            hands[k[:6]] = []
    
    for k,v in args.items():
        if 'holecard' in k:
            hands[k].append((args[k]['val'], args[k]['suit']))
        elif 'saved' in k:
            hands[k[:6]].append((args[k]['val'], args[k]['suit']))
        elif 'board' in k:
            board.append((args[k]['val'], args[k]['suit']))
    return (hands, board)

if __name__ == "__main__":
    args = read_in()
    # args = {'board1': {'val': '10', 'suit': 'h'}, 'board2': {'val': '10', 'suit': 'd'}, 'holecard2': {'val': 'A', 'suit': 'c'}, 'board3': {'val': 'A', 'suit': 'd'}, 'holecard1': {'val': 'J', 'suit': 'd'}, 'board4': {'val': '9', 'suit': 'd'}}
    hands, board = cleanInputs(args)
    # print(hand, board)
    run_simulation(hands, board)