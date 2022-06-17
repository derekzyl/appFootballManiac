import React from 'react';
import {AnimatedCircularProgress} from 'react-native-circular-progress';
import {StyledText} from '@components/General/Text';
import styled from 'styled-components';

interface CircularProgressProp {
  value: number;
}

const CircularProgress = ({value}: CircularProgressProp) => {
  return (
    <>
      <AnimatedCircularProgress
        size={75}
        width={8}
        fill={value}
        tintColor="#e92f48"
        backgroundColor="#f2f2f2">
        {(fill) => <ProgressText>{fill}</ProgressText>}
      </AnimatedCircularProgress>
    </>
  );
};

const ProgressText = styled(StyledText)`
  font-size: 25px;
`;

export default CircularProgress;
