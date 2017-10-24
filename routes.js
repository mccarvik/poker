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

exports.mongo_post = function (req, res) {
  var data = req.body;
  data = Object.keys(data)[0]
  data = pruneData(data);
  
  
  var mongoose = require("mongoose");
  var outcome = require("./app/scripts/hand_outcomes");
  mongoose.connect("mongodb://localhost/outcomes");
  // Create a new hand outcome and save to DB
  outcome.create(data, function(err, newlyCreated){
    if(err){
      console.log(err);
    } else {
      //redirect back to campgrounds page
      console.log("successfully added entry to DB");
    }
    });
}


function pruneData(data) {
  data = data.split(",")
  data = data.slice(1,data.length);
  for (var i=0; i < 9; i++) {
    data[i] = JSON.parse(data[i]).split(":")[1];
    data[i] = Number(data[i].substring(1, data[i].length-1));
    console.log(data[i]);
  }
  var db_data = {};
  db_data['hi_card'] = data[0];
  db_data['pair'] = data[1];
  db_data['two_pair'] = data[2];
  db_data['three_kind'] = data[3];
  db_data['straight'] = data[4];
  db_data['flush'] = data[5];
  db_data['full_house'] = data[6];
  db_data['four_kind'] = data[7];
  db_data['straight_flush'] = data[8];
  
  var cards = "";
  for (var i=9; i < data.length; i++) {
    cards += data[i] + ",";
  }
  cards = cards.substring(0,cards.length-1);
  cards = JSON.parse(cards);
  
  var hand = ""; var board = ""
  for (var key in cards) {
    if (key === 'holecard1' || key === 'holecard2') {
      hand += cards[key]['val'] + cards[key]['suit'];
    }
    if (key.substring(0,5) === 'board' && !isEmpty(cards[key])) {
      board += cards[key]['val'] + cards[key]['suit'];
    }
  }
  
  db_data['board'] = board;
  db_data['hand'] = hand;
  console.log(db_data);
  return db_data
}

function isEmpty(obj) {
    for(var prop in obj) {
        if(obj.hasOwnProperty(prop))
            return false;
    }

    return JSON.stringify(obj) === JSON.stringify({});
}




// http://www.sohamkamani.com/blog/2015/08/21/python-nodejs-comm/
// http://ourcodeworld.com/articles/read/286/how-to-execute-a-python-script-and-retrieve-output-data-and-errors-in-node-js