const navLinks = document.querySelectorAll("[data-screen]");
const screens = document.querySelectorAll(".screen");

function showScreen(screenId) {
  navLinks.forEach((link) => {
    link.classList.toggle("is-active", link.dataset.screen === screenId);
  });

  screens.forEach((screen) => {
    screen.classList.toggle("is-active", screen.id === screenId);
  });
}

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    showScreen(link.dataset.screen);
  });
});

showScreen("daily-puzzle");
