import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TextInput} from 'react-native-paper';
import Colors from '../../constants/Colors';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../constants/Metrics';
import AntIcon from 'react-native-vector-icons/AntDesign';
import Fonts from '../../constants/Fonts';

type ThemedTextInputProps = React.ComponentProps<typeof TextInput> & {
  inputStyle: 'normal-multiline' | 'normal' | 'search';
};

const ThemedTextInput = (props: ThemedTextInputProps) => {
  let styles;
  switch (props.inputStyle) {
    case 'normal':
      styles = StyleSheet.create({
        inputStyle: {
          width: '100%',
          backgroundColor: Colors.PrimaryAccentColor,
        },
        inputContentStyle: {
          fontFamily: Fonts.SourceSans3.Medium,
          fontSize: moderateScale(32),
          justifyContent: 'center',
          flexDirection: 'row',

          color: Colors.White,
        },
        inputOutlineStyle: {
          borderRadius: moderateScale(24),
          borderWidth: 0,
          
        },
      });
      break;
    case 'normal-multiline':
      styles = StyleSheet.create({
        inputStyle: {
          width: '100%',
          // marginVertical: verticalScale(16),
          backgroundColor: Colors.PrimaryColor,
          paddingVertical: verticalScale(16),
          flex: 1
        },
        inputContentStyle: {
          fontFamily: Fonts.SourceSans3.Regular,
          fontSize: moderateScale(16),
          color: Colors.White
        },
        inputOutlineStyle: {
          borderRadius: moderateScale(24),
          borderWidth: 0,
        },
      });
      break;
    case 'search':
    default:
      styles = StyleSheet.create({
        inputStyle: {
          width: '100%',
          marginVertical: verticalScale(16),
          backgroundColor: Colors.PrimaryColor,
          paddingHorizontal: horizontalScale(0),
        },
        inputContentStyle: {
          fontFamily: Fonts.SourceSans3.Medium,
          fontSize: moderateScale(16),
          color: Colors.White,
        },
        inputOutlineStyle: {
          borderRadius: moderateScale(24),
          borderWidth: 0,
        },
      });
      break;
  }

  return (
    <TextInput
      {...props}
      mode={props.mode ?? 'outlined'}
      style={[styles.inputStyle, props.style]}
      contentStyle={[styles.inputContentStyle, props.contentStyle]}
      outlineStyle={[styles.inputOutlineStyle, props.outlineStyle]}
      left={props.left}
      right={props.right}
      placeholder={props.placeholder ?? ''}
      placeholderTextColor={props.placeholderTextColor ?? Colors.White}
      cursorColor={Colors.SecondaryColor}
    />
  );
};

export default ThemedTextInput;
