$(document).ready(function () {
    if (window.jQuery) {  
        // jQuery is loaded
        console.log('jquery found')
    } else {
        // jQuery is not loaded
        console.log('no jquery')
    }
});

var convertSuit = {
    '\u2660' : "s",
    '\u2665' : "h",
    '\u2666' : "d",
    '\u2663' : "c"
};

function insertCard(s_v, input, cardpair) {
    var el; var suit; var val;
    if (s_v === 'Suit') {
        suit = input;
        suit = convertSuit[suit];
        // setting the value of the select object
        $("[title='Suit']").filter('.' + cardpair)[0].val = input;
        el = $("[title='Value']").filter('.' + cardpair)
        val = el[0].val;
    } else {
        val = input;
        $("[title='Value']").filter('.' + cardpair)[0].val = input;
        el = $("[title='Suit']").filter('.' + cardpair)
        suit = el[0].val;
        suit = convertSuit[suit];
    }
    
    if (val === undefined || suit === undefined) {
        console.log("still waiting for other selection");
        return undefined;
    } else {
        return(val + suit).toUpperCase();    
    }
}

function callDB(data) {
    $.ajax({
        type: "POST",
        url: "/mongo_post",
        data: JSON.stringify(data),
        success: function(){
            console.log('here return');
        }
    });
}