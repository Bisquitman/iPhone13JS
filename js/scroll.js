const scroll = () => {
  const links = document.querySelectorAll('.header-menu__item a');
  const fullCharacteristics = document.querySelector('.card-details__link-characteristics');

  const newArray = [...links, fullCharacteristics]

  seamless.polyfill();

  newArray.forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const id = link.getAttribute('href').substring(1);
      const section = document.getElementById(id);
      if (section) {
        seamless.elementScrollIntoView(section, {
          behavior: "smooth",
          block: "start",
        });
      } else {
        seamless.elementScrollIntoView(document.querySelector('#characteristics'), {
          behavior: "smooth",
          block: "start",
          inline: "center",
        });
      }
    });
  });
};

scroll();