// scroll spy event

const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function() {
  const scrollPosition = window.scrollY;
  
  if (scrollPosition > 0) {
    navbar.classList.add('navbar-scrolled');
  } else {
    navbar.classList.remove('navbar-scrolled');
  }
});


  
const Navbar = document.querySelector('#navbar');
const sections = document.querySelectorAll('section');
const navLinks = Navbar.querySelectorAll('a');

window.addEventListener('scroll', () => {
  let current = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute('id');
    }
  });
  
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').includes(`#${current}`)) {
      link.classList.add('active');
    }
  });
});
