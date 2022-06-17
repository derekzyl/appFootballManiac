import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '@src/screens/home.screen';
import SplashScreen from '@src/screens/splash.screen';
import PlayScreen from '@src/screens/play.screen';
import LeaderboardScreen from '@src/screens/leaderboard.screen';
import SettingsScreen from '@src/screens/settings.screen';

const Stack = createStackNavigator();

const RootNavigation = () => {
  return (
    <Stack.Navigator headerMode="none" initialRouteName="Splash">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Play" component={PlayScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
      <Stack.Screen name="Leaderboard" component={LeaderboardScreen} />
    </Stack.Navigator>
  );
};

export default RootNavigation;
