    class myCar {
        color = "green";
        year = 2025
    }

    function display(message) {
        document.write(message);
    }

    function greeting() {
        display("Hello World!");
    }

    function serverResponse() {
        display("Form was successfully processed.");
    }

    function myFunction(callbackFunction) {
        callbackFunction();
    }

    function activator() {
        myFunction(greeting);
    }

    function delayedGreeting() {
        setTimeout(greeting, 5000);
    }


    function asychronous() {
        setTimeout(greeting, 5000);
        display("Waiting for the greeting...");
    }

    function submitForm(event) {

        const inputs = event.target;
        const nameinput = inputs[0];
        const emailInput = inputs[1];
        const email = emailInput.value;
        document.write("Submitting form for " + email + "...");
        setTimeout(serverResponse, 5000);
    }

    function myFunction(callbackFunction) {
        callbackFunction();
    }

    function serverResponse(resolve) {
        display("Successfully processed.");
        resolve("The promise is fulfilled.");
    }

    function myFunction(resolve) {
        debugger;
        setTimeout(serverResponse2, 5000);
        display("Inside my myFunction");


        function serverResponse2(resolve) {
            display("Form was successfully processed.");
            resolve("The promise is fulfilled");
        }
    }

    function activator(myParameter) {
        display("myParameter");
    }


    function displayObject() {
        const myCar = {
            color: "green",
            year: 2025,
        };

        const result = JSON.stringify(myCar);
        display(result);
    }

    function myPromise() {
        const promise = new Promise(getServerResponse);
        return promise;
    }

    function myFunction(resolve) {

        display("Inside my myFunction");
        resolve();
    }

    function makePromise() {
        debugger;
        const promise = new Promise(myFunction);
        promise.then(getMessage);
        display("Made a promise.");
    }

    function makeRequest() {
        debugger;
        const promise = new Promise(getServerResponse);
        return promise;
    }

    function getMessage(resolveValue) {
        debogger;
        display(resolveValue);
    }

    function getServerResponse(resolve) {
        setTimeout(activateResolve, 5000);

        function activateResolve(resolve) {

            const response = {
                message: "Successfully processed.",
            };
            const resolveValue = JSON.stringify(response);
            resolve(resolveValue);
        }
    }

    function parseResponse(resolveValue) {
        //THE RESOLVE VALUE WILL BE A FETCH OBJECT
        //THE TEXT METHOD EXTRACTS THE STRINGIFIED OBJECT
        const response = JSON.parse(resolveValue);
        const message = response.message;
        display(message);
    }

    function parseResponse(resolveValue) {
        const promise = resolveValue.test();
        promise.then(viewResponse);
    }

    function outerFunction() {
        const message = "Message from the outerFunction";
        innerFunction();

        function innerFunction() {
            display(message);
        }
    }

    function handleSubmit(event) {
        event.preventDefault();
        const inputs = event.target;
        const emailInput = inputs[0];
        const email = emailInput.value;
        display("Submitting form for" + email + "...");
        const promise = makeRequest("getServerResponse");
        promise.then(parseResponse);
    }