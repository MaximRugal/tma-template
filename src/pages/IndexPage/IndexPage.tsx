import type { FC } from 'react';
import './IndexPage.css';

import { Container } from '@mui/material';
import { CardActionButton } from '../../components/buttons/CardActionButton/CardActionButton';
import { CardInfoBlock } from '../../components/CardInfoBlock/CardInfoBlock';
import { NavigateBackButton } from '../../components/buttons/NavigateBackButton/NavigateBackButton';

export const IndexPage: FC = () => {
  return (
    <>
      <Container className='pageWrapper'>
        <div className='mainNavbar'>
          <NavigateBackButton />
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
          <CardActionButton name='CARD DETAILS' route='/cardActions' />
          <CardActionButton name='ACTIONS' route='/cardActions' />
          <CardActionButton name='TRANSACTIONS' route='/cardTransactions' />
        </div>
      </Container>
    </>
  );
};
