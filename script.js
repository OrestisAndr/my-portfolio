// Parallax Effect για την αρχική σελίδα
window.addEventListener('scroll', function() {
    const home = document.getElementById('home');
    const scrollPosition = window.scrollY;
    home.style.backgroundPosition = `center ${scrollPosition * 0.5}px`; // Εφέ parallax
});
