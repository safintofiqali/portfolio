const menu = document.querySelector('.menu__nav');
console.log(menu);
const toggle = document.querySelector('.toggler');

menu.addEventListener("click", (e) => {
    let hidden = document.querySelectorAll(`.parts > div`);
    hidden.forEach(box => {
        if (!box.className.includes("hidden")) {
            box.classList.add("hidden");
        }
    });
    let className = e.target;
    let allBtns = document.querySelectorAll(".menu__link");
    allBtns.forEach(btn => {
        btn.classList.remove("active");
    })
    className.classList.add("active");
    let item = document.querySelector(`.${className.textContent.toLowerCase()}`);
    item.classList.remove("hidden");
});

toggle.addEventListener("click", () => {
    document.querySelector(".menu").classList.toggle("show");
});