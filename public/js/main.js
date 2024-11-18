document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  
    // Form submission handler
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
      contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Add form submission logic here
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();
      });
    }
  
    // Navbar scroll effect
    const nav = document.querySelector('nav');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        nav.style.background = 'rgba(26, 35, 126, 0.95)';
      } else {
        nav.style.background = '#1a237e';
      }
    });
  });