import sys
sys.path.append("/home/ubuntu/workspace/poker")
from app import run_handler
from socketIO_client import SocketIO, LoggingNamespace

def run_a_script(*args):
    print('arg1 and arg2', args)
    run_handler.run_simulation()

socketIO = SocketIO('0.0.0.0', 8080, LoggingNamespace)
socketIO.on('run_a_script_event', run_a_script)