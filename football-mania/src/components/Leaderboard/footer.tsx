import React from 'react';
import Box from '../General/Box';
import {
  LeaderboardFooterContainer,
  LeaderboardFooterContent,
  LeaderboardFooterImage,
  LeaderboardFooterLeft,
  LeaderboardFooterName,
  LeaderboardFooterPoint,
  LeaderboardFooterPosition,
  LeaderboardFooterRight,
} from './style';

const LeaderboardFooter = () => {
  return (
    <LeaderboardFooterContainer>
      <LeaderboardFooterContent>
        <Box>
          <LeaderboardFooterLeft>
            <LeaderboardFooterPosition>1201</LeaderboardFooterPosition>
            <LeaderboardFooterImage
              source={require('../../assets/img/avatar.jpg')}
            />
            <LeaderboardFooterName>You</LeaderboardFooterName>
          </LeaderboardFooterLeft>
        </Box>
        <Box>
          <LeaderboardFooterRight>
            <LeaderboardFooterPoint>178</LeaderboardFooterPoint>
          </LeaderboardFooterRight>
        </Box>
      </LeaderboardFooterContent>
    </LeaderboardFooterContainer>
  );
};

export default LeaderboardFooter;
