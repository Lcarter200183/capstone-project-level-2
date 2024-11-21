function emailForm(event) {
    debugger;
    event.preventDefault();
    const emailForm = event.target;
    const emailInput = emailForm[0];
    const emailvalue = emailInput.value;
    output("Your appointment was submitted.");
}