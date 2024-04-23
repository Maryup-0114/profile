window.addEventListener('scroll', function() {
    var nav = document.querySelector('nav');
    if (window.scrollY > 0) {
        nav.classList.add('scrolled-color'); // Añade la clase al hacer scroll
    } else {
        nav.classList.remove('scrolled-color'); // Quita la clase al volver arriba
    }
});

$(document).ready(function () {
    $('.menu-toggle-btn').click(function () {
        $('.mobile-menu').toggleClass('active');
    });

    $('.close-menu-btn').click(function () {
        $('.mobile-menu').removeClass('active');
    });

    $('.menu-links a').click(function () {
        $('.mobile-menu').removeClass('active');
    });
});

/**button scroll up */
window.addEventListener('scroll', function() {
    let scrollButton = document.querySelector('.scroll-up');
    if (window.scrollY > 300) {
      scrollButton.style.display = 'flex';
    } else {
      scrollButton.style.display = 'none';
    }
  });
  
  document.querySelector('.scroll-up').addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  

