import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import CalendarScreen from '../screens/CalendarScreen';
import AboutScreen from '../screens/AboutScreen';

const HomeStack = createStackNavigator({
  Home: HomeScreen
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={ Platform.OS === 'ios'
          ? `ios-home${focused ? '' : '-outline'}`
          : 'md-home'
      }
    />
  ),
};

const CalendarStack = createStackNavigator({
  Calendar: CalendarScreen,
});

CalendarStack.navigationOptions = {
  tabBarLabel: 'Days',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' 
      ? 'ios-bookmark' :
       'md-bookmark'}
    />
  ),
};

const AboutStack = createStackNavigator({
  About: AboutScreen,
});

AboutStack.navigationOptions = {
  tabBarLabel: 'About',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 
      'ios-information-circle' :
       'ios-information-circle'
      }
    />
  ),
};

export default createBottomTabNavigator({
  HomeStack,
  CalendarStack,
  AboutStack,
});
