const toggle = document.getElementById('theme-toggle');
const root = document.documentElement;

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