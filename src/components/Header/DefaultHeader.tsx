import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { DrawerHeaderProps } from '@react-navigation/drawer'
import { Fonts } from '../../constants/Fonts'
import { moderateScale } from '../../constants/Metrics'

export interface DefaultHeaderProps extends DrawerHeaderProps{

}

const DefaultHeader = (props: DefaultHeaderProps) => {
  
  const styles = StyleSheet.create({
    headerContainer:{
      height: 64,
      backgroundColor: 'red'
    },
    headerText:{
      fontSize: moderateScale(16),
      fontFamily: Fonts.SourceSans3.Black
    }
  })

  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>DefaultHeader</Text>
    </View>
  )
}

export default DefaultHeader

