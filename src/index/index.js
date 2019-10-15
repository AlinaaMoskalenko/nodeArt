import './index.scss';

import Slider from './scripts/slider';
import { renderCard } from './scripts/renderCard';
import FeedbackFrom from './scripts/feedback-form';

import slide1 from '../../assets/images/slide-1.png';
import slide2 from '../../assets/images/slide-2.png';

{ // feedback block
  const feedbackLink = document.getElementById('feedback-link');
  const feedbackFormContainer = document.getElementById('feedback-form-container');
  const gridContainer = document.querySelector('.grid-container');

  new FeedbackFrom(feedbackFormContainer, feedbackLink, gridContainer);
}

{ // slider block
  const slider = document.getElementById('slider');
  const cardArray = [ slide1, slide2 ];

  new Slider(slider, cardArray);
}

{ // catalog block
  const cardContainer = document.getElementById('card-container');
  for (let i = 0; i < 5; i++) {
    cardContainer.appendChild(renderCard(i));
  }
}
