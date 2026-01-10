const profileBtn = document.querySelector(".profile-dropdown-btn");
const dropdownList = document.querySelector(".profile-dropdown-list");

profileBtn.addEventListener("click", () => {
    dropdownList.classList.toggle("active");
});

window.addEventListener("click", (e) => {
    if (!profileBtn.contains(e.target) && !dropdownList.contains(e.target)) {
        dropdownList.classList.remove("active");
    }
});

const sidebarLinks = document.querySelectorAll("#aside ul li a");

sidebarLinks.forEach((link) => {
    link.addEventListener("click", function () {
        document.querySelectorAll("#aside ul li").forEach((li) => {
            li.classList.remove("active");
        });
        this.parentElement.classList.add("active");
    });
});
