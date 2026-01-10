const params = new URLSearchParams(window.location.search);
const role = params.get("role");

const greeting = document.getElementById("greeting-text");
const switchRole = document.getElementById("switch-role");

if (role === "farmer") {
    greeting.innerHTML = `Welcome back! <span>Farmer!</span>`;
    switchRole.innerHTML = "Consumer?";
} else if (role === "consumer") {
    greeting.innerHTML = `<span>Hey!</span> Good day.`;
    switchRole.innerHTML = "Farmer?";
}

switchRole.addEventListener("click", () => {
    const newRole = role === "farmer" ? "consumer" : "farmer";
    window.location.href = `login-form.html?role=${newRole}`;
});
