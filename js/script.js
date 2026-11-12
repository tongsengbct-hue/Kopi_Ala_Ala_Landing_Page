document.addEventListener("DOMContentLoaded", () => {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  // Tutup menu mobile setelah tautan navigasi dipilih.
  document.querySelectorAll(".navbar-nav .nav-link, .navbar-nav .btn").forEach((link) => {
    link.addEventListener("click", () => {
      const menu = document.querySelector(".navbar-collapse");
      if (menu && menu.classList.contains("show") && window.bootstrap) {
        bootstrap.Collapse.getOrCreateInstance(menu).hide();
      }
    });
  });

  // Efek latar navbar saat halaman digulir.
  const navbar = document.querySelector(".navbar");
  const updateNavbar = () => {
    if (navbar) navbar.classList.toggle("is-scrolled", window.scrollY > 30);
  };
  updateNavbar();
  window.addEventListener("scroll", updateNavbar, { passive: true });
});

