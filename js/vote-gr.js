const yesButtons = document.querySelectorAll('.button_bottom[data-vote="yes"]');
const noButtons = document.querySelectorAll('.button_bottom[data-vote="no"]');
let closeButton = document.querySelector('[data-action="closeModal"]');
const modalText = document.querySelector('.modal_text');
const swiper = new Swiper('.swiper', {
	allowTouchMove: false,
});

// Варианты ответов:

// Картина авангарда, пользователь ответил Да
// Hooray! This is a picture Название картины of Имя художника !

// Картина авангарда, пользователь ответил Нет
// Oh! it's a pity, it was a painting"...." it would have been perfect for Costakis' collection.

// Картина не авангарда, пользователь ответил Да
// Wrong! This is a picture Название картины of Имя художника !

// Картина не авангарда, пользователь ответил Нет
// Right! This is a picture Название картины of Имя художника !

yesButtons.forEach((button) => {
	button.addEventListener('click', () => {
		checkAnswer(button);
	});
});

noButtons.forEach((button) => {
	button.addEventListener('click', () => {
		checkAnswer(button);
	});
});

const toggleModal = () => {
	const modal = document.querySelector('.modal');
	modal.classList.toggle('open');
};

closeButton.addEventListener('click', () => {
	toggleModal();
	swiper.slideNext();
});

const checkLastAnswer = (button) => {
	if (button.dataset.index === 'last') {
		let closeLink = document.createElement('a');
		closeLink.className = 'full_button';
		closeLink.href = './paint_game_end.html';
		closeLink.textContent = 'Ok';
		closeLink.style = 'text-align: center;';
		closeButton.replaceWith(closeLink);
		return;
	}
};

const checkAnswer = (button) => {
	if (button.value === 'true' && button.dataset.vote === 'yes') {
		checkLastAnswer(button);
		modalText.textContent = `Ζήτω! Αυτή είναι μια εικόνα "${button.dataset.paint}" της ${button.dataset.author}!`;
		toggleModal();
	} else if (button.value === 'true' && button.dataset.vote === 'no') {
		checkLastAnswer(button);
		modalText.textContent = `Σωστός! Αυτή είναι μια εικόνα "${button.dataset.paint}" του ${button.dataset.author}! Δεν το χρειαζόμαστε εδώ.`;
		toggleModal();
	} else if (button.value === 'false' && button.dataset.vote === 'yes') {
		checkLastAnswer(button);
		modalText.textContent = `Λανθασμένος! Αυτή είναι μια εικόνα "${button.dataset.paint}" του ${button.dataset.author}!`;
		toggleModal();
	} else if (button.value === 'false' && button.dataset.vote === 'no') {
		checkLastAnswer(button);
		modalText.textContent = `Ω! κρίμα, ήταν ένας πίνακας "${button.dataset.paint}" της Γκοντσάροβα, θα ήταν τέλειος για τη συλλογή του Κωστάκη.`;
		toggleModal();
	}
};
