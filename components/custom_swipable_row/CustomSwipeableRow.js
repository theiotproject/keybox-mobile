import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CustomSwipableRow = (handleSwipeLeft, handleSwipeRight) => {

  return (
    <Swipeable renderLeftActions={this.renderLeftActions}>
        <Text>"hello"</Text>
    </Swipeable>
  )
}

export default CustomSwipableRow

const styles = StyleSheet.create({})