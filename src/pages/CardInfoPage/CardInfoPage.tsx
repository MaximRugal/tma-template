import type { FC } from 'react';

import { CardInfoBlock } from '../../components/CardInfoBlock/CardInfoBlock';

import Button from '@mui/material/Button';
import { Container } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { ArrowForwardIos } from '@mui/icons-material';

import { useNavigate } from 'react-router-dom';

import './IndexPage.css';
export const IndexPage: FC = () => {
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
        <CardInfoBlock />
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
      </Container>
      <Container>
        <div className='buttonsNavbar'>
          <Button variant='text' endIcon={<ArrowForwardIos />} color='primary' size='medium'>
            CARD DETAILS
          </Button>

          <Button
            variant='text'
            endIcon={<ArrowForwardIos />}
            color='primary'
            size='medium'
            onClick={() => navigate('/cardActions')}
          >
            ACTIONS
          </Button>
          <Button variant='text' endIcon={<ArrowForwardIos />} color='primary' size='medium'>
            TRANSACTIONS
          </Button>
        </div>
      </Container>
    </>
  );
};
