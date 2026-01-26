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
