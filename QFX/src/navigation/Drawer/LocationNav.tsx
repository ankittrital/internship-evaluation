import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import LocationDrawer from '@components/CustomDrawer/locationDrawer';
import ShowSelection from '@screens/ShowSelection/ShowSelection';

const RightDrawer = createDrawerNavigator();

const LocationNav = () => {
  return (
    <RightDrawer.Navigator
      id="RightDrawer"
      screenOptions={{drawerPosition: 'right'}}
      drawerContent={props => <LocationDrawer {...props} />}>
      <RightDrawer.Screen component={ShowSelection} name="ShowSelection" />
    </RightDrawer.Navigator>
  );
};
export default LocationNav;
