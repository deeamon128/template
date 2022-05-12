const productContainer = [...document.querySelectorAll(".product-container")];
const nextBtn = [...document.querySelectorAll(".next-btn")];

productContainer.forEach((item, i) => {
  let containerDimension = item.getBoundingClientRect();
  let containerWidth = containerDimension.width;

  nextBtn[i].addEventListener("click", () => {
    item.scrollLeft += containerWidth;
  });
});
