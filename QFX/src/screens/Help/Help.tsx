import React, {FC} from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface IProps {}

/**
 * @author   Ankit D Trital
 * @function @Help
 **/

const Help: FC<IProps> = () => {
  const {container} = styles;
  return (
    <View style={container}>
      <Text>Help</Text>
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

export default Help;
