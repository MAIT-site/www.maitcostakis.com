const scrollButton = document.querySelector(".scroll_button");
const scrollText = document.querySelector(".scroll_text");

scrollButton.addEventListener("click", () => {
  scrollText.classList.toggle("hidden");
  if (scrollButton.textContent === "continue...") {
    scrollButton.textContent = "roll up";
  } else {
    scrollButton.textContent = "continue...";
  }
});
