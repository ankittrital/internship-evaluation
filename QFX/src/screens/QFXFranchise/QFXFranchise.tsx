import React, {FC} from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface IProps {}

/**
 * @author
 * @function @QfxFranchise
 **/

const QfxFranchise: FC<IProps> = () => {
  const {container} = styles;
  return (
    <View style={container}>
      <Text>QfxFranchise</Text>
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

export default QfxFranchise;
