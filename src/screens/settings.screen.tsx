import Box from '@components/General/Box';
import NavigationHeader from '@src/components/Header/navigation.header';
import PlayLayout from '@src/components/Layout/play';
import SettingsContent from '@components/Settings';
import React from 'react';

const SettingsScreen = () => {
  return (
    <PlayLayout>
      <NavigationHeader screenName="Settings" />
      <Box>
        <SettingsContent />
      </Box>
    </PlayLayout>
  );
};

export default SettingsScreen;
