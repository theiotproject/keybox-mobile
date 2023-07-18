import { FlatList, StyleSheet, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import KeyboxItem from './KeyBoxItem';


const KeyboxList = ({ keyBoxList }) => {
  const [keyboxList, setKeyboxList] = useState(keyBoxList);




  const handleEditItem = (deviceId) => {
    // Handle edit logic here
    console.log('Editing device:', deviceId);
  };

  const handleDeleteItem = (deviceId) => {
    setKeyboxList((prevList) => prevList.filter((item) => item.id !== deviceId));
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={keyboxList}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <KeyboxItem
            deviceName={item.name}
            deviceId={item.id}
            onPressEdit={() => handleEditItem(item.id)}
            onPressDelete={() => handleDeleteItem(item.id)}
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
