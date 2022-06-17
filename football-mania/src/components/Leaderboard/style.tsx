import {View} from 'native-base';
import {Image} from 'react-native';
import styled from 'styled-components';
import {StyledText} from '../General/Text';

export const LeaderboardButtonContainer = styled(View)`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;

export const LeaderboardButton = styled(View)`
  width: 32%;
`;

export const LeaderboardFooterContainer = styled(View)`
  background: #1e263c;
  width: 100%;
  border-top-color: #c3c7e5;
  border-top-width: 0.5px;
`;

export const LeaderboardFooterContent = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
`;

export const LeaderboardFooterLeft = styled(View)`
  flex-direction: row;
  align-items: center;
`;

export const LeaderboardFooterRight = styled(View)`
  //
`;

export const LeaderboardFooterPosition = styled(StyledText)`
  font-size: 13px;
  color: #fff;
  margin-right: 10%;
`;

export const LeaderboardFooterName = styled(StyledText)`
  font-size: 17px;
  color: #fff;
  margin-right: 10%;
`;

export const LeaderboardFooterImage = styled(Image)`
  width: 46px;
  height: 46px;
  border-radius: 46px;
  margin-right: 10%;
`;

export const LeaderboardFooterPoint = styled(StyledText)`
  color: #e58200;
  font-size: 20px;
`;

export const LeaderboardFirstContainer = styled(View)`
  align-items: center;
  margin-top: 27px;
`;

export const LeaderboardRunnerUpContainer = styled(View)<{third?: boolean}>`
  align-items: center;
  margin-top: ${({third}) => (third ? 115 : 90)}px;
`;

export const LeaderboardFirstCircle = styled(View)`
  border: 9px solid #ffd00d;
  width: 110px;
  height: 110px;
  border-radius: 110px;
  margin: 0 auto;
  margin-top: -1px;
  margin-bottom: 6px;
`;

export const LeaderboardRunnerUpCircle = styled(LeaderboardFirstCircle)<{
  third?: boolean;
}>`
  border: 9px solid ${({third}) => (third ? '#fff' : '#fff08f')};
  width: 82px;
  height: 82px;
  border-radius: 78px;
`;

export const LeaderboardRunnerUpName = styled(StyledText)`
  font-size: 13px;
  margin: 5px 0;
  color: #1e1e1e;
`;

export const LeaderboardFirstImage = styled(Image)`
  width: 100%;
  height: 100%;
  border-radius: 110px;
`;

export const LeaderboardScore = styled(StyledText)`
  color: #e58200;
  font-size: 18px;
`;

export const LeaderboardTopScorers = styled(View)`
  flex-direction: row;
  justify-content: space-between;
`;

export const LeaderboardList = styled(View)`
  margin: 30px 0;
`;

export const LeaderboardItemContainer = styled(View)`
  flex-direction: row;
  align-items: center;
  margin-bottom: 16px;
`;

export const LeaderboardItemContent = styled(View)`
  background: #ffffff;
  border: 0.5px solid #c3c7e5;
  border-radius: 600px;
  flex: 1;
  margin-left: 8px;
  flex-direction: row;
  align-items: center;
`;

export const LeaderboardItemName = styled(StyledText)`
  flex: 1;
  font-size: 15px;
  color: #1e1e1e;
  margin-left: 5px;
`;

export const LeaderboardItemImage = styled(Image)`
  width: 45px;
  height: 45px;
  border-radius: 45px;
  margin: 6px;
`;

export const LeaderboardItemScore = styled(LeaderboardScore)`
  text-align: right;
  margin-right: 20px;
`;
