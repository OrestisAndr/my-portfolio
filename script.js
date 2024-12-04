// Εφέ Παράλλαξης (Parallax)
window.addEventListener('scroll', function () {
    const homeSection = document.getElementById('home');
    const scrollPosition = window.pageYOffset;

    // Κάνει την εικόνα φόντου να κινείται ανάλογα με την κύλιση
    homeSection.style.backgroundPosition = 'center ' + (scrollPosition * 0.5) + 'px';
});
