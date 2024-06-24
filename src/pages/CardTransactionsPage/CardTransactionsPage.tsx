import type { FC } from 'react';
import Button from '@mui/material/Button';
import { Box, Container } from '@mui/material';

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useNavigate } from 'react-router-dom';
import { CardInfoBlock } from '../../components/CardInfoBlock/CardInfoBlock';
import './CardTransactionsPage.css';
import DataTable from '../../components/DataTable/DataTable';
export const CardTransactionsPage: FC = () => {
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
        <div>
          <Box sx={{ maxWidth: 320 }}>
            <DataTable />
          </Box>
        </div>
      </Container>
    </>
  );
};
