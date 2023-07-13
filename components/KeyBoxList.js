import { FlatList, StyleSheet, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import KeyBoxItem from './KeyBoxItem';


const KeyboxList = ({ keyBoxList }) => {
 
  

  const handleEditItem = (deviceId) => {
    // Handle edit logic here
    console.log('Editing device:', deviceId);
  };

  // TODO: when sent device name and device id add item

  

  return (
    <View style={styles.container}>
      <FlatList
        data={keyBoxList}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <KeyBoxItem
            deviceName={item.name}
            deviceId={item.id}
            onPressEdit={() => handleEditItem(item.id)}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '95%',
    flex: 1,
  },
});

export default KeyboxList;
