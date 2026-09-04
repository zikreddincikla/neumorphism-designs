window.dark_statu = false;

const darkButton = document.getElementById("dark-mode-button");
darkButton.addEventListener("click", () => {
    window.dark_statu = !window.dark_statu;

    document.body.classList.toggle("dark-body");
    const loginPage = document.getElementById("log-in-page");
    loginPage.classList.toggle("dark-log-in-page");
    loginPage.classList.toggle("shadow");

    darkButton.classList.toggle("dark-mode-button-dark");

    const loginBtn = document.getElementById("log-in-button");
    loginBtn.classList.toggle("dark-log-in-button");
    loginBtn.classList.toggle("shadow");

    document.querySelector(".welcome").classList.toggle("dark-welcome");
    document.getElementById("process").classList.toggle("dark-process");

    const inputs = document.querySelectorAll("input");
    inputs.forEach(item => {
        item.classList.toggle("dark-input");
    });

    const labels = document.querySelectorAll(".log-in-label");
    labels.forEach(item => {
        item.classList.toggle("dark-log-in-label");
    });

    const footer = document.querySelector("footer");
    footer.classList.toggle("dark-footer");
    footer.classList.toggle("shadow");

    const devDetails = document.querySelectorAll(".developer-detail");
    devDetails.forEach(item => {
        item.classList.toggle("dark-developer-detail");
    });
});