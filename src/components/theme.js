const themeToggle = document.getElementById('themeToggle');

function toggleTheme() {
    if (document.documentElement.getAttribute('data-theme') === 'light') {
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
    }
}

themeToggle.addEventListener('click', () => toggleTheme());

export {toggleTheme};
