import React from 'react';
import {TouchableOpacity} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';

import HeaderLeft from './components/HeaderLeft';
import HeaderRight from './components/HeaderRight';

import Home from './pages/Home';
import Profile from './pages/profile';
import NewPost from './pages/newPost';
import Message from './pages/message';
import Search from './pages/search';

const Routes = createStackNavigator(
  {
    Profiles: createBottomTabNavigator(
      {
        Home,
        Search,
        NewPost,
        Message,
        Profile,
      },
      {
        tabBarOptions: {
          showLabel: false,
          keyboardHidesTabBar: true,
          activeTintColor: '#9BD1FF',
          style: {
            borderTopColor: 'transparent',
          },
        },
      },
    ),
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      title: 'Profile',
      headerTransparent: true,
      headerTitleAlign: 'center',
      headerTitleStyle: {
        fontWeight: '900',
      },
      headerLeft: () => (
        <TouchableOpacity onPress={() => {}} activeOpacity={0.8}>
          <HeaderLeft />
        </TouchableOpacity>
      ),
      headerRight: () => <HeaderRight />,
    }),
  },
);
export default createAppContainer(Routes);
