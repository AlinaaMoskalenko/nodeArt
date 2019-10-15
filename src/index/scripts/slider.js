export default class Slider {
  constructor(rootElement, elements) {
    this.rootElement = rootElement;
    this.elements = elements;
    this.currentSlide = 0;
    this.isSlide = this.isSlide.bind(this);

    this.render();
    this.autoPlay(1, this.slides);
  }

  render() {
    let id = 0;
    this.slides = [];

    for (let item of this.elements) {
      this.img = document.createElement('img');

      this.img.setAttribute('id', id);
      this.img.setAttribute('src', item);
      this.img.setAttribute('alt', 'Slider photo');

      const classes = id === 0 ? ['slider__photo', 'slider__photo_shown'] : ['slider__photo'];
      this.img.classList.add(...classes);

      this.rootElement.appendChild(this.img);

      this.slides.push(this.img);
      id ++;
    }

    this.toggles = this.rootElement.querySelectorAll('.arrow');

    for (let toggle of this.toggles) {
      toggle.addEventListener('click', ({ target: { id: idx }}) => this.onToggle(idx));
    }
  }

  onToggle(idx) {
    clearInterval(this.timer);
    clearTimeout(this.timeOutTimer);

    const value = idx === 'left' ? -1 : 1;
    let nextSlide = this.currentSlide + value;

    if (nextSlide === this.slides.length) {
      nextSlide = 0;
    } 

    if (nextSlide < 0) {
      nextSlide = this.slides.length - 1;
    }

    this.isSlide(this.currentSlide, nextSlide, this.slides);
    this.timeOutTimer = setTimeout(() => this.autoPlay(nextSlide + 1, this.slides), 2000);
  }

  autoPlay(slideId, slides) {
    let idx = slideId !== slides.length ? slideId : 0;

    this.timer = setInterval(() => {
      const currentSlide = idx === 0 ? slides.length - 1 : idx - 1;
      const nextSlide = idx === slides.length ? 0 : idx;
      this.isSlide(currentSlide, nextSlide, slides);

      idx = idx === slides.length - 1 ? 0 : idx + 1;
    }, 4000);
  }

  isSlide(currentId, nextId, slides) {
    slides[currentId].classList.remove('slider__photo_shown');
    slides[nextId].classList.add('slider__photo_shown');

    this.currentSlide = nextId;
  }
}
