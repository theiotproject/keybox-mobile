import { FlatList, StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import KeyBoxItem from './KeyBoxItem';


const KeyboxList = () => {
  const [keyboxList, setKeyboxList] = useState([
    { id: 1, name: 'Device 1' },
    { id: 2, name: 'Device 2' },
    { id: 3, name: 'Device 3' },
    { id: 4, name: 'Device 4' },
    { id: 5, name: 'Device 5' },
  ]);

  const handleEditItem = (deviceId) => {
    // Handle edit logic here
    console.log('Editing device:', deviceId);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={keyboxList}
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
