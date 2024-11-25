function myprocessForm(event) {
    debugger;
    event.preventDefault();
    const form = event.target;
    const input = form[0];
    const value = input.value;
    output("Your info is submitted for your appointment.");
}


function emailForm(event) {
    debugger;
    event.preventDefault();
    const emailForm = event.target;
    const emailInput = emailForm[0];
    const emailvalue = emailInput.value;
    output("Your info is submitted for your appointment.");
}

function nameForm(event) {
    debugger;
    event.preventDefault();
    const form = event.target;
    const firstnameInput = form[0];
    const lastnameInput = form[1];
    const firstnamevalue = firstnameInput.value;
    output("Your info is submitted for your appointment.");
}

function numberForm(event) {
    debugger;
    event.preventDefault();
    const numberForm = event.target;
    const numberInput = numberForm[0];
    const numberValue = numberInput.value;
    output("Your info is submitted for your appointment.");
}

function datetimeForm(event) {
    debugger;
    event.preventDefault();
    const datetimeForm = event.target;
    const datetimeInput = datetimeForm[0];
    const datetimevalue = datetimeInput.value;
    output("Your info is submitted for your appointment.");
}