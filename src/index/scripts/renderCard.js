import noPhoto from '../../../assets/images/nophoto.png';
import basketPhoto from '../../../assets/images/addtobasket_mini.png';

export const renderCard = (
  id,
  itemPhoto = noPhoto,
  itemTitle = 'Самый клевый чайник, который надо купить!',
  itemPrice = '1 900 p.'
) => {
  const card = document.createElement('div');

  const mainBlock = document.createElement('div');
  const photoContainer = document.createElement('div');
  const photo = document.createElement('img');
  const title = document.createElement('p');

  const buyingBlock = document.createElement('div');
  const price = document.createElement('span');
  const basket = document.createElement('img');

  card.appendChild(mainBlock);
  card.appendChild(buyingBlock);

  mainBlock.appendChild(photoContainer);
  mainBlock.appendChild(title);

  photoContainer.appendChild(photo);

  buyingBlock.appendChild(price);
  buyingBlock.appendChild(basket);

  card.classList.add('card');
  mainBlock.classList.add('card__main-block');
  photoContainer.classList.add('main-block__photo-container');
  title.classList.add('main-block__title');
  buyingBlock.classList.add('card__buying-block');
  price.classList.add('price');
  basket.classList.add('basket');

  card.setAttribute('id', `card_${id}`);
  photo.setAttribute('src', itemPhoto);
  photo.setAttribute('alt', 'Item photo');
  basket.setAttribute('src', basketPhoto);

  title.textContent = itemTitle;
  price.textContent = itemPrice;

  return card;
};