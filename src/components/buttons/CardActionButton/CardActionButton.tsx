import type { FC } from 'react';

import { useNavigate } from 'react-router-dom';

import { ArrowForwardIos } from '@mui/icons-material';
import Button from '@mui/material/Button';

interface IRouteButton {
  name: string;
  route: string;
}

export const CardActionButton: FC<IRouteButton> = (props) => {
  const navigate = useNavigate();
  return (
    <>
      <Button
        variant='text'
        endIcon={<ArrowForwardIos />}
        color='primary'
        size='medium'
        onClick={() => navigate(props.route)}
      >
        {props.name}
      </Button>
    </>
  );
};
