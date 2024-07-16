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
    modalText.textContent = `¡Hurra! Este es el cuadro "${button.dataset.paint}" de ${button.dataset.author}!`;
    toggleModal();
  } else if (button.value === 'true' && button.dataset.vote === 'no') {
    checkLastAnswer(button);
    modalText.textContent = `¡Correcto! ¡Este es el cuadro "${button.dataset.paint}" de ${button.dataset.author}! No lo necesitamos aquí.`;
    toggleModal();
  } else if (button.value === 'false' && button.dataset.vote === 'yes') {
    checkLastAnswer(button);
    modalText.textContent = `¡Incorrecto! ¡Este es el cuadro "${button.dataset.paint}" de ${button.dataset.author}!`;
    toggleModal();
  } else if (button.value === 'false' && button.dataset.vote === 'no') {
    checkLastAnswer(button);
    modalText.textContent = `¡Oh! ¡Que lástima, era el cuadro "${button.dataset.paint}", hubiera sido perfecto para la colección de Kostakis.`;
    toggleModal();
  }
};
