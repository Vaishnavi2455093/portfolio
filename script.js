// Set current year in footer if element exists
(function () {
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
})();

// Simple contact form handler (front-end only)
function handleContactSubmit(event) {
  event.preventDefault();
  const status = document.getElementById("contact-status");
  if (status) {
    status.textContent = "Thank you! Your message has been recorded locally.";
  }
  event.target.reset();
  return false;
}

// Simple login form handler (demo only – no real auth)
function handleLoginSubmit(event) {
  event.preventDefault();
  const status = document.getElementById("login-status");
  if (status) {
    status.textContent =
      "Login demo only – connect this to your Python backend later.";
  }
  return false;
}

