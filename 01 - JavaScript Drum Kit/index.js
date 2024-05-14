// Event Listeners
function playSound(e) {
  // Play audio on keystroke
  const audio = document.querySelector(`audio[data-key="${e.key}"]`);
  const key = document.querySelector(`.key[data-key="${e.key}"]`);
  if (!audio) {
    return;
  }
  audio.currentTime = 0;
  audio.play();

  key.classList.add("playing");
}
window.addEventListener("keydown", playSound);

// Removes key transition
function removeTransition(e) {
  if (e.propertyName !== "transform") {
    return;
  }
  this.classList.remove("playing");
}

const keys = document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));


