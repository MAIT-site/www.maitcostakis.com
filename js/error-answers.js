const errorButtons = document.querySelectorAll('.error-button');
const ANIMATION_DURATION = 300; // ms

errorButtons.forEach((button) => {
	button.addEventListener('click', (event) => {
		// У каждой кнопки убирается класс "error" если он есть
		errorButtons.forEach((button) => {
			button.classList.remove('error');
		});
		// Добавляется анимация и красный фон
		button.classList.add('error-animation');
		button.classList.add('error');

		// Удаляется анимация по окончанию
		setTimeout(() => {
			button.classList.remove('error-animation');
		}, ANIMATION_DURATION);

		// Удаляется красный фон
		setTimeout(() => {
			button.classList.remove('error');
		}, 1500);
	});
});
