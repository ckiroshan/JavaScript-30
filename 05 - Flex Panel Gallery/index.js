// Selectors
const panels = document.querySelectorAll(".panel");

// Handlers
function togglePanel() {
  this.classList.toggle("open");
}

function toggleActive(e) {
  console.log(e.propertyName);
  if (e.propertyName.includes("flex")) {
    this.classList.toggle("open-active");
  }
}

// Event Listeners
panels.forEach((panel) => panel.addEventListener("click", togglePanel));
panels.forEach((panel) => panel.addEventListener("transitionend", toggleActive));
