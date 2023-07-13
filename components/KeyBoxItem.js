import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Card, IconButton } from 'react-native-paper';

const KeyboxItem = ({ deviceName, deviceId, onPressEdit }) => {
  return (
    <Card style={styles.card}>
      <Card.Content style={styles.cardContent}>
        <Text style={styles.deviceName}>{deviceName}</Text>
        <Text style={styles.deviceId}>Device Id: <Text style={styles.deviceIdValue}>{deviceId}</Text></Text>
      </Card.Content>
      <Card.Actions style={styles.cardActions}>
        <IconButton icon="pencil" onPress={onPressEdit} />
      </Card.Actions>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 8,
    elevation: 4,
  },
  cardContent: {
    alignItems: 'center',
  },
  cardActions: {
    justifyContent: 'flex-end',
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
});

export default KeyboxItem;
