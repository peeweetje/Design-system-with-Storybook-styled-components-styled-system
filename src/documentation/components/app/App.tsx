import React, { FC } from 'react';
import { BtnContainer } from '../../../components/button/button.styles';
import Sidebar from '../sidebar/sidebar';
import { AppStyling } from './app.styles';

const App: FC = () => {
  return (
    <AppStyling>
      <Sidebar />
      <BtnContainer primary='primary' onClick={() => console.log('clicked')}>
        click on me
      </BtnContainer>
    </AppStyling>
  );
};

export default App;
