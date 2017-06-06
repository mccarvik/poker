function run_simulation(event) {
    console.log('here4');
    $.ajax({
        type: "POST",
        url: "/python/run_single_handler.py",
        data: { param: "" },
        success: callbackFunc
    });
}

function callbackFunc(response) {
    // do something with the response
    console.log(response);
};