(function () {
  const root = document.documentElement;
  const toggle = document.getElementById('theme-toggle');

  // Respect saved preference or system preference
  const saved = localStorage.getItem('kngflow_theme');
  if (saved === 'dark' || (saved === null && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    root.setAttribute('data-theme', 'dark');
    toggle?.setAttribute('aria-pressed', 'true');
  }

  toggle?.addEventListener('click', () => {
    const isDark = root.getAttribute('data-theme') === 'dark';
    const next = isDark ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    localStorage.setItem('kngflow_theme', next);
    toggle.setAttribute('aria-pressed', String(next === 'dark'));
  });
})();