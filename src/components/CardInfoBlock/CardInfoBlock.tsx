import type { FC } from 'react';
import card from './card.png';

export const CardInfoBlock: FC = () => {
  return (
    <>
      <div className='cardWrapper'>
        <img src={card} className='cardIcon' />
        <div className='cardDataWrapper'>
          <p className='cardData'>4321*********3751</p>
          <p className='cardData'>04/26</p>
        </div>
      </div>
    </>
  );
};
