var linkTags = document.querySelectorAll(".link");
linkTags.forEach((linkTag) => {
  linkTag.addEventListener("click", function () {
    removeActiveClass();
    this.classList.add("active");
  });
});
function removeActiveClass() {
  linkTags.forEach((linkTag) => {
    linkTag.classList.remove("active");
  });
}

/** Modal dialog image showing logic */
var modalImg = document.getElementById("modalImg");
var galleryImgs = document.querySelectorAll(".galleryImg");
var src = "";
galleryImgs.forEach((galleryImg) => {
  galleryImg.addEventListener("click", (event) => {
    src = event.target.dataset.src;
  });
});

$("#exampleModal").on("shown.bs.modal", function () {
  modalImg.src = src;
});
