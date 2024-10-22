function myProcessForm(event) {
    event.preventDefault();
    const form = event.target;
    const input = form(0);
    const value = input.value;
    output("Form Proceessed");
}