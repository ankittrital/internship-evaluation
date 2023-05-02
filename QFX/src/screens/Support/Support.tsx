import React, {FC} from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface IProps {}

/**
 * @author   Ankit D Trital
 * @function @Support
 **/

const Support: FC<IProps> = () => {
  const {container} = styles;
  return (
    <View style={container}>
      <Text>Support</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Support;
