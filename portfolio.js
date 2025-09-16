const toggle = document.getElementById('theme-toggle');
const root = document.documentElement;
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('nav ul');
const sections = document.querySelectorAll('section');


const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    } else {
      entry.target.classList.remove('visible');
    }
  });
}, { threshold: 0.1 });

sections.forEach(section => observer.observe(section));


// Load saved theme
const savedTheme = localStorage.getItem('theme');

if (savedTheme === 'light') {
  root.classList.remove('dark');
  toggle.checked = false;
} else {
  root.classList.add('dark');
  toggle.checked = true;
}

toggle.addEventListener('change', () => {
  if (toggle.checked) {
    root.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  } else {
    root.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  }
});


navToggle.addEventListener('click', () => {
  const expanded = navMenu.classList.toggle('active');
  navToggle.setAttribute('aria-expanded', expanded);
});