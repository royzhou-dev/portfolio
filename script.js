const titles = [
  "Data Scientist",
  "AI Engineer",
  "Tech Enthusiast",
  "Problem Solver"
];

const typingElement = document.querySelector(".typing-text");
const articleElement = document.querySelector(".typing-article");
const typingSpeed = 50;
const deletingSpeed = 30;
const pauseAfterTyping = 1500;
const pauseAfterDeleting = 250;

function getArticle(word) {
  const vowels = ["a", "e", "i", "o", "u"];
  return vowels.includes(word[0].toLowerCase()) ? "an " : "a ";
}

let titleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
  const currentTitle = titles[titleIndex];

  if (isDeleting) {
    typingElement.textContent = currentTitle.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typingElement.textContent = currentTitle.substring(0, charIndex + 1);
    charIndex++;
  }

  let timeout = isDeleting ? deletingSpeed : typingSpeed;

  if (!isDeleting && charIndex === currentTitle.length) {
    timeout = pauseAfterTyping;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    titleIndex = (titleIndex + 1) % titles.length;
    articleElement.textContent = getArticle(titles[titleIndex]);
    timeout = pauseAfterDeleting;
  }

  setTimeout(type, timeout);
}

document.addEventListener("DOMContentLoaded", () => {
  articleElement.textContent = getArticle(titles[0]);
  type();
});

// ===== Hamburger Menu Toggle =====
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('nav ul');

if (hamburger && navMenu) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', navMenu.classList.contains('open'));
  });

  // Close menu when nav link clicked
  navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navMenu.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
      hamburger.classList.remove('active');
      navMenu.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    }
  });
}

// ===== Contact Form Submission =====
const contactForm = document.getElementById('contact-form');
const formResult = document.getElementById('form-result');
const submitBtn = document.getElementById('submit-btn');

if (contactForm) {
  contactForm.addEventListener('submit', async function(e) {
    e.preventDefault();

    const originalText = submitBtn.value;
    submitBtn.value = 'Sending...';
    submitBtn.disabled = true;
    formResult.className = 'form-result';

    try {
      const formData = new FormData(contactForm);
      const data = Object.fromEntries(formData);

      // Set dynamic subject and from_name based on sender's name
      data.subject = `Portfolio Contact: ${data.name}`;
      data.from_name = data.name;

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(data)
      });

      const result = await response.json();

      if (response.ok) {
        formResult.className = 'form-result success';
        formResult.textContent = `Thanks ${data.name}! I'll get back to you soon.`;
        contactForm.reset();
      } else {
        formResult.className = 'form-result error';
        formResult.textContent = result.message || 'Something went wrong. Please try again.';
      }
    } catch (error) {
      formResult.className = 'form-result error';
      formResult.textContent = 'Network error. Please check your connection and try again.';
    } finally {
      submitBtn.value = originalText;
      submitBtn.disabled = false;
      setTimeout(() => { formResult.style.display = 'none'; }, 5000);
    }
  });
}
