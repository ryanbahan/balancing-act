const closeButton = document.getElementById('closeButton');
const welcomeBanner = document.getElementById('welcome-banner');

closeButton.addEventListener("click", closeBanner);

function closeBanner() {
  welcomeBanner.style.display = "none";
}
