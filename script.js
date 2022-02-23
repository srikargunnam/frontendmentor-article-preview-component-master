const share = document.querySelector(".share-btn-container");
const shareBtn = document.querySelector(".share-btn");
const shareLinks = document.querySelector(".share-links");

document.addEventListener("click", (event) => {
  if (event.target == share || event.target == shareBtn) {
    shareLinks.style.opacity = 1;
  } else {
    shareLinks.style.opacity = 0;
  }
});
