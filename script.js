new WOW().init();
const toggleIcon = document.querySelector(".toggle");

const userTheme = localStorage.getItem("theme");
const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

const themeCheck = () => {
    if (userTheme === "dark" || (!userTheme && systemTheme)) {
        document.documentElement.classList.add("dark");
        return;
    }
};

const themeSwitch = () => {
    if (document.documentElement.classList.contains("dark")) {
        document.documentElement.classList.remove("remove");
        localStorage.setItem("theme", "light")
        return;
    }
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
};

var el = document.querySelector('.toggle');
if (el) {
    el.addEventListener("click", () => {
        themeSwitch();
    });
}


themeCheck();
