// Nelson Elemi Portfolio - JavaScript

// 1. Auto Year in footer
const yearElement = document.getElementById('year');
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

// 2. Welcome Message based on time
const greetingElement = document.getElementById('greeting');
if (greetingElement) {
  const hour = new Date().getHours();
  let greeting = 'Welcome';
  if (hour < 12) {
    greeting = 'Good morning';
  } else if (hour < 17) {
    greeting = 'Good afternoon';
  } else {
    greeting = 'Good evening';
  }
  greetingElement.textContent = greeting + ', welcome to my website!';
}

// 3. Show More / Show Less button in About
const moreBtn = document.getElementById('more-btn');
const moreText = document.getElementById('more-text');
if (moreBtn && moreText) {
  moreBtn.addEventListener('click', function() {
    if (moreText.style.display === 'none') {
      moreText.style.display = 'block';
      moreBtn.textContent = 'Show Less';
    } else {
      moreText.style.display = 'none';
      moreBtn.textContent = 'Show My Goal';
    }
  });
}// Animate skill bars when page loads
window.addEventListener('load', function() {
  const fills = document.querySelectorAll('.skill-fill');
  fills.forEach(function(fill) {
    setTimeout(function() {
      fill.style.width = fill.getAttribute('data-width');
    }, 300);
  });
});
// Contact form - check and show thank you message
const contactForm = document.getElementById('contact-form');
const formMsg = document.getElementById('form-msg');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    if (name === '' || email === '' || message === '') {
      formMsg.textContent = 'Please fill all fields.';
      formMsg.style.color = 'red';
    } else {
      formMsg.textContent = 'Thank you, ' + name + '! Your message has been received. I will reply to ' + email + ' within 24 hours.';
      formMsg.style.color = 'green';
      contactForm.reset();
    }
  });
}