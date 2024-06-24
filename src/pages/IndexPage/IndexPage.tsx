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
