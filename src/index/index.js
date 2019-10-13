import './index.scss';

import { renderSlider, toggleSlider } from './scripts/slider';
import { renderCard } from './scripts/renderCard';

import slide1 from '../../assets/images/slide-1.png';
import slide2 from '../../assets/images/slide-2.png';

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
