const sliderBlock = document.querySelector(".slider-block"),
  slidesBlock = sliderBlock.querySelectorAll(".slider-img"),
  prev = sliderBlock.querySelector(".btn-left"),
  next = sliderBlock.querySelector(".btn-right");

let slideIndex = 0;

prev.addEventListener("click", () => {
  showSlideBlock(-1);
});
next.addEventListener("click", () => {
  showSlideBlock(1);
});
  function showslideBlock(n) {
  /*console.log(n);*/
  slideIndex += n;

  if (slideIndex < 0) {
    slideIndex = slidesBlock.length - 1;
  }
  if (slideIndex >= slidesBlock.length) {
    slideIndex = 0;
  }

  slidesBlock.forEach((item) => (item.style.display = "none"));
  slidesBlock[slideIndex].style.display = "block";
}

 showSlideBlock(0);

