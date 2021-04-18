import React, { FC } from 'react';
import { StyledButton } from '../../../components/button/button.styles';
import Sidebar from '../sidebar/sidebar';
import { AppStyling } from './app.styles';

const App: FC = () => {
  return (
    <AppStyling>
      <Sidebar />
      <StyledButton primary='primary' onClick={() => console.log('clicked')}>
        Styled button
      </StyledButton>
    </AppStyling>
  );
};

export default App;
