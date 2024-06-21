import type { FC } from 'react';
import Button from '@mui/material/Button';
import { Container } from '@mui/material';

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { ArrowForwardIos } from '@mui/icons-material';

import card from './card.png';

import './IndexPage.css';
export const IndexPage: FC = () => {
  return (
    <>
      <Container className='pageWrapper'>
        <div className='mainNavbar'>
          <Button variant='contained' startIcon={<ArrowBackIosIcon />} color='primary' size='medium'></Button>
        </div>
        <div className='cardWrapper'>
          <img src={card} className='cardIcon' />
          <div className='cardDataWrapper'>
            <p className='cardData'>4321*********3751</p>
            <p className='cardData'>04/26</p>
          </div>
          <div className='cardInfoWrapper'>
            <div className='cardInfo'>
              <p className='cardData'>Card : ✔️Active</p>
              <p className='cardData'>CLIENT: CRN</p>
              <p className='cardData'>BIN: DC8-3V</p>
              <p className='cardData'>TG: 6789655</p>
            </div>
            <div className='cardInfo'>
              <p className='cardData'>Balance : $9000.00</p>
              <p className='cardData'>Mast : $9000.00</p>
              <p className='cardData'>TOK: 12345F78</p>
            </div>
          </div>
        </div>
      </Container>
      <Container>
        <div className='buttonsNavbar'>
          <Button variant='text' endIcon={<ArrowForwardIos />} color='primary' size='medium'>
            {' '}
            CARD DETAILS{' '}
          </Button>

          <Button variant='text' endIcon={<ArrowForwardIos />} color='primary' size='medium'>
            {' '}
            ACTIONS{' '}
          </Button>

          <Button variant='text' endIcon={<ArrowForwardIos />} color='primary' size='medium'>
            {' '}
            TRANSACTIONS{' '}
          </Button>
        </div>
      </Container>
    </>
  );
};
