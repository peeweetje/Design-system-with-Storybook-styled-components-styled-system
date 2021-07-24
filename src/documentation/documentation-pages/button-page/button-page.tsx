import React, { FC } from 'react';
import { BtnContainer } from '../../../components/button/button.styles';

const ButtonPage: FC = () => {
  return (
    <>
      <>button-page under construction</>
      <BtnContainer variant='primary' onClick={() => console.log('clicked')}>
        primary
      </BtnContainer>
      <BtnContainer variant='secondary' onClick={() => console.log('clicked')}>
        secondary
      </BtnContainer>
      <BtnContainer variant='disabled' onClick={() => console.log('clicked')}>
        secondary
      </BtnContainer>
    </>
  );
};

export default ButtonPage;
