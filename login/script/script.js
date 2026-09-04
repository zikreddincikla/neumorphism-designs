const button = document.getElementById("log-in-button");
const nameInput = document.getElementById("log-in-name");
const passwordInput = document.getElementById("log-in-password");

const nameWarning = document.querySelector(".name-warning");
const passwordWarning = document.querySelector(".password-warning");

button.addEventListener("click", () => {
    const nameLen = nameInput.value.length;
    const passLen = passwordInput.value.length;

    const warningClass = window.dark_statu ? "dark-warning-shadow" : "warning-shadow";

    if (nameLen < 3 || nameLen > 25) {
        nameWarning.classList.add("warning");
        nameInput.classList.add(warningClass);
    } else {
        nameWarning.classList.remove("warning");
        nameInput.classList.remove("warning-shadow", "dark-warning-shadow");
    }

    if (passLen < 3 || passLen > 25) {
        passwordWarning.classList.add("warning");
        passwordInput.classList.add(warningClass);
    } else {
        passwordWarning.classList.remove("warning");
        passwordInput.classList.remove("warning-shadow", "dark-warning-shadow");
    }
});

nameInput.addEventListener("input", () => {
    nameInput.classList.remove("warning-shadow", "dark-warning-shadow");
    nameWarning.classList.remove("warning");
});

passwordInput.addEventListener("input", () => {
    passwordInput.classList.remove("warning-shadow", "dark-warning-shadow");
    passwordWarning.classList.remove("warning");
});