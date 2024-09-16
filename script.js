let currentIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    if (index >= slides.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = slides.length - 1;
    } else {
        currentIndex = index;
    }
    const offset = -currentIndex * 100;
    document.querySelector('.slider').style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

// Auto-slide every 5 seconds
setInterval(nextSlide, 5000);
// Mendapatkan semua elemen menu item
const menuItems = document.querySelectorAll('.menu-item');

// Menambahkan event listener untuk setiap menu item
menuItems.forEach(item => {
    item.addEventListener('click', () => {
        // Menghapus kelas aktif dari semua menu item
        menuItems.forEach(menu => menu.classList.remove('active'));

        // Menambahkan kelas aktif pada menu item yang diklik
        item.classList.add('active');
    });
});

