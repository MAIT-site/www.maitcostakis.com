const scrollButton = document.querySelector('.scroll_button');
const scrollText = document.querySelector('.scroll_text');

scrollButton.addEventListener('click', () => {
	scrollText.classList.toggle('hidden');
	// Continue
	if (scrollButton.textContent === 'ΣΥΝΕΧΙΣΕ...') {
		// Roll up
		scrollButton.textContent = 'ΓΥΡΙΣΕ ΠΙΣΩ';
	} else {
		// Continue
		scrollButton.textContent = 'ΣΥΝΕΧΙΣΕ...';
	}
});
