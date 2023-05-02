import React, {FC, useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import {verticalScale} from '@utils/Dimensions';
import colors from '@assets/colors/colors';
import Fonts from '@constants/Fonts/Fonts';

interface IProps {}

/**
 * @author
 * @ @CheckInternet
 **/

const CheckInternet: FC<IProps> = () => {
  const [isConnected, setIsConnected] = useState<boolean | null>(false);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsConnected(state.isConnected);
    });

    return () => {
      unsubscribe();
    };
  }, [isConnected]);

  const {internetToastMessageContainer, internetToastMessageTextStyle} = styles;
  return (
    <>
      {isConnected === false ? (
        <>
          <View style={internetToastMessageContainer}>
            <Text style={internetToastMessageTextStyle}>
              No Internet Connection
            </Text>
          </View>
        </>
      ) : null}
    </>
  );
};

const styles = StyleSheet.create({
  internetToastMessageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    height: verticalScale(30),
    width: '100%',
    backgroundColor: 'red',
  },
  internetToastMessageTextStyle: {
    fontSize: 14,
    color: colors.offWhite,
    fontFamily: Fonts.type.poppinsregular,
  },
});

export default CheckInternet;
