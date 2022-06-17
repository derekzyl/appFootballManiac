import {NavigationContainer} from '@react-navigation/native';
import RootNavigation from '@src/navigation';
import {theme} from '@theme/index';
import React from 'react';
import 'react-native-gesture-handler';
import {ThemeProvider} from 'styled-components/native';

declare const global: {HermesInternal: null | {}};

const App: React.FC<{name?: string}> = ({}) => {
  return <RootNavigation />;
};

const OurApp = () => {
  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </NavigationContainer>
  );
};

export default OurApp;
