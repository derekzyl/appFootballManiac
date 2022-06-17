import Box from '@components/General/Box';
import CustomHeader from '@components/Header';
import HomeCard from '@components/Home/card';
import {useNavigation} from '@react-navigation/native';
import Podium from '@src/assets/svg/podium.svg';
import Settings from '@src/assets/svg/settings.svg';
import Shop from '@src/assets/svg/shop.svg';
import Target from '@src/assets/svg/target.svg';
import TV from '@src/assets/svg/tv.svg';
import {
  HomeFlexColumn,
  HomeFlexRow,
  HomeHeading,
} from '@src/components/Home/style';
import PlayLayout from '@src/components/Layout/play';
import React from 'react';

const items = [
  {
    icon: TV,
    name: 'New Game',
    path: 'Play',
    description: 'Start a new challenge',
  },
  {
    icon: Target,
    name: 'Practice',
    path: '',
    description: 'Little warm up',
  },
  {
    icon: Shop,
    name: 'Store',
    path: '',
    description: 'Buy all you need',
  },
  {
    icon: Podium,
    name: 'Leaderboard',
    path: 'Leaderboard',
    description: 'Who is on top?',
  },
  {
    icon: Settings,
    name: 'Settings',
    path: 'Settings',
    description: 'Set your Preferences',
  },
];

const HomeScreen = () => {
  const navigation = useNavigation();

  const handleClick = (path: string) => {
    if (path) {
      navigation.navigate(path);
    }
  };

  return (
    <PlayLayout>
      <CustomHeader />
      <Box>
        <HomeHeading>Welcome, Olubusayo12</HomeHeading>
      </Box>
      <Box>
        <HomeFlexRow>
          <HomeFlexColumn>
            <HomeCard
              onPress={() => handleClick(items[0].path)}
              item={items[0]}
            />
            <HomeCard
              onPress={() => handleClick(items[2].path)}
              mid
              item={items[2]}
            />
            <HomeCard
              onPress={() => handleClick(items[4].path)}
              mid
              item={items[4]}
            />
          </HomeFlexColumn>
          <HomeFlexColumn>
            <HomeCard
              onPress={() => handleClick(items[1].path)}
              mid
              item={items[1]}
            />
            <HomeCard
              onPress={() => handleClick(items[3].path)}
              item={items[3]}
            />
          </HomeFlexColumn>
        </HomeFlexRow>
      </Box>
    </PlayLayout>
  );
};

export default HomeScreen;
