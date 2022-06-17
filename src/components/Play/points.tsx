import React from 'react';
import {PointContainer, PointLogo, PointText} from './style';
import Coin from '@assets/svg/coin.svg';

const PlayingPoint = ({alt = false, value = 0}: any) => {
  return (
    <PointContainer alt={alt}>
      <PointLogo alt={alt}>
        <Coin />
      </PointLogo>
      <PointText alt={alt}>{value} Points</PointText>
    </PointContainer>
  );
};

export default PlayingPoint;
