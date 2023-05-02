import colors from '@assets/colors/colors';
import Fonts from '@constants/Fonts/Fonts';
import {moderateScale} from '@utils/Dimensions';
import React, {FC, useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

interface customSwitchProps {
  selectionMode: any;
  button1: string;
  button2: string;
  button3: string;
  date1: any;
  date2: string;
  date3: string;
  onSelectSwitch: any;
}

const CustomSwitch: FC<customSwitchProps> = props => {
  const {buttonStyle, container, buttonText, dateStyle} = styles;

  const {
    selectionMode,
    button1,
    button2,
    button3,
    onSelectSwitch,
    date1,
    date2,
    date3,
  } = props;

  const updateSwitchData = (value: number) => {
    setSelectionMode(value);
    onSelectSwitch(value);
  };

  const [getSelectionMode, setSelectionMode] = useState<any>(selectionMode);

  return (
    <View style={container}>
      <TouchableOpacity
        activeOpacity={0.2}
        onPress={() => updateSwitchData(1)}
        style={[
          buttonStyle,
          getSelectionMode === 1 ? styles.updateButtonColor : null,
        ]}>
        <Text style={buttonText}>{button1}</Text>
        <Text style={dateStyle}>{date1}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.2}
        onPress={() => updateSwitchData(2)}
        style={[
          buttonStyle,
          getSelectionMode === 2 ? styles.updateButtonColor : null,
        ]}>
        <Text style={buttonText}>{button2}</Text>
        <Text style={dateStyle}>{date2}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.2}
        onPress={() => updateSwitchData(3)}
        style={[
          buttonStyle,
          getSelectionMode === 3 ? styles.updateButtonColor : null,
        ]}>
        <Text style={buttonText}>{button3}</Text>
        <Text style={dateStyle}>{date3}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 64,
    width: '100%',
    backgroundColor: '#e4e4e4',
    justifyContent: 'center',
    padding: 5,
  },
  buttonStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: moderateScale(1.5),
    borderBottomColor: 'transparent',
    margin: 1,
  },
  updateButtonColor: {
    borderBottomColor: colors.cinemasNameText,
  },
  buttonText: {
    fontSize: 16,
    fontFamily: Fonts.type.poppinsregular,
    color: colors.primary,
    textTransform: 'uppercase',
    marginBottom: -3,
  },
  dateStyle: {
    fontSize: moderateScale(15),
    fontFamily: Fonts.type.poppinsregular,
    color: colors.primary,
  },
});

export default CustomSwitch;
