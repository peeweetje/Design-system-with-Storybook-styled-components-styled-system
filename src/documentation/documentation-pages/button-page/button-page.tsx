import React, { FC } from 'react';
import { BtnContainer } from '../../../components/button/button.styles';

const ButtonPage: FC = () => {
  return (
    <>
      <>button-page under construction</>
      <BtnContainer variant='primary' onClick={() => console.log('clicked')}>
        click on me
      </BtnContainer>
    </>
  );
};

export default ButtonPage;
