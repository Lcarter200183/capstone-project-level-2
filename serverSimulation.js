// function parseResponse(resolveValue) {
//     debugger;
//     const promise = resolveValue.test();
//     promise.then(viewResponse);

// }

function parseResponse(resolveValue) {
    debugger;
    //THE RESOLVE VALUE WILL BE A FETCH OBJECT
    //THE TEXT METHOD EXTRACTS THE STRINGIFIED OBJECT
    const response = JSON.parse(resolveValue);
    const message = response.message;
    output(message);
}




function getServerResponse(resolve) {
    debugger;
    setTimeout(activateResolve, 5000);

    function activateResolve() {
        const response = {
            message: "Successfully processed.",
        };
        const resolveValue = JSON.stringify(response);
        resolve(resolveValue);
    }

}




// function myFunction(resolve) {
//     debugger;
//     setTimeout(serverResponse, 5000);
//     display("Inside my myFunction");


//     function serverResponse(resolve) {
//         debugger;
//         display("Form was successfully processed.");
//         resolve("The promise is fulfilled.");
//     }
// }

function makeRequest() {
    debugger;
    const promise = new Promise(getServerResponse);
    return promise;
}

// function getMessage(resolveValue) {
//     debugger;
//     display(resolveValue);
// }

// function serverResponse(resolve) {
//     debugger;
//     display("Successfully processed.");
//     resolve("The promise is fulfilled");
// }


// function myFunction(resolve) {
//     debugger;
//     resolve();
// }