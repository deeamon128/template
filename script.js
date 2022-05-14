const productContainer = [...document.querySelectorAll(".product-container")];
const nextBtn = [...document.querySelectorAll(".next-btn")];
const dots = [...document.getElementsByClassName("dot")];

productContainer.forEach((item, i) => {
  let containerDimension = item.getBoundingClientRect();
  let containerWidth = containerDimension.width;

  nextBtn[i].addEventListener("click", () => {
    item.scrollLeft += containerWidth;
  });
});

// function currentSlide(n) {
//   var i;
//   const slides = document.getElementsByClassName("product-thumb");
//   const dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {
//     n = 1;
//   } else if (n < 1) {
//     n = slides.length;
//   }
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }

//   slides[n - 1].style.display = "block";
//   dots[n - 1].className += " active";
// }
// 0;

// let slidePosition = 0;
// const slides = document.getElementsByClassName(".product-card");
// const totalSlides = slides.lenght;

// document
//   .getElementsByClassName(".next-btn")
//   .addEventListener("click", function () {
//     moveToNextSlide();
//   });

// function moveToNextSlide() {
//   if (slidePosition === totalSlides - 1) {
//     slidePosition = 0;
//   } else {
//     slidePosition++;
//   }

//   updateSlidePosition();
// }
