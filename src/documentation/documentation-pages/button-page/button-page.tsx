import React, { FC } from 'react';
import { BtnContainer } from '../../../components/button/button.styles';

const ButtonPage: FC = () => {
  return (
    <>
      <div>button-page under construction</div>
      <BtnContainer variant='primary' onClick={() => console.log('clicked')}>
        click on me
      </BtnContainer>
    </>
  );
};

export default ButtonPage;
