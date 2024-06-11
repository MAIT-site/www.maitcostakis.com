const scrollButtons = document.querySelectorAll('.scroll_button');
const scrollTexts = document.querySelectorAll('.scroll_text');

const swiper = new Swiper('.swiper', {
	loop: true,
	dynamicMainBullets: 5,

	pagination: {
		el: '.swiper-pagination',
		dynamicBullets: true,
		dynamicMainBullets: 5,
	},

	navigation: {
		nextEl: '.my_button_next',
		prevEl: '.my_button_prev',
	},
});

scrollButtons.forEach((button) => {
	button.addEventListener('click', () => {
		button.parentElement.previousElementSibling.classList.toggle('hidden');
		if (button.textContent === 'continue...') {
			button.textContent = 'roll up';
		} else {
			button.textContent = 'continue...';
		}
	});
});
