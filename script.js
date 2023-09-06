const hamburger = document.getElementById('hamburger');
const navList = document.getElementById('navList');
hamburger.addEventListener('click', function() {
  this.classList.toggle('active');
  navList.classList.toggle('active');
});