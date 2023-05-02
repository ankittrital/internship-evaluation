import locationMockdata from '@mock/locationdata';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import React, {FC} from 'react';
import {FlatList, Text, View} from 'react-native';

/**
 * @author
 * @function @locationDrawer
 **/

const locationDrawer: FC = (props: any) => {
  return (
    <DrawerContentScrollView {...props}>
      <FlatList
        data={locationMockdata}
        keyExtractor={(item, index) => 'key' + index}
        renderItem={(item: any) => {
          return (
            <View>
              <Text>{item.locationName}</Text>
            </View>
          );
        }}
      />
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

export default locationDrawer;
