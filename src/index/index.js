import './index.scss';

import { renderCard } from './scripts/renderCard';

const cardContainer = document.getElementById('card-container');

for (let i = 0; i < 5; i++) {
  cardContainer.appendChild(renderCard(i));
}
