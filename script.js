window.addEventListener('scroll', function () {
  const sections = document.querySelectorAll('section');
  
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (sectionTop < windowHeight - 100) {
      section.classList.add('visible');
    } else {
      section.classList.remove('visible');
    }
  });
});