function myProcessForm(event) {
    debugger
    event.preventDefault();
    const form = event.target;
    const input = form[0];
    const value = input.value;
    output("Your appointment was submitted.");
}



function emailForm(event) {
    debugger;
    event.preventDefault();
    const emailForm = event.target;
    const emailInput = emailForm[0];
    const emailvalue = emailInput.value;
    output("Your appointment was submitted.");
}