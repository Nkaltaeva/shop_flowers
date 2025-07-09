const openReviewsModal = document.querySelector(
  ".reviews-block-user .reviews-block-user-read-more"
);
openReviewsModal.addEventListener("click", openModalUser);
function openModalUser() {
  document.getElementById("reviews-modal").style.display = "block";
}

const closeReviewsModal = document.querySelector(
  ".reviews-modal .reviews-modal-close"
);
closeReviewsModal.addEventListener("click", closeModalUser);

function closeModalUser() {
  document.getElementById("reviews-modal").style.display = "none";
}
