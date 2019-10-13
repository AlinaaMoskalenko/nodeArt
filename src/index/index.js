import './index.scss';

import { renderSlider, toggleSlider } from './scripts/slider';
import { renderCard } from './scripts/renderCard';

import slide1 from '../../assets/images/slide-1.png';
import slide2 from '../../assets/images/slide-2.png';

{ // feedback block
  const feedbackLink = document.getElementById('feedback');
  const container = document.querySelector('.grid-container');
  const formContainer = document.getElementById('feedback-form');
  const form = formContainer.querySelector('.form');
  const closeBtn = form.querySelector('.form__close-btn');

  feedbackLink.addEventListener('click', () => {
    container.classList.add('grid-container_hidden');
    formContainer.classList.add('grid-item-7_shown');

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      console.log('hello form');
    });
  });

  closeBtn.addEventListener('click', () => {
    container.classList.remove('grid-container_hidden');
    formContainer.classList.remove('grid-item-7_shown');
  });
}

{ // slider block
  const slider = document.getElementById('slider');
  const slideArray = renderSlider([ slide1, slide2 ], slider);
  const arrowsContainer = document.querySelector('.slider__arrows');
  const arrows = arrowsContainer.querySelectorAll('.arrow');
  toggleSlider(slideArray, arrows);
}

{ // catalog block
  const cardContainer = document.getElementById('card-container');
  for (let i = 0; i < 5; i++) {
    cardContainer.appendChild(renderCard(i));
  }
}
