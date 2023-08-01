import React, { useContext, useEffect, useState } from 'react';
import { FlatList, ActivityIndicator } from 'react-native';
import { Button, Switch, Text } from 'react-native-paper';
import { AddKeyBox, EditKeybox, GetKeyBoxes, GetKeyBoxesUpdt } from '../../../utils/dataService';
import themes from '../../../utils/themes';
import { View } from 'react-native';
import AddKeyboxModal from '../../../components/modals/AddKeyBoxModal';
import EditKeyboxModal from '../../../components/modals/EditKeyboxModal';
import { StyleSheet } from 'react-native';
import { KeyboxContext } from '../DrawerNavigationScreen';
import CustomSwipableRow from '../../../components/custom_swipable_row/CustomSwipeableRow';
import TestSwipeableRow from '../../../components/custom_swipable_row/TestSwipeableRow';
import CustomSelectDropdown from '../../../components/CustomSelectDropdown';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import CustomDropdown from '../../../components/CustomDropdown';

const countries = ["Egypt", "Canada", "Australia", "Ireland", "Canada", "Australia", "Ireland"];
// Activity for testing functionalities of this app
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
    // fetchData();
  }, []);


  // DROPDOWN

  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelect = (item) => {
    setSelectedOption(item);
  };
  

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
      
      <TestSwipeableRow/>


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

  
    

      <CustomDropdown style={{height: 200}} data={countries} onSelect={handleSelect} />
      

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

  swipr: {
    backgroundColor: 'green',
    alignSelf: 'center',
  },

  button: {
    marginVertical: 5,
    marginHorizontal: 5,
  }

})
