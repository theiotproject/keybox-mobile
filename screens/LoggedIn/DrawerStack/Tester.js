import React, { useContext, useEffect, useState } from 'react';
import { FlatList, ActivityIndicator } from 'react-native';
import { Button, Switch, Text } from 'react-native-paper';
import { AddKeyBox, EditKeybox, GetKeyBoxes, GetKeyBoxesUpdt } from '../../../utils/dataService';
import themes from '../../../utils/themes';
import { View } from 'react-native';
import AddKeyboxModal from '../../../components/modals/AddKeyboxModal';
import EditKeyboxModal from '../../../components/modals/EditKeyboxModal';
import { StyleSheet } from 'react-native';
import { KeyboxContext } from '../DrawerNavigationScreen';

const Tester = () => {

  const device = useContext(KeyboxContext);


  const [loading, setLoading] = useState(false);
  const [visibleAdd, setVisibleAdd] = useState(false);
  const [visibleEdit, setVisibleEdit] = useState(false);
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
    <View>
      {/* SHOWING CURRENT DEVICE NAME */}
      <Text>{device.deviceName}</Text>


      <Button mode='contained' style={styles.button} onPress={() => setVisibleAdd(true)}>
        ADD TEMPLATE
      </Button>
      
      <Button mode='contained' style={styles.button} onPress={() => setVisibleEdit(true)}>
        EDIT TEMPLATE
      </Button>

      <Button mode='contained' style={styles.button} onPress={fetchData}>
        GET DATA
      </Button>
      

      {/* Showing all user keyboxes */}
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

      <AddKeyboxModal 
        visible={visibleAdd} 
        handleAdd={(deviceId, deviceName) => { 
          AddKeyBox(deviceId, deviceName)
          setVisibleAdd(false)
        }}
        handleDismiss={() => setVisibleAdd(false)}  
      />

      <EditKeyboxModal 
        visible={visibleEdit} 
        handleEdit={(docId, deviceName, deviceStatus) => { 
          EditKeybox(docId, deviceName, deviceStatus)
          setVisibleEdit(false)
        }}
        handleDismiss={() => setVisibleEdit(false)}  
      />

    
    </View>
  );
};

export default Tester;

const styles = StyleSheet.create({

  button: {
    marginVertical: 5,
    marginHorizontal: 5,
  }


})
