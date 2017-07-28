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
            hands[k[:-1]] = []
        elif 'saved' in k:
            hands[k[:6]] = []
    
    for k,v in args.items():
        if 'holecard' in k:
            hands[k[:-1]].append((args[k]['val'], args[k]['suit']))
        elif 'saved' in k:
            hands[k[:6]].append((args[k]['val'], args[k]['suit']))
        elif 'board' in k:
            board.append((args[k]['val'], args[k]['suit']))
    return (hands, board)

if __name__ == "__main__":
    # args = read_in()
    args = {"holecard1":{"suit":"c","val":"3"},"holecard2":{"suit":"c","val":"J"},"board1":{"suit":"s","val":"6"},"board2":{"suit":"h","val":"4"},"board3":{"suit":"d","val":"6"},"saved0_1":{"suit":"h","val":"A"},"saved0_2":{"suit":"h","val":"9"}}
    # args = {"holecard1":{"suit":"c","val":"3"},"holecard2":{"suit":"c","val":"J"},"saved0_1":{"suit":"h","val":"A"},"saved0_2":{"suit":"h","val":"9"}}
    hands, board = cleanInputs(args)
    # print(hands, board)
    run_simulation(hands, board)