function run_simulation(event, data) {
    console.log('here');
    $.ajax({
        type: "POST",
        url: "/python/run_single_handler.py",
        data: { cards: data },
        success: callbackFunc
    });
}

function callbackFunc(response) {
    // do something with the response
    console.log(response);
};