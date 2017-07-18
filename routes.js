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
  var cards = req.body;
  var myPythonScriptPath = '/app/handlers/' + name;
  // Use python shell
  var PythonShell = require('python-shell');
  var pyshell = new PythonShell(myPythonScriptPath);
  var options = JSON.stringify(cards);
  console.log(options);
  pyshell.send(options);
  var output = [];
  pyshell.on('message', function (message) {
    output.push(message);
  });

  pyshell.end(function (err) {
    if (err)
      console.log(err);
    console.log('finished');
    
    res.status(200).send(['Successfully finished python stuff', output]);
    // res.send(200, ['Successfully finished python stuff', output]);
  });
  // res.send('finished python stuff');
};






// http://www.sohamkamani.com/blog/2015/08/21/python-nodejs-comm/
// http://ourcodeworld.com/articles/read/286/how-to-execute-a-python-script-and-retrieve-output-data-and-errors-in-node-js