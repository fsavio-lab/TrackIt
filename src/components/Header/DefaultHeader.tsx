import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { DrawerHeaderProps } from '@react-navigation/drawer'

export interface DefaultHeaderProps extends DrawerHeaderProps{

}

const DefaultHeader = (props: DefaultHeaderProps) => {
  
  const styles = StyleSheet.create({
    headerContainer:{
      height: 64,
      backgroundColor: 'red'
    }
  })

  return (
    <View style={styles.headerContainer}>
      <Text>DefaultHeader</Text>
    </View>
  )
}

export default DefaultHeader

