/* ============================================================
   PANTHERA AC — Membership Page JavaScript
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  // ---- FAQ Accordion ----
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');

    question.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Close all
      faqItems.forEach(faq => faq.classList.remove('active'));

      // Toggle current
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });

  // ---- Contact Form Handling ----
  const contactForm = document.getElementById('contactForm');
  const formSuccess = document.querySelector('.form-success');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      // Simulate form submission
      const submitBtn = contactForm.querySelector('.form-submit-btn');
      const origText = submitBtn.textContent;
      submitBtn.textContent = 'SENDING...';
      submitBtn.disabled = true;

      setTimeout(() => {
        contactForm.style.display = 'none';
        if (formSuccess) formSuccess.classList.add('show');
      }, 1500);
    });
  }

});
