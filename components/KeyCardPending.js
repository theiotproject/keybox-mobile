import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Card, Button } from 'react-native-paper';
import themes from '../utils/themes';


const KeyCardPending = ({ deviceId, handleAdd, handleDelete }) => {



  return (
    <Card style={styles.cardContainer}>
      <View style={styles.container}>
        <Text style={styles.deviceId}>
          {deviceId.length < 10 ? "Id: " + deviceId : "Id: " + deviceId.substring(0, 10) + '...'}
        </Text>

        <Button 
          style={styles.buttonAdd} 
          mode='outlined' 
          compact={true}
          onPress={() => 
            // handle on Add
            alert("Add")
          } 
        >
          Add
        </Button>

        <Button 
          style={styles.buttonDelete} 
          mode='outlined' 
          compact={true}
          onPress={() => 
            // handle on Delete
            alert("Delete")
          } 
        >
          Delete
        </Button>
      </View>
    </Card>

  )
}

export default KeyCardPending

const styles = StyleSheet.create({

  cardContainer: {
    width: '95%',
    alignSelf: 'center',
    borderRadius: 5,
  },

  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 15,
    columnGap: 5,
  },

  deviceId: {
    flex: 3,
    fontWeight: 'bold',
    fontSize: 23  
  },

  buttonAdd: {
    flex: 1,
    borderRadius: 5,
    color: themes.colors.primary,
    borderColor: themes.colors.primary,
  },
  
  buttonDelete: {
    flex: 1,
    borderRadius: 5,
    color: 'red',
    borderColor: 'red',
  }

})