import React, { useEffect, useState } from 'react';
import { FlatList, ActivityIndicator } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { AddKeyBox, GetKeyBoxes } from '../../../utils/dataService';
import themes from '../../../utils/themes';

const Tester = () => {
  const [loading, setLoading] = useState(false);
  const [keyboxes, setKeyboxes] = useState([]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const data = await GetKeyBoxes();
      setKeyboxes(data);
    } catch (error) {
      console.error("Error fetching keyboxes: ", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Button mode='contained' onPress={AddKeyBox}>
        ADD TEMPLOT
      </Button>
      <Button mode='contained' onPress={fetchData}>
        GET DATA
      </Button>
      {loading ? (
        <ActivityIndicator size="large" color={themes.colors.primary} />
      ) : (
        <FlatList
          style={{ backgroundColor: 'red' }}
          data={keyboxes}
          renderItem={({ item }) => 
            <Text>
              {/* {JSON.stringify(item)} */}
              {item.deviceName}
            </Text>
          }
          keyExtractor={(item) => item.docId}
        />
      )}
    </>
  );
};

export default Tester;
