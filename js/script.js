const greetBtn = document.getElementById("greetBtn");
const alertBox = document.getElementById("alertBox");
const alertGreeting = document.getElementById("alertGreeting");
const alertMessage = document.getElementById("alertMessage");
const dateEl = document.getElementById("date");
const timeEl = document.getElementById("time");

/* Live Date & Time */
function updateDateTime() {
    const now = new Date();

    dateEl.textContent = now.toDateString();
    timeEl.textContent = now.toLocaleTimeString();
}

setInterval(updateDateTime, 1000);
updateDateTime();

/* Greeting Logic */
function getGreeting() {
    const hour = new Date().getHours();

    if (hour < 12) return "Good Morning ☀️";
    if (hour < 17) return "Good Afternoon 🌤️";
    if (hour < 21) return "Good Evening 🌙";
    return "Good Night 🌙";
}

/* Button Click */
greetBtn.addEventListener("click", () => {
    const greeting = getGreeting();

    // Native JS Alert (Task Requirement)
    alert(greeting + "! Welcome to JavaScript Task 2.2.");

    // Custom Alert
    alertGreeting.textContent = greeting;
    alertMessage.textContent =
        "This greeting is displayed based on the current time using JavaScript.";

    alertBox.style.display = "flex";
});

/* Close Custom Alert */
function closeAlert() {
    alertBox.style.display = "none";
}
