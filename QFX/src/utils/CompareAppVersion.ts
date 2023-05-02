import {BASE_URL} from '@config/BaseUrl/urlconfig';
import axios from 'axios';
import {Alert, Linking, Platform} from 'react-native';
import pkg from '../../package.json';
import DeviceInfo from 'react-native-device-info';
import SplashScreen from 'react-native-splash-screen';

const currentVersion = pkg.version;
const platform = Platform.OS;

const CompareAppVersion = async () => {
  const appVersionApiUrl = `${BASE_URL}api/public/AppVersion?platform=${platform}`;
  const response = await axios.get(appVersionApiUrl);
  const latestVersion = response?.data?.data?.version;

  if (platform === 'ios') {
    DeviceInfo.isEmulator().then(isEmulator => {
      // check if the app is running on emulator
      if (isEmulator) {
        if (latestVersion !== currentVersion) {
          Alert.alert(
            'Update Available',
            `Your app version is ${currentVersion}. New version ${latestVersion} is available. Please update to the latest version`,
            [
              {
                text: 'Cancel',
                // onPress: () => BackHandler.exitApp(), //exit application
                onPress: () => {
                  console.log('cancelled');
                },
                style: 'cancel',
              },
              {
                text: 'Update',
                onPress: () =>
                  Linking.openURL(
                    'market://details?id=com.exolutus.qfxcinemas',
                  ),
              },
            ],
            {cancelable: false},
          );
        }
      }
      if (!isEmulator) {
        if (latestVersion !== currentVersion) {
          Alert.alert(
            'Update Available',
            `Your app version is ${currentVersion}. New version ${latestVersion} is available. Please update your version`,
            [
              {
                text: 'Cancel',
                onPress: () => {
                  console.log('Cancelled');
                },
                style: 'cancel',
              },
              {
                text: 'Update',
                onPress: () =>
                  Linking.openURL(
                    'https://apps.apple.com/np/app/qfx-cinema/id1092931043',
                  ),
              },
            ],
            {cancelable: false},
          );
        }
      }
    });
  } else {
    //checking if the app is running on android
    DeviceInfo.isEmulator().then(isEmulator => {
      //checking if the app is running on emulator or not
      if (!isEmulator) {
        if (latestVersion !== currentVersion) {
          Alert.alert(
            'Update Available',
            `Your app version is ${currentVersion}. New version ${latestVersion} is available. Please update to the lastest version`,
            [
              {
                text: 'Cancel',
                // onPress: () => BackHandler.exitApp(), //Exit the application
                onPress: () => {
                  console.log('cancelled');
                },
                style: 'cancel',
              },
              {
                text: 'Update',
                onPress: () =>
                  Linking.openURL(
                    'https://play.google.com/store/search?q=qfx&c=apps&hl=en&gl=US',
                  ),
              },
            ],
            {cancelable: false},
          );
        }
      }
      if (isEmulator) {
        if (latestVersion !== currentVersion) {
          Alert.alert(
            'Update Available',
            `Your app version is ${currentVersion}. New version ${latestVersion} is available. Please update your application to the latest version`,
            [
              {
                text: 'Cancel',
                onPress: () =>
                  Linking.openURL(
                    'market://details?id=com.exolutus.qfxcinemas',
                  ),
              },
            ],
            {cancelable: false},
          );
        }
      }
    });
  }
  SplashScreen.hide();
};
export default CompareAppVersion;
