const playButton = document.querySelector(".play_button");
const video = document.querySelector(".video");

playButton.addEventListener("click", () => {
  video.play();
  playButton.classList.add("invisible");
});

video.addEventListener("play", () => {
  playButton.classList.add("invisible");
});

video.addEventListener("pause", () => {
  playButton.classList.remove("invisible");
});
