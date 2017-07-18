function run_simulation(event, data, handleData) {
    
    var convert_suits = {
        '\u2660' : 's',
        '\u2665' : 'h',
        '\u2666' : 'd',
        '\u2663' : 'c'
    };
    
    var conv_data = {};
    for (var key in data) {
        conv_data[key] = {'suit' : convert_suits[data[key]['suit']], 'val' : data[key]['val']};
    }
    
    $.ajax({
        type : "POST",
        url : "/python/run_single_handler.py",
        data : conv_data,
        // data : JSON.parse(data),
        success: function(response, result) {
            // do something with the response
            console.log(response[0]);
            handleData(response[1]);
        }
    });
}

function run_multi_simulation(event, data, handleData) {
    
    var convert_suits = {
        '\u2660' : 's',
        '\u2665' : 'h',
        '\u2666' : 'd',
        '\u2663' : 'c'
    };
    
    var conv_data = {};
    for (var key in data) {
        conv_data[key] = {'suit' : convert_suits[data[key]['suit']], 'val' : data[key]['val']};
    }
    
    console.log(conv_data);
    $.ajax({
        type : "POST",
        url : "/python/run_multi_handler.py",
        data : conv_data,
        // data : JSON.parse(data),
        success: function(response, result) {
            // do something with the response
            console.log(response[0]);
            handleData(response[1]);
        }
    });
}
