function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

document.getElementById('logo').addEventListener('click', function() {
  document.getElementById('profile').scrollIntoView({ behavior: 'smooth' });
});
