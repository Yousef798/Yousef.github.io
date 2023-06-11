
document.addEventListener('DOMContentLoaded', function() {
    let menu = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navigation');
  
    menu.onclick = function() {
      menu.classList.toggle('bx-x');
      navbar.classList.toggle('open');
    };
  });
