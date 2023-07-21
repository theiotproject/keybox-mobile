import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Button, Card, Text } from 'react-native-paper'
import themes from '../../utils/themes'
import { FlatList } from 'react-native-gesture-handler'

const KeySlot = () => {
  return (
    <Card style={styles.cardContainer}>
        <View style={styles.container}>
            <Text style={styles.keyslotName}>
                KeySlot1
            </Text>

            <Text style={styles.usersLabel} variant='labelLarge'>
                Authorized Users:
            </Text>

            <FlatList style={styles.usersList} />

            <Button 
                style={styles.buttonManage} 
                mode='outlined' 
                compact={true}
                onPress={() => 
                    // handleEdit
                    alert("EDITING BOX")
                } 
            >
            Manage
            </Button>
        </View>
    </Card>
  )
}

export default KeySlot

const styles = StyleSheet.create({

    cardContainer: {
        width: '95%',
        alignSelf: 'center',
        borderRadius: 5,
        marginVertical: 15,
    },
  
    container: {
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 20,
        columnGap: 5,
    },

    usersLabel: {
        // flex: 1,
        marginVertical: 15,
        alignSelf: 'flex-start'
    },
  
    keyslotName: {
        // flex: 3,
        fontWeight: 'bold',
        fontSize: 40  
    },

    usersList: {
        marginVertical: 15,
    },
  
    buttonManage: {
        // flex: 1,
        borderRadius: 5,
        color: themes.colors.primary,
        borderColor: themes.colors.primary,
    }
  
  })