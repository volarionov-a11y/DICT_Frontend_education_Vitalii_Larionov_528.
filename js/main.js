console.log("Сайт кафедри завантажено успішно!");
const menuToggle = document.querySelector('.menu-toggle');
const mainMenu = document.querySelector('.main-menu');

if (menuToggle && mainMenu) {
    menuToggle.addEventListener('click', () => {
        mainMenu.classList.toggle('show');

        const isOpen = mainMenu.classList.contains('show');

        menuToggle.setAttribute('aria-expanded', isOpen);
    });
}