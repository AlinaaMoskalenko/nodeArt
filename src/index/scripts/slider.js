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

const toggleSlider = (array) => {
  let id = 1;
  const timeInterval = 4000; //4s

  setInterval(() => {
    if (id === 0) {
      array[array.length - 1].classList.remove('slider__photo_shown');
      array[id].classList.add('slider__photo_shown');
    } else {
      array[id - 1].classList.remove('slider__photo_shown');
      array[id].classList.add('slider__photo_shown');
    }

    if (id === array.length - 1) {
      id = 0;
    } else {
      id++;
    }
  }, timeInterval);
};

export { renderSlider, toggleSlider };
