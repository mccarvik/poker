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
        el = $("[title='Value']").filter('.' + cardpair)
        val = el[0].selectedOptions[0].label.toLowerCase();
    } else {
        val = input.toLowerCase();
        el = $("[title='Suit']").filter('.' + cardpair)
        suit = el[0].selectedOptions[0].label;
        suit = convertSuit[suit];
    }
    
    return(val + suit);
    // if (val.toLowerCase() != 'value' and suit.toLowerCase() != 'suit') {
    //     console.log(val + suit); 
    // } else {
    //     console.log("still waiting for other selection");
    // }
}