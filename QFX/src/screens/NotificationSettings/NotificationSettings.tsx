import React, {FC} from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface IProps {}

/**
 * @author
 * @function @NotificationSettings
 **/

const NotificationSettings: FC<IProps> = () => {
  const {container} = styles;
  return (
    <View style={container}>
      <Text>NotificationSettings</Text>
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

export default NotificationSettings;
