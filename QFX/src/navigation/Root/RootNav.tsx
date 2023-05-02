import React, {FC} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import DrawerNav from '@navigation/Drawer/DrawerNav';

interface IProps {}

/**
 * @author
 * @function @Root
 **/
const Stack = createStackNavigator();

const RootNav: FC<IProps> = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen component={DrawerNav} name="DrawerNav" />
    </Stack.Navigator>
  );
};

export default RootNav;
