import Crown from '@assets/svg/crown.svg';
import React from 'react';
import {
  LeaderboardFirstCircle,
  LeaderboardFirstContainer,
  LeaderboardFirstImage,
  LeaderboardRunnerUpName,
  LeaderboardScore,
} from './style';
import {LeaderboardItemProp} from './types';

const LeaderboardFirst = ({item}: LeaderboardItemProp) => {
  return (
    <LeaderboardFirstContainer>
      <Crown />
      <LeaderboardFirstCircle>
        <LeaderboardFirstImage
          source={require('../../assets/img/avatar.jpg')}
          resizeMode="cover"
        />
      </LeaderboardFirstCircle>
      <LeaderboardRunnerUpName>{item.name}</LeaderboardRunnerUpName>
      <LeaderboardScore>{item.points}</LeaderboardScore>
    </LeaderboardFirstContainer>
  );
};

export default LeaderboardFirst;
