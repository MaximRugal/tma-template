import type { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '@mui/material/Button';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

export const NavigateBackButton: FC = () => {
  const navigate = useNavigate();

  return (
    <Button
      variant='contained'
      startIcon={<ArrowBackIosIcon />}
      color='primary'
      size='medium'
      onClick={() => navigate(-1)}
    ></Button>
  );
};
