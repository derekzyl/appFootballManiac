import React from 'react';
import Box from '@components/General/Box';
import NavigationHeader from '@src/components/Header/navigation.header';
import PlayLayout from '@src/components/Layout/play';
import LeaderboardComponent from '@src/components/Leaderboard';
import LeaderboardFooter from '@src/components/Leaderboard/footer';

const LeaderboardScreen = () => {
  return (
    <PlayLayout FooterComponent={LeaderboardFooter}>
      <NavigationHeader screenName="Leaderboard" />
      <Box>
        <LeaderboardComponent />
      </Box>
    </PlayLayout>
  );
};

export default LeaderboardScreen;
