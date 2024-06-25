import type { FC } from 'react';
import card from './card.png';
import './CardInfoBlock.css';
export const CardInfoBlock: FC = () => {
  return (
    <>
      <div className='cardWrapper'>
        <img src={card} className='cardIcon' />
        <div className='cardDataWrapper'>
          <p className='cardData'>0123*********2345</p>
          <p className='cardData'>01/29</p>
        </div>
      </div>
    </>
  );
};
