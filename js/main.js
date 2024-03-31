const mainMenu = document.querySelector(".mainMenu"),
    closeMenu = document.querySelector(".closeMenu"),
    openMenu = document.querySelector(".openMenu"),
    menu_items = document.querySelectorAll("nav .mainMenu li a");
function show() {
    (mainMenu.style.display = "flex"), (mainMenu.style.top = "0");
}
function close() {
    mainMenu.style.top = "-100%";
}
openMenu.addEventListener("click", show),
    closeMenu.addEventListener("click", close),
    menu_items.forEach((e) => {
        e.addEventListener("click", function () {
            close();
        });
    });
const nav = document.querySelector(".nav");
function fixNav() {
    window.scrollY > nav.offsetHeight + 150 ? nav.classList.add("active") : nav.classList.remove("active");
}
window.addEventListener("scroll", fixNav),
    $(document).ready(function () {
        mixitup(".port-mix");
    });
