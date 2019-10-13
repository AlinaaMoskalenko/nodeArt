const renderSlider = (imgArray, rootElement) => {
  let id = 0;
  let array = [];

  for (let item of imgArray) {
    const img = document.createElement('img');

    img.setAttribute('id', id);
    img.setAttribute('src', item);
    img.setAttribute('alt', 'Slider photo');

    const classes =
      id === 0 ? ['slider__photo', 'slider__photo_shown'] : ['slider__photo'];
    img.classList.add(...classes);

    rootElement.appendChild(img);

    array.push(img);
    id++;
  }

  return array;
};

const toggleSlider = (slideArray, arrows) => {
  let nextSlideId = 1;
  const timeInterval = 4000; //4s
  let timer = null;

  const isSlide = (prevId, id) => {
    slideArray[prevId].classList.remove('slider__photo_shown');
    slideArray[id].classList.add('slider__photo_shown');
  };

  const toggleByArrows = (idx) => {
    const currentSlideId = +document
      .querySelector('.slider__photo_shown')
      .getAttribute('id');
    
    let nextSlideId = currentSlideId + idx;
    if (nextSlideId === slideArray.length) {
      nextSlideId = 0;
    } 

    if (nextSlideId < 0) {
      nextSlideId = slideArray.length - 1;
    }

    isSlide(currentSlideId, nextSlideId);
    setTimeout(() => autoPlay(nextSlideId + 1, slideArray), 2000);
  };

  const autoPlay = (id, array) => {
    nextSlideId = id !== array.length ? id : 0;

    timer = setInterval(() => {
      const currentSlideId = nextSlideId === 0 ? array.length - 1 : nextSlideId - 1;
      isSlide(currentSlideId, nextSlideId);

      nextSlideId = nextSlideId === array.length - 1 ? 0 : nextSlideId + 1;
    }, timeInterval);
  };

  for (let i = 0; i < arrows.length; i++) {
    arrows[i].addEventListener('click', () => {
      clearInterval(timer);

      const arrowIdx = i === 0 ? -1 : 1; // -1 - left arrow, 1 - right arrow
      toggleByArrows(arrowIdx);
    });
  }

  autoPlay(nextSlideId, slideArray);
};

export { renderSlider, toggleSlider };
