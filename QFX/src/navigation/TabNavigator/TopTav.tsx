import React, {FC} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import NowShowing from '@screens/Home/NowShowing/NowShowing';
import NextChange from '@screens/Home/NextChange/NextChange';
import ComingSoon from '@screens/Home/ComingSoon/ComingSoon';
import colors from '@assets/colors/colors';

interface IProps {}

/**
 * @author   Ankit D Trital
 * @function @TopTab
 **/
const Tab = createMaterialTopTabNavigator();

export const TopTab: FC<IProps> = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {fontWeight: 'bold'},
        tabBarStyle: {
          backgroundColor: colors.background,
          elevation: 0, //for android devices
          shadowOffset: {width: 0, height: 0}, //for ios devices
        },
        tabBarActiveTintColor: colors.cinemasNameText,
        tabBarInactiveTintColor: colors.primary,
      }}>
      <Tab.Screen component={NowShowing} name="Now Showing" />
      <Tab.Screen component={NextChange} name="Coming Soon" />
      <Tab.Screen component={ComingSoon} name="Cinemas" />
    </Tab.Navigator>
  );
};
