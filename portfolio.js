const toggle = document.getElementById('theme-toggle');
const root = document.documentElement;

// Load saved theme from localStorage
if (localStorage.getItem('theme') === 'light') {
    root.classList.remove('dark');
} else {
  root.classList.add('dark'); // Default to dark
}

toggle.addEventListener('click', () => {
    root.classList.toggle('dark');
    const currentTheme = root.classList.contains('dark') ? 'dark' : 'light';
    localStorage.setItem('theme', currentTheme);
});
