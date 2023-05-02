import colors from '@assets/colors/colors';
import {horizontalScale, moderateScale, verticalScale} from '@utils/Dimensions';
import React, {FC} from 'react';
import {View, TextInput, Text, StyleSheet} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import Fonts from '@constants/Fonts/Fonts';

interface TextInputProps {
  name: string;
  type?: string;
  size: number;
  color: string;
  placeholder: string;
  value: string;
  onChangeText: any;
  secureTextEntry?: boolean;
  error?: string;
  onFocus: any;
  onBlur?: any;
}

const FormInput: FC<TextInputProps> = ({
  error,
  onFocus = () => {},
  ...props
}: any) => {
  const {
    IconStyle,
    container,
    TextInputFieldStyle,
    textInputStyle,
    errorStyle,
  } = styles;
  const [_isFocused, setIsFocused] = React.useState(false);
  return (
    <View style={container}>
      <View style={IconStyle}>
        {props.type === 'FontAwesome' ? (
          <FontAwesome
            name={props.name}
            size={props.size}
            color={props.color}
          />
        ) : props.type === 'Entypo' ? (
          <Entypo name={props.name} size={props.size} color={props.color} />
        ) : props.type === 'AntDesign' ? (
          <AntDesign name={props.name} size={props.size} color={props.color} />
        ) : props.type === 'EvilIcon' ? (
          <EvilIcon name={props.name} size={props.size} color={props.color} />
        ) : null}
      </View>
      <View style={TextInputFieldStyle}>
        <TextInput
          placeholder={props.placeholder}
          value={props.value}
          onChangeText={props.onChangeText}
          secureTextEntry={props.secureTextEntry}
          style={textInputStyle}
          autoCorrect={false}
          autoCapitalize="none"
          onFocus={() => {
            onFocus();
            setIsFocused(true);
          }}
          onBlur={() => setIsFocused(false)}
          {...props}
        />
        {error ? <Text style={errorStyle}>{error}</Text> : null}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: verticalScale(20),
  },
  IconStyle: {
    borderRadius: moderateScale(50),
    borderWidth: moderateScale(0.5),
    height: verticalScale(75),
    width: horizontalScale(65),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.drawerNavBackground,
    position: 'absolute',
    left: 0,
    elevation: 5,
    zIndex: 10,
  },
  TextInputFieldStyle: {
    height: 50,
    width: horizontalScale(250),
    backgroundColor: colors.drawerNavBackground,
    borderRadius: moderateScale(5),
    marginLeft: horizontalScale(50),
    elevation: 1,
  },
  textInputStyle: {
    paddingLeft: horizontalScale(20),
  },
  errorStyle: {
    color: 'red',
    marginVertical: verticalScale(3),
    marginHorizontal: horizontalScale(10),
    fontFamily: Fonts.type.poppinsregular,
  },
});

export default FormInput;
