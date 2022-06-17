import React from 'react';
import {StyledText} from '../General/Text';
import {
  LeaderboardItemContainer,
  LeaderboardItemContent,
  LeaderboardItemImage,
  LeaderboardItemName,
  LeaderboardItemScore,
} from './style';
import {LeaderboardItemProp} from './types';

const LeaderboardItem = ({item, index}: LeaderboardItemProp) => {
  return (
    <LeaderboardItemContainer>
      <StyledText>{index}</StyledText>
      <LeaderboardItemContent>
        <LeaderboardItemImage source={require('../../assets/img/avatar.jpg')} />
        <LeaderboardItemName>{item.name}</LeaderboardItemName>
        <LeaderboardItemScore>{item.points}</LeaderboardItemScore>
      </LeaderboardItemContent>
    </LeaderboardItemContainer>
  );
};

export default LeaderboardItem;
