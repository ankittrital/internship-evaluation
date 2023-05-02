import React, {FC} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {navigationTypes} from '@navigation/types/navigationTypes';
import DescriptionWrapper from '@components/wrapper/DescriptionWrapper/DescriptionWrapper';
import RootNav from '@navigation/Root/RootNav';
import ShowSelectionWrapper from '@components/wrapper/ShowSelectionWrapper/ShowSelectionWrapper';

interface IProps {}

/**
 * @author
 * @function @StackNav
 **/

const Stack = createStackNavigator<navigationTypes>();

const StackNav: FC<IProps> = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen component={RootNav} name="Home" />
        <Stack.Screen
          component={DescriptionWrapper}
          name="DescriptionWrapper"
        />
        <Stack.Screen component={ShowSelectionWrapper} name="ShowSelection" />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNav;
