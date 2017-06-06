import sys, json, pdb
sys.path.append("/home/ubuntu/workspace/poker")
from app.simulations.run_single_sim import run_simulation

def read_in():
    lines = sys.stdin.readlines()
    return json.loads(lines[0])

def cleanInputs(args):
    return args

if __name__ == "__main__":
    # args = read_in()
    # hand, board = cleanInputs(args)
    
    hand = [('A','h'), ('A', 's')]
    board = [('A','c'), ('K', 's'), ('K', 'd'), ('K', 'h')]
    run_simulation(hand, board)