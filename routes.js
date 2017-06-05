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