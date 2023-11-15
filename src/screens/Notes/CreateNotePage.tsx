import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../../constants/Colors'
import { horizontalScale, moderateScale } from '../../constants/Metrics'
import ThemedTextInput from '../../components/TextInput/ThemedTextInput'
import { getHumanizedDate } from '../../utils/functions'
import Fonts from '../../constants/Fonts'

type Props = {}

const CreateNotePage = (props: Props) => {

  const styles = StyleSheet.create({
    pageContainer:{
      backgroundColor: Colors.PrimaryAccentColor,
      flex: 1,
      padding: moderateScale(16)
    },
    descriptors:{
      flexDirection: 'row',
      padding: moderateScale(16),
      gap: horizontalScale(16)
    },
    descriptorText:{
      color: Colors.White,
      fontFamily: Fonts.SourceSans3.Regular
    }
  })

  return (
    <View style={styles.pageContainer}>
      <ThemedTextInput
        placeholder="Title"
        inputStyle="normal"
      />
      <View style={styles.descriptors}>
          <Text style={styles.descriptorText}>{getHumanizedDate("2019-03-26T07:58:30.996+0200")}</Text>
          <Text style={styles.descriptorText}>{"23"} Characters</Text>
      </View>
      <ThemedTextInput
        placeholder="Start Typing"
        inputStyle="normal-multiline"
        multiline
      />
    </View>
  )
}

export default CreateNotePage

