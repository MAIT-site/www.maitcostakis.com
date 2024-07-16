const scrollButton = document.querySelector('.scroll_button');
const scrollText = document.querySelector('.scroll_text');

scrollButton.addEventListener('click', () => {
  scrollText.classList.toggle('hidden');
  // Continue
  if (scrollButton.textContent === 'Continuar...') {
    // Roll up
    scrollButton.textContent = 'Enrollar';
  } else {
    // Continue
    scrollButton.textContent = 'Continuar...';
  }
});
