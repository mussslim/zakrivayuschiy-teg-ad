
const likeButtons = document.querySelectorAll(".like-button");
const saveButton = document.querySelector(".save-button");
const dialog = document.querySelector(".dialog");
const dialogButton = document.querySelector(".dialog__button");

likeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const heart = button.querySelector(".heart");

    button.classList.toggle("is-liked");
    heart.classList.toggle("is-liked");

    heart.classList.remove("is-animated");
    void heart.offsetWidth;
    heart.classList.add("is-animated");
  });
});

saveButton.addEventListener("click", () => {
  dialog.showModal();
});

dialogButton.addEventListener("click", () => {
  dialog.close();
});

dialog.addEventListener("click", (event) => {
  if (event.target === dialog) {
    dialog.close();
  }
});
