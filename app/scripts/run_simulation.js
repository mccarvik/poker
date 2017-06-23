function run_simulation(event, data) {
    console.log('here');
    console.log(data)
    // https://stackoverflow.com/questions/10574374/how-do-i-retrieve-the-object-i-passed-in-jquery-ajaxs-data-attribute-on-the
    $.ajax({
        type: "POST",
        url: "/python/run_single_handler.py",
        "contentType": "application/json",
        "data": { "name": "random object" },
        "dataType": "json",
        // dataType: "json",
        // contentType: "application/json; charset=utf-8",
        // data: JSON.stringify({ data }),
        success: callbackFunc
    });
}

function callbackFunc(response) {
    // do something with the response
    console.log(response);
};