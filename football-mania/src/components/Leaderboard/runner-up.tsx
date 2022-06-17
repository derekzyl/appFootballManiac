import React from 'react';
import {
  LeaderboardFirstImage,
  LeaderboardRunnerUpCircle,
  LeaderboardRunnerUpContainer,
  LeaderboardRunnerUpName,
  LeaderboardScore,
} from './style';

const LeaderboardRunnerUp = ({item, third}: any) => {
  return (
    <LeaderboardRunnerUpContainer third={third}>
      <LeaderboardRunnerUpCircle third={third}>
        <LeaderboardFirstImage
          source={require('../../assets/img/avatar.jpg')}
          resizeMode="cover"
        />
      </LeaderboardRunnerUpCircle>

      <LeaderboardRunnerUpName>{item.name}</LeaderboardRunnerUpName>
      <LeaderboardScore>{item.points}</LeaderboardScore>
    </LeaderboardRunnerUpContainer>
  );
};

export default LeaderboardRunnerUp;
