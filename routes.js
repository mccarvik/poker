/********
 * Routes
 ********/

exports.index = function(req, res){
    console.log('Home');
    res.render('home');
};

 
exports.partials = function (req, res) {
  var name = req.params.name;
  console.log(name);
  res.render(name);
};

exports.python = function (req, res) {
  var name = req.params.name;
  console.log(name);
  res.send('We got here, now do python stuff');
  var myPythonScriptPath = '/app/run_handler.py';
  // Use python shell
  var PythonShell = require('python-shell');
  var options = "ddd";
  PythonShell.run(myPythonScriptPath, options, function (err, results) {
    if (err) throw err;
    // results is an array consisting of messages collected during execution
    console.log('results: %j', results);
    });
  
  // pyshell.end(function (err) {
  //   if (err)
  //     throw err;
  // });
  
  // script.run_simulation([['A','h'],['A','s']], [])
  res.send('finished python stuff');
  
};
// http://www.sohamkamani.com/blog/2015/08/21/python-nodejs-comm/
// http://ourcodeworld.com/articles/read/286/how-to-execute-a-python-script-and-retrieve-output-data-and-errors-in-node-js