import SplashLogo from '@assets/svg/splash-logo.svg';
import {useNavigation} from '@react-navigation/native';
import Box from '@src/components/General/Box';
import {CustomButton} from '@src/components/General/Button';
import {ButtonVariant} from '@src/components/General/Button/variants';
import {
  SplashBottom,
  SplashButtonList,
  SplashContent,
  SplashDivider,
  SplashDividerLine,
  SplashDividerText,
  SplashFlex,
  SplashSection,
  SplashText,
} from '@src/components/Splash/style';
import {Container} from 'native-base';
import React from 'react';
import {StyleSheet, StatusBar} from 'react-native';

const SplashScreen = () => {
  const navigation = useNavigation();

  const handleClick = () => {
    navigation.navigate('Home');
  };

  return (
    <Container>
      <StatusBar barStyle="dark-content" />
      <SplashContent contentContainerStyle={styles.contentContainer}>
        <SplashFlex>
          <Box>
            <SplashLogo />
          </Box>

          <SplashSection>
            <SplashButtonList>
              <SplashText>Login with</SplashText>
              <Box>
                <CustomButton
                  onPress={handleClick}
                  iconName="facebook"
                  text="Facebook"
                  variant={ButtonVariant.blue}
                />
              </Box>
              <Box>
                <CustomButton
                  onPress={handleClick}
                  iconName="google"
                  text="Google"
                  variant={ButtonVariant.red}
                />
              </Box>
            </SplashButtonList>

            <SplashBottom>
              <Box>
                <SplashDivider>
                  <SplashDividerLine />
                  <SplashDividerText>Or</SplashDividerText>
                  <SplashDividerLine />
                </SplashDivider>

                <CustomButton
                  onPress={handleClick}
                  text="Play as Guest"
                  variant={ButtonVariant.yellow}
                />
              </Box>
            </SplashBottom>
          </SplashSection>
        </SplashFlex>
      </SplashContent>
    </Container>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
  },
});

export default SplashScreen;
