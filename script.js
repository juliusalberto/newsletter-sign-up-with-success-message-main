document.addEventListener('DOMContentLoaded', function() {
    const signupForm = document.getElementById("card_container")
    const successMessage = document.getElementById("success-message")
    const subscribeBtn = document.getElementById("subscribe-btn")
    const email_alert = document.getElementById("valid-email-alert")
    const dismissBtn = document.getElementById("dismiss-btn")
    const emailInput = document.getElementById("email_input")
    const emailDisplay = document.querySelector("#success-message strong")

    subscribeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const email = emailInput.value;

        if (validateEmail(email)) {
            emailDisplay.textContent = email;
            signupForm.classList.add("hidden");
            successMessage.classList.remove("hidden");
            email_alert.classList.add("hidden");
            emailInput.classList.remove("alert");
        } else {
            email_alert.classList.remove("hidden");
            emailInput.classList.add("alert");
        }
    });

    dismissBtn.addEventListener('click', () => {
        successMessage.classList.add("hidden");
        signupForm.classList.remove("hidden");
        emailInput.value = '';
    });

    function validateEmail(text) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(text);
    }
})