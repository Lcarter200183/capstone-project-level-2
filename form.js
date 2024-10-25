function myprocessForm(event) {
    debugger;
    event.preventDefault();
    const form = event.target;
    const input = form(0);
    const value = input.value;
    output("Form Processed");
}

function emailForm(event) {
    event.preventDefalt();
    const emailform = event.target;
    const emailInput = form[0];
    const emailvalue = emailInput.value;
    output("we recieved your info.");

}

function nameForm(event) {
    event.preventDefault();
    const nameform = event.target;
    const firstnameInput = form[0];
    const lastnameInput = form[1];
    const firstnamevalue = firstnameInput.value;
    output("Your first name is ${firstname}.<br>");
}

function numberForm(event) {
    event.preventDefault()
    const numberform = event.target;
    const numberInput = phoneform[0];
    const numberValue = numberInput.value;
    output("Your phone number was recieved.<br>")

}

function datetimeForm(event) {
    event.preventDefault();
    const datetimeform = event.target;
    const datetimeInput = datetimeform[0];
    const datetimevalue = datetimeInput.value;
    output("We have recieved your appointment.<br>");

}