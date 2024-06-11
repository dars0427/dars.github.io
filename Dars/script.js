document.addEventListener('DOMContentLoaded', function() {
    AOS.init();

});

// JavaScript to toggle the mobile menu
document.getElementById('menu-toggle').onclick = function() {
    var menu = document.getElementById('menu');
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
    } else {
        menu.classList.add('hidden');
    }
};
