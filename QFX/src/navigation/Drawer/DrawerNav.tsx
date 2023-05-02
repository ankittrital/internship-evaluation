/* eslint-disable react/no-unstable-nested-components */
import React, {FC, useContext} from 'react';
import {View, StyleSheet} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeWrapper from '@components/wrapper/HomeWrapper/HomeWrapper';
import MyDashboard from '@screens/MyDashboard/MyDashboard';
import {horizontalScale, moderateScale} from '@utils/Dimensions';
import AntDesign from 'react-native-vector-icons/AntDesign';
import colors from '@assets/colors/colors';
import IonIcons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import CustomDrawer from '@components/CustomDrawer/CustomDrawer';
import Fonts from '@constants/Fonts/Fonts';
import LoginWrapper from '@components/wrapper/ScreenWrappers/LoginWrapper';
import RegisterWrapper from '@components/wrapper/ScreenWrappers/RegisterWrapper';
import SupportWrapper from '@components/wrapper/ScreenWrappers/SupportWrapper';
import LocationsWrapper from '@components/wrapper/otherScreenWrapper/LocationWrapper';
import GojiWrapper from '@components/wrapper/otherScreenWrapper/GojiWrapper';
import TermsWrapper from '@components/wrapper/otherScreenWrapper/TermsWrapper';
import HelpWrapper from '@components/wrapper/otherScreenWrapper/HelpWrapper';
import QFXFranchiseWrapper from '@components/wrapper/ScreenWrappers/QFXFranchiseWrapper';
import {AuthContext} from '@context/AuthContext';
import MyProfileWrapper from '@components/wrapper/otherScreenWrapper/MyProfileWrapper';
import NotificationSettingWrapper from '@components/wrapper/otherScreenWrapper/NotificationSettingsWrapper';
import ContactWrapper from '@components/wrapper/otherScreenWrapper/ContactWrapper';

interface IProps {}

/**
 * @author   Ankit D Trital
 * @function @DrawerNav
 **/

const Drawer = createDrawerNavigator();

const DrawerNav: FC<IProps> = () => {
  const {token} = useContext(AuthContext);
  const {iconContainer, icon} = styles;
  return (
    <Drawer.Navigator
      id="LeftDrawer"
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerItemStyle: {backgroundColor: 'transparent', width: '100%'},
        drawerLabelStyle: {
          fontSize: moderateScale(14),
          color: colors.primary,
          fontFamily: Fonts.type.poppinsregular,
        },
      }}>
      <Drawer.Screen
        component={HomeWrapper}
        name="Home"
        options={{
          drawerIcon: ({color}) => (
            <View style={iconContainer}>
              <AntDesign name="home" size={24} color={color} style={icon} />
            </View>
          ),
        }}
      />
      {!token ? (
        <>
          <Drawer.Screen
            component={LoginWrapper}
            name="Login"
            options={{
              drawerIcon: ({color}) => (
                <View style={iconContainer}>
                  <AntDesign
                    name="login"
                    size={24}
                    color={color}
                    style={icon}
                  />
                </View>
              ),
            }}
          />
          <Drawer.Screen
            component={RegisterWrapper}
            name="Register"
            options={{
              drawerIcon: ({color}) => (
                <View style={iconContainer}>
                  <FontAwesome
                    name="edit"
                    size={24}
                    color={color}
                    style={icon}
                  />
                </View>
              ),
            }}
          />
        </>
      ) : (
        <>
          <Drawer.Screen
            component={MyDashboard}
            name="Dashboard"
            options={{
              drawerIcon: ({color}) => (
                <View style={iconContainer}>
                  <AntDesign
                    name="dashboard"
                    size={24}
                    color={color}
                    style={icon}
                  />
                </View>
              ),
            }}
          />
          <Drawer.Screen
            component={MyProfileWrapper}
            name="MyProfile"
            options={{
              drawerIcon: ({color}) => (
                <View style={iconContainer}>
                  <AntDesign name="user" size={24} color={color} style={icon} />
                </View>
              ),
            }}
          />
        </>
      )}
      <Drawer.Screen
        component={LocationsWrapper}
        name="Locations"
        options={{
          drawerIcon: ({color}) => (
            <View style={iconContainer}>
              <IonIcons
                name="location-outline"
                size={24}
                color={color}
                style={icon}
              />
            </View>
          ),
        }}
      />
      <Drawer.Screen
        component={SupportWrapper}
        name="Support"
        options={{
          drawerIcon: ({color}) => (
            <View style={iconContainer}>
              <MaterialIcons
                name="support-agent"
                size={24}
                color={color}
                style={icon}
              />
            </View>
          ),
        }}
      />
      <Drawer.Screen
        component={NotificationSettingWrapper}
        name="Notification Settings"
        options={{
          drawerIcon: ({color}) => (
            <View style={iconContainer}>
              <Feather name="settings" size={24} color={color} style={icon} />
            </View>
          ),
        }}
      />
      <Drawer.Screen
        component={GojiWrapper}
        name="Goji Loyalty"
        options={{
          drawerIcon: ({color}) => (
            <View style={iconContainer}>
              <MaterialIcons
                name="loyalty"
                size={24}
                color={color}
                style={icon}
              />
            </View>
          ),
        }}
      />
      <Drawer.Screen
        component={TermsWrapper}
        name="Terms Conditions"
        options={{
          drawerIcon: ({color}) => (
            <View style={iconContainer}>
              <AntDesign
                name="checksquareo"
                size={24}
                color={color}
                style={icon}
              />
            </View>
          ),
        }}
      />
      <Drawer.Screen
        component={ContactWrapper}
        name="Contact"
        options={{
          drawerIcon: ({color}) => (
            <View style={iconContainer}>
              <AntDesign name="mail" size={24} color={color} style={icon} />
            </View>
          ),
        }}
      />
      <Drawer.Screen
        component={HelpWrapper}
        name="Help"
        options={{
          drawerIcon: ({color}) => (
            <View style={iconContainer}>
              <IonIcons name="help" size={24} color={color} style={icon} />
            </View>
          ),
        }}
      />
      <Drawer.Screen
        component={QFXFranchiseWrapper}
        name="QfxFranchise"
        options={{
          drawerIcon: ({color}) => (
            <View style={iconContainer}>
              <MaterialCommunity
                name="certificate"
                size={24}
                color={color}
                style={icon}
              />
            </View>
          ),
        }}
      />
    </Drawer.Navigator>
  );
};
const styles = StyleSheet.create({
  iconContainer: {
    borderRadius: moderateScale(50),
    borderWidth: moderateScale(0.5),
    padding: moderateScale(8),
    backgroundColor: colors.offWhite,
    marginRight: horizontalScale(-15),
  },
  icon: {
    color: colors.primary,
  },
});
export default DrawerNav;
