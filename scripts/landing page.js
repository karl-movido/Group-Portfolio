const slides = document.querySelectorAll(".slider-item");
const dots = document.querySelectorAll(".dot");

let currentSlide = 0;
let slideInterval = setInterval(nextSlide, 5000);

function showSlide(index) {
    slides.forEach((slide) => slide.classList.remove("active"));
    dots.forEach((dot) => dot.classList.remove("active"));

    slides[index].classList.add("active");
    dots[index].classList.add("active");

    currentSlide = index;
}

function nextSlide() {
    let next = (currentSlide + 1) % slides.length;
    showSlide(next);
}

dots.forEach((dot) => {
    dot.addEventListener("click", () => {
        clearInterval(slideInterval);
        showSlide(Number(dot.dataset.slide));
        slideInterval = setInterval(nextSlide, 5000);
    });
});

showSlide(0);
