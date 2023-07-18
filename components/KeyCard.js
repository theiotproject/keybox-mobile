import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Card, Button } from 'react-native-paper';
import themes from '../utils/themes';


const KeyCard = ({ deviceName, handleEdit }) => {



  return (
    <Card style={styles.cardContainer}>
      <View style={styles.container}>
        <Text style={styles.deviceName}>
          {deviceName.length < 19 ? deviceName : deviceName.substring(0, 19) + '...'}
        </Text>

        <Button 
          style={styles.buttonManage} 
          mode='outlined' 
          compact={true}
          onPress={() => 
            // handleEdit
            alert("EDITING BOX")
          } 
        >
          Edit Card
        </Button>
      </View>
    </Card>

  )
}

export default KeyCard

const styles = StyleSheet.create({

  cardContainer: {
    width: '95%',
    alignSelf: 'center',
    borderRadius: 5,
    marginVertical: 15,
  },

  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    columnGap: 5,
  },

  deviceName: {
    flex: 3,
    fontWeight: 'bold',
    fontSize: 23  
  },

  buttonManage: {
    flex: 1,
    borderRadius: 5,
    color: themes.colors.primary,
    borderColor: themes.colors.primary,
    // height: '75%'
  }

})