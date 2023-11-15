import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import * as React from 'react'
import Colors from '../../constants/Colors'
import { moderateScale } from '../../constants/Metrics'
import ThemedTextInput from '../../components/TextInput/ThemedTextInput'
import {TextInput} from 'react-native-paper'

type Props = {}

const ChecklistPage = (props: Props) => {
  return (
    <SafeAreaView style={styles.pageContainer}>
      <ThemedTextInput
        inputStyle='search'
        placeholder="Search"
        left={
          <TextInput.Icon
            icon="search-web"
            color={Colors.SecondaryColor}
            size={moderateScale(32)}
          />
        }
      />
      <View style={styles.checklistContainer}></View>
    </SafeAreaView>
  )
}

export default ChecklistPage

const styles = StyleSheet.create({
  pageContainer: {
    backgroundColor: Colors.PrimaryAccentColor,
    flex: 1,
    paddingHorizontal: moderateScale(16),
  },
  checklistContainer:{
    
  }

})