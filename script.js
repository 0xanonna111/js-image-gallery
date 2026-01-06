const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");

function openImg(src) {
  modal.style.display = "flex";
  modalImg.src = src.replace("/200/150", "/800/600");
}

function closeImg() {
  modal.style.display = "none";
}
