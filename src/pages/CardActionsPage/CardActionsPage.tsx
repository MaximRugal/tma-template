import type { FC } from 'react';
import Button from '@mui/material/Button';
import { Container } from '@mui/material';

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { ArrowForwardIos } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import card from './card.png';

import './CardActionsPage.css';
export const CardActionsPage: FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <Container className='pageWrapper'>
        <div className='mainNavbar'>
          <Button
            variant='contained'
            startIcon={<ArrowBackIosIcon />}
            color='primary'
            size='medium'
            onClick={() => navigate(-1)}
          ></Button>
        </div>
        <div className='cardWrapper'>
          <img src={card} className='cardIcon' />
          <div className='cardDataWrapper'>
            <p className='cardData'>4321*********3751</p>
            <p className='cardData'>04/26</p>
          </div>
        </div>
      </Container>
      <Container>
        <div className='buttonsNavbar'>
          <Button variant='text' endIcon={<ArrowForwardIos />} color='primary' size='medium'>
            TOP UP
          </Button>

          <Button variant='text' endIcon={<ArrowForwardIos />} color='primary' size='medium'>
            EXPORT CSV
          </Button>

          <Button variant='text' endIcon={<ArrowForwardIos />} color='primary' size='medium'>
            WITHDRAW
          </Button>
          <Button variant='text' endIcon={<ArrowForwardIos />} color='primary' size='medium'>
            EDIT CARD
          </Button>
          <Button variant='text' endIcon={<ArrowForwardIos />} color='primary' size='medium'>
            REACTIVATE
          </Button>
          <Button variant='text' endIcon={<ArrowForwardIos />} color='primary' size='medium'>
            CLOSE
          </Button>
          <Button variant='text' endIcon={<ArrowForwardIos />} color='primary' size='medium'>
            ADD TRANSACTION
          </Button>
          <Button variant='text' endIcon={<ArrowForwardIos />} color='primary' size='medium'>
            CARD EVENTS
          </Button>
          <Button variant='text' endIcon={<ArrowForwardIos />} color='primary' size='medium'>
            BLOCK
          </Button>
        </div>
      </Container>
    </>
  );
};
