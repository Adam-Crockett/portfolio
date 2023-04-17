const themeToggleFunction = (
  themeToggleButton: HTMLButtonElement,
  prefersDarkScheme: MediaQueryList,
  currentTheme: string | null
) => {
  if (currentTheme === 'dark') {
    document.body.classList.toggle('dark-theme');
  } else if (currentTheme === 'light') {
    document.body.classList.toggle('light-theme');
  }

  themeToggleButton.addEventListener('click', () => {
    if (prefersDarkScheme.matches) {
      document.body.classList.toggle('light-theme');
      var theme = document.body.classList.contains('light-theme')
        ? 'light'
        : 'dark';
    } else {
      document.body.classList.toggle('dark-theme');
      var theme = document.body.classList.contains('dark-theme')
        ? 'dark'
        : 'light';
    }
    localStorage.setItem('theme', theme);
  });
};

export default themeToggleFunction;
