import {View} from 'native-base';
import styled from 'styled-components';
import {StyledText} from '../General/Text';

export const QuestionBlockContainer = styled(View)`
  position: relative;
`;

export const LoadingText = styled(StyledText)`
  text-align: center;
  font-size: 20px;
  color: #051f32;
  margin-bottom: 20px;
`;

export const PlayContainer = styled(View)`
  flex: 1;
  width: 100%;
`;

export const LoadingContainer = styled(PlayContainer)`
  justify-content: center;
  align-items: center;
`;

export const LoadingFlex = styled(View)`
  justify-content: center;
  flex: 1;
`;

export const PlayContent = styled(View)`
  width: 100%;
`;

export const LoadingProgressContainer = styled(View)`
  position: relative;
  justify-content: center;
  align-items: center;
  height: 158px;
`;

export const ProgressIcon = styled(View)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const ProgressTextArea = styled(View)`
  background-color: #1e263c;
  border-radius: 100px;
  margin: 10px;
  width: 120px;
  height: 120px;
  justify-content: center;
  align-items: center;
`;

export const ProgressText = styled(StyledText)`
  color: #fff;
  font-size: 50px;
`;

export const QuestionText = styled(StyledText)`
  color: #424242;
  text-align: center;
  font-size: 21px;
`;

export const QuestionNumber = styled(StyledText)`
  font-size: 15px;
  color: #1e263c;
`;

export const PlayMeta = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const PointContainer = styled(View)<{alt?: boolean}>`
  flex-direction: row;
  align-items: center;
  border-radius: 108px;
  height: ${({alt}) => (alt ? 46 : 38)}px;
  padding: 0 10px;
  background-color: ${({alt}) => (alt ? '#000DFF' : '#1e263c')};
`;

export const PointLogo = styled(View)<{alt?: boolean}>`
  background-color: #fff;
  border-radius: ${({alt}) => (alt ? 36 : 29)}px;
  width: ${({alt}) => (alt ? 36 : 29)}px;
  height: ${({alt}) => (alt ? 36 : 29)}px;
  justify-content: center;
  align-items: center;
`;

export const PointText = styled(StyledText)<{alt?: boolean}>`
  font-size: ${({alt}) => (alt ? 33 : 11)}px;
  color: #fff;
  margin: 0 5px;
`;

export const PlayExtraButtonFlex = styled(View)`
  flex-direction: row;
  margin-top: 50px;
  justify-content: space-between;
`;

export const PlayExtraButton = styled(View)`
  width: 47%;
`;

export const ProgressContainer = styled(View)`
  flex-direction: row;
  justify-content: center;
`;

export const ScoreModalContent = styled(View)`
  width: 100%;
  padding: 10px 0;
  justify-content: center;
`;

export const ScoreModalTop = styled(View)`
  margin: 20px 0;
`;

export const ScoreModalIcon = styled(View)`
  align-items: center;
`;

export const ScoreModalText = styled(StyledText)`
  color: #000000;
  font-size: 21px;
  text-align: center;
  margin: 10px 0;
`;

export const ScorePoint = styled(View)`
  /* width: 50%; */
  margin: 0 auto;
`;

export const ScoreButtons = styled(View)`
  padding: 0 8px;
`;
