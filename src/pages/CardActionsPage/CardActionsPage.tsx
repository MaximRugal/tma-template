import type { FC } from 'react';
import './CardActionsPage.css';

import { Container } from '@mui/material';
import { NavigateBackButton } from '../../components/buttons/NavigateBackButton/NavigateBackButton';
import { CardActionButton } from '../../components/buttons/CardActionButton/CardActionButton';
import { CardInfoBlock } from '../../components/CardInfoBlock/CardInfoBlock';

export const CardActionsPage: FC = () => {
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
          <CardActionButton name='TOP UP' route='/' />
          <CardActionButton name='EXPORT CSV' route='/' />
          <CardActionButton name='WITHDRAW' route='/' />
          <CardActionButton name='EDIT CARD' route='/' />
          <CardActionButton name='REACTIVATE' route='/' />
          <CardActionButton name='CLOSE' route='/' />
          <CardActionButton name='ADD TRANSACTION' route='/' />
          <CardActionButton name='CARD EVENTS' route='/' />
          <CardActionButton name='BLOCK' route='/' />
        </div>
      </Container>
    </>
  );
};
