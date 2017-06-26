import sys, json, pdb
sys.path.append("/home/ubuntu/workspace/poker")
from app.simulations.run_single_sim import run_simulation

def read_in():
    lines = sys.stdin.readlines()
    return json.loads(lines[0])

def cleanInputs(args):
    hand = []; board = [];
    for k,v in args.items():
        if 'holecard' in k:
            hand.append((args[k]['val'], args[k]['suit']))
        elif 'board' in k:
            board.append((args[k]['val'], args[k]['suit']))
    return (hand, board)

if __name__ == "__main__":
    args = read_in()
    args = {'board1': {'val': '10', 'suit': 'h'}, 'board2': {'val': '10', 'suit': 'd'}, 'holecard2': {'val': 'A', 'suit': 'c'}, 'board3': {'val': 'A', 'suit': 'd'}, 'holecard1': {'val': 'J', 'suit': 'd'}, 'board4': {'val': '9', 'suit': 'd'}}
    hand, board = cleanInputs(args)
    # print(hand, board)
    run_simulation(hand, board)