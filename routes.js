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
  var myPythonScriptPath = '/app/handlers/' + name;
  // Use python shell
  var PythonShell = require('python-shell');
  var pyshell = new PythonShell(myPythonScriptPath);
  var options = JSON.stringify([1,2,3,4,5]);
  pyshell.send(options);
  pyshell.on('message', function (message) {
    console.log(message);
  });

  pyshell.end(function (err) {
    if (err)
      throw err;
    console.log('finished');
  });
  res.send('finished python stuff');
};

// http://www.sohamkamani.com/blog/2015/08/21/python-nodejs-comm/
// http://ourcodeworld.com/articles/read/286/how-to-execute-a-python-script-and-retrieve-output-data-and-errors-in-node-js