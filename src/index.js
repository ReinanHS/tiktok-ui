import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import Feed from './pages/Feed';
import Explore from './pages/Explore';
import Upload from './pages/Upload';
import Notifications from './pages/Notifications';
import Perfil from './pages/Perfil';

import Ionicons from 'react-native-vector-icons/Ionicons';

import Foundation from 'react-native-vector-icons/Foundation';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import UploadIcon from './components/UploadIcon';

const getTabBarIcon = (navigation, focused, tintColor) => {
  const {routeName} = navigation.state;
  let IconComponent = Ionicons;
  let iconName;
  if (routeName === 'Feed') {
    iconName = 'home';
    IconComponent = Foundation;
  } else if (routeName === 'Explore') {
    iconName = 'search';
    IconComponent = EvilIcons;
  } else if (routeName === 'Upload') {
    iconName = 'plus';
    IconComponent = UploadIcon;
  } else if (routeName === 'Notifications') {
    iconName = 'hearto';
    IconComponent = AntDesign;
  } else if (routeName === 'Perfil') {
    iconName = 'user';
    IconComponent = AntDesign;
  }

  return <IconComponent name={iconName} size={25} color={tintColor} />;
};

const Menu = createBottomTabNavigator(
  {
    Feed,
    Explore,
    Upload,
    Notifications,
    Perfil,
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, tintColor}) =>
        getTabBarIcon(navigation, focused, tintColor),
    }),
    tabBarOptions: {
      showLabel: false,
      activeTintColor: '#FFFEFF',
      inactiveTintColor: '#9E9BA2',
      style: {
        backgroundColor: '#1a1a1f',
      },
    },
  },
);

export default createAppContainer(Menu);
