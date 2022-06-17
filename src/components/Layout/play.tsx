import {Container, Content, Footer} from 'native-base';
import React, {FC} from 'react';
import {StatusBar} from 'react-native';
import {GradientBackground} from '../General/GradientBackground';

interface LayoutInterface {
  children: React.ReactNode;
  FooterComponent?: FC;
}

const PlayLayout = ({children, FooterComponent}: LayoutInterface) => {
  return (
    <Container>
      <StatusBar barStyle="light-content" />
      <GradientBackground useAngle angle={135}>
        <Content showsVerticalScrollIndicator={false} padder>
          {children}
        </Content>
      </GradientBackground>

      {FooterComponent && (
        // <Footer>
        <FooterComponent />
        // </Footer>
      )}
    </Container>
  );
};

export default PlayLayout;
