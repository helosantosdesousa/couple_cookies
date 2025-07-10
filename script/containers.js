  window.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');
    const containerHome = document.getElementById('container_home');

    if (navbar && containerHome) {
      const navbarHeight = navbar.offsetHeight;
      containerHome.style.paddingTop = navbarHeight + 'px';
    }
  });
