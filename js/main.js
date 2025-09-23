
  const sections = document.querySelectorAll("section");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show"); // remove if you want re-animate
      }
    });
  }, { threshold: 0.2 });

  sections.forEach((sec) => {
    sec.classList.add("hidden"); // start hidden
    observer.observe(sec);
  });




  // Get current page filename (e.g., "about.html")
  const currentPage = window.location.pathname.split("/").pop();

  // Select all nav links
  const navLinks = document.querySelectorAll("nav a");

  navLinks.forEach(link => {
    // If link href matches current page, add "active"
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });



document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  // Get form values
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let message = document.getElementById("message").value.trim();
  let formMessage = document.getElementById("formMessage");

  // Basic validation
  if (name === "" || email === "" || message === "") {
    formMessage.style.color = "red";
    formMessage.textContent = "Please fill in all required fields.";
    return;
  }

  // Simple email check
  let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    formMessage.style.color = "red";
    formMessage.textContent = "Please enter a valid email address.";
    return;
  }

  // Success message
  formMessage.style.color = "green";
  formMessage.textContent = "✅ Thank you! Your message has been sent.";

  // Reset form
  document.getElementById("contactForm").reset();
});
