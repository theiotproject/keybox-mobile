import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card, Button } from 'react-native-paper';

const KeyboxItem = ({ deviceName, deviceId, onPressEdit, onPressDelete }) => {
  return (
    <Card style={styles.card}>
      <Card.Content style={styles.cardContent}>
        <Text style={styles.deviceName}>{deviceName}</Text>
        <Text style={styles.deviceId}>Device Id: <Text style={styles.deviceIdValue}>{deviceId}</Text></Text>
      </Card.Content>
      <Card.Actions style={styles.cardActions}>
        <Button style={styles.buttonManage} mode='outlined' onPress={onPressEdit}>
          Manage
        </Button>
        <Button style={styles.buttonDelete} mode='outlined' onPress={onPressDelete}>
          Delete
        </Button>
      </Card.Actions>
    </Card>

  );
};

const styles = StyleSheet.create({
  card: {
    margin: 8,
    elevation: 4,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardContent: {
    alignItems: 'center',
  },
  cardActions: {
    alignSelf: 'center',
    flexDirection: 'row', // Added to align buttons horizontally
    justifyContent: 'space-between', // Added to create space between buttons
  },
  deviceName: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  deviceId: {
    fontSize: 14,
    color: '#666',
    fontStyle: 'italic',
  },
  deviceIdValue: {
    fontWeight: 'normal',
    color: '#666',
  },
  buttonManage: {
    borderRadius: 5,
  },
  buttonDelete: {
    borderRadius: 5,
  },
});

export default KeyboxItem;