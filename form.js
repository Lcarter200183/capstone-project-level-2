function myprocessForm(event) {
    event.preventDefault();
    const form = event.target;
    const input = form[0];
    const value = input.value;
    let outputElement = document.getElementById("confirmationMessage1");

    if (!outputElement) {
        outputElement = document.createElement("p");
        outputElement.id = "confirmationMessage1";
        outputElement.style.color = "green";
        form.appendChild(outputElement);
    }

    outputElement.innerHTML = `Your appointment has been submitted successfully!`;
    outputElement.style.display = "block";
}

function emailForm(event) {
    event.preventDefault();
    const emailForm = event.target;
    const emailInput = emailForm[0];
    const emailvalue = emailInput.value;
    let outputElement = document.getElementById("confirmationMessage2");

    if (!outputElement) {
        outputElement = document.createElement("p");
        outputElement.id = "confirmationMessage2";
        outputElement.style.color = "green";
        form.appendChild(outputElement);
    }

    outputElement.innerHTML = `Your appointment has been submitted successfully!`;
    outputElement.style.display = "block";

}

function nameForm(event) {
    event.preventDefault();
    const form = event.target;
    const firstnameInput = form[0];
    const lastnameInput = form[1];
    const firstnamevalue = firstnameInput.value;
    let outputElement = document.getElementById("confirmationMessage3");

    if (!outputElement) {
        outputElement = document.createElement("p");
        outputElement.id = "confirmationMessage3";
        outputElement.style.color = "green";
        form.appendChild(outputElement);
    }

    outputElement.innerHTML = `Your appointment has been submitted successfully!`;
    outputElement.style.display = "block";
}

function numberForm(event) {
    event.preventDefault();
    const numberform = event.target;
    const numberInput = numberform[0];
    const numberValue = numberInput.value;
    let outputElement = document.getElementById("confirmationMessage3");

    if (!outputElement) {
        outputElement = document.createElement("p");
        outputElement.id = "confirmationMessage3";
        outputElement.style.color = "green";
        form.appendChild(outputElement);
    }

    outputElement.innerHTML = `Your appointment has been submitted successfully!`;
    outputElement.style.display = "block";
}

function datetimeForm(event) {
    event.preventDefault();
    const datetimeform = event.target;
    const datetimeInput = datetimeform[0];
    const datetimevalue = datetimeInput.value;
    let outputElement = document.getElementById("confirmationMessage3");

    if (!outputElement) {
        outputElement = document.createElement("p");
        outputElement.id = "confirmationMessage3";
        outputElement.style.color = "green";
        form.appendChild(outputElement);
    }

    outputElement.innerHTML = `Your appointment has been submitted successfully!`;
    outputElement.style.display = "block";
}