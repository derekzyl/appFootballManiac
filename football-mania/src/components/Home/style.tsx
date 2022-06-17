import {View} from 'native-base';
import styled from 'styled-components';
import {StyledText} from '../General/Text';

export const HomeHeading = styled(StyledText)`
  color: #ffffff;
  font-size: 38px;

  font-style: normal;
  font-weight: normal;
`;

export const HomeFlexRow = styled(View)`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const HomeFlexColumn = styled(View)`
  flex: 46%;
  max-width: 46%;
`;
