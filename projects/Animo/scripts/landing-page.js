const loginTrigger = document.getElementById("login-trigger");
const registerTrigger = document.getElementById("register-trigger");
const selectionText = document.getElementById("selection-text");
const landingView = document.getElementById("landing-view");
const loginSelection = document.getElementById("auth-selection");
const languageSelector = document.getElementById("language-selector");

loginTrigger.addEventListener("click", () => {
    // Hide landing view
    landingView.classList.add("hidden");

    // Hide language selector
    languageSelector.classList.add("hidden");

    // Show login selection
    loginSelection.classList.remove("hidden");

    selectionText.textContent = "Login as...";
});

registerTrigger.addEventListener("click", () => {
    // Hide landing view
    landingView.classList.add("hidden");

    // Hide language selector
    languageSelector.classList.add("hidden");

    // Show login selection
    loginSelection.classList.remove("hidden");

    selectionText.textContent = "Register as...";
});

const farmerBtn = document.getElementById("farmer-btn");
const consumerBtn = document.getElementById("consumer-btn");

farmerBtn.addEventListener("click", () => {
    window.location.href = "login-form.html?role=farmer";
});

consumerBtn.addEventListener("click", () => {
    window.location.href = "login-form.html?role=consumer";
});

const languageLinks = document.querySelectorAll(".languages a");

languageLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();

        languageLinks.forEach((l) => l.classList.remove("active"));

        link.classList.add("active");
    });
});
