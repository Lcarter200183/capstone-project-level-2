    class myCar {
        color = "green";
        year = 2025
    }

    function display(message) {
        document.write(message);
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

    function serverResponse() {
        display("Successfully processed.");
        resolve("The promise is fulfilled.");
    }

    function myFunction(resolve) {
        debugger;
        setTimeout(serverResponse2, 5000);
        display("Inside my myFunction");
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
        const promise = new Promise(myFunction);
        promise.then(getMessage);
        display("Made a promise");
    }

    function getMessage(resolveValue) {
        display(resolveValue);
    }

    function parseResponse(resolveValue) {
        const response = JSON.parse(resolveValue);
        const message = response.message;
        display(message);
    }


    function handleSubmit(event) {
        event.preventDefault();
        const inputs = event.target;
        const emailInput = Input[0];
        const email = emailInput.value;
        display("Submitting form for" + email + "...");
        const promise = makeRequest("https://myserver.com")
        promise.then(parseResponse)
    }