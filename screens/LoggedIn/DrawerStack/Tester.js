import React, { useEffect, useState } from 'react';
import { FlatList, ActivityIndicator } from 'react-native';
import { Button, Switch, Text } from 'react-native-paper';
import { AddKeyBox, EditKeybox, GetKeyBoxes, GetKeyBoxesUpdt } from '../../../utils/dataService';
import themes from '../../../utils/themes';
import { View } from 'react-native';
import AddKeyboxModal from '../../../components/modals/AddKeyboxModal';
import EditKeyboxModal from '../../../components/modals/EditKeyboxModal';

const Tester = () => {
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

  // -----------------------
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View>
      <Button mode='contained' onPress={() => setVisibleAdd(true)}>
        ADD TEMPLATE
      </Button>
      <Button mode='contained' onPress={() => setVisibleEdit(true)}>
        EDIT TEMPLATE
      </Button>
      <Button mode='contained' onPress={fetchData}>
        GET DATA
      </Button>

      <Switch
        trackColor={{false: '#767577', true: '#81b0ff'}}
        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />

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
        handleEdit={(deviceName, deviceStatus) => { 
          EditKeybox(deviceName, deviceStatus)
          setVisibleEdit(false)
        }}
        handleDismiss={() => setVisibleEdit(false)}  
      />

    
    </View>
  );
};

export default Tester;
