const yesButtons = document.querySelectorAll('.button_bottom[data-vote="yes"]');
const noButtons = document.querySelectorAll('.button_bottom[data-vote="no"]');
let closeButton = document.querySelector('[data-action="closeModal"]');
const modalText = document.querySelector('.modal_text');
const swiper = new Swiper('.swiper', {
  allowTouchMove: false,
});

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
    modalText.textContent = `Hooray! This is a picture "${button.dataset.paint}" of ${button.dataset.author} !`;
    toggleModal();
  } else if (button.value === 'true' && button.dataset.vote === 'no') {
    checkLastAnswer(button);
    modalText.textContent = `Correct! This is a picture "${button.dataset.paint}" of ${button.dataset.author}! We don't need it here.`;
    toggleModal();
  } else if (button.value === 'false' && button.dataset.vote === 'yes') {
    checkLastAnswer(button);
    modalText.textContent = `Wrong! This is a picture "${button.dataset.paint}" of ${button.dataset.author} !`;
    toggleModal();
  } else if (button.value === 'false' && button.dataset.vote === 'no') {
    checkLastAnswer(button);
    modalText.textContent = `Oh! it's a pity, it was a painting "${button.dataset.paint}" by ${button.dataset.author}, it would have been perfect for Costakis' collection.`;
    toggleModal();
  }
};
