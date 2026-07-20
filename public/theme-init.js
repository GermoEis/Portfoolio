try {
  const storedTheme = localStorage.getItem("portfolio-theme");
  document.documentElement.dataset.theme = storedTheme === "dark" || storedTheme === "light"
    ? storedTheme
    : "dark";
} catch {
  document.documentElement.dataset.theme = "dark";
}
