const sendForm = () => {
  const btnOpenModal = document.querySelector('.card-details__button_delivery');
  const cardDetailsTitle = document.querySelector('.card-details__title');
  const modal = document.querySelector('.modal');
  const modalTitle = modal.querySelector('.modal__title');
  const modalForm = modal.querySelector('form');

  const modalClose = () => {
    const inputs = modal.querySelectorAll('input');
    inputs.forEach(input => {
      input.value = '';
    });
    modal.style = '';
  };

  btnOpenModal.addEventListener('click', () => {
    modal.style.display = 'flex';
    modalTitle.textContent = cardDetailsTitle.textContent;
  });

  modal.addEventListener('click', (event) => {
    if (event.target.classList.contains('modal') || event.target.classList.contains('modal__close')) {
      modalClose();
    }
  });

  modalForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const labels = modal.querySelectorAll('.modal__label');
    const sendMessage = {};

    labels.forEach(label => {
      const span = label.querySelector('span');
      const input = label.querySelector('input');

      sendMessage[span.textContent] = input.value;
    });

    fetch('https://iphone13-promo-default-rtdb.firebaseio.com/orders/orders.json', {
      method: 'POST',
      body: JSON.stringify(sendMessage),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then(() => {
        console.log('Sent message: ' + JSON.stringify(sendMessage));
        modalClose();
      });
  });
};

sendForm();