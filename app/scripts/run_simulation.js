function run_simulation(event) {
    console.log('here4');
    var exp = require('path');
    var spawn = require("child_process").spawn;
    var process = spawn('python',["/app/run_handler.py", ""]);
    console.log(process);
    // https://stackoverflow.com/questions/23450534/how-to-call-python-function-from-nodejs
}

function callbackFunc(response) {
    // do something with the response
    console.log(response);
}