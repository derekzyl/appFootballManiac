import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components';

export const GradientBackground = styled(LinearGradient).attrs({
  colors: ['#0F146A', '#000DFF'],
})`
  flex: 1;
`;
