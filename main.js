const closeButton = document.getElementById('closeButton');
const welcomeBanner = document.getElementById('welcome-banner');

closeButton.addEventListener("click", closeBanner);

function closeBanner() {
  welcomeBanner.style.display = "none";
}

const transactionsNav = document.getElementById('transactions-nav');
const mainPageContent = document.getElementById('main');
const homeNav = document.getElementById('home-nav');
const transactionsPage = document.getElementById('full-transactions');

transactionsNav.addEventListener('click', displayTransactions)

function displayTransactions() {
  mainPageContent.style.display = "none";
  transactionsPage.style.display = "block";
}

homeNav.addEventListener('click', displayHome)

function displayHome() {
  main.style.display = "block";
  transactionsPage.style.display = "none";
}
