import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {PressableProps} from 'react-native-paper/lib/typescript/components/TouchableRipple/Pressable';
import Colors from '../../constants/Colors';
import {moderateScale, verticalScale} from '../../constants/Metrics';
import Fonts from '../../constants/Fonts';
import {getHumanizedDate} from '../../utils/functions';

interface NotesCardProps extends PressableProps {
  headline: string;
  description: string;
  timestamp: string;
}

const NotesCard = (props: NotesCardProps) => {
  const styles = StyleSheet.create({
    cardContainer: {
      backgroundColor: Colors.White,
      minHeight: verticalScale(175),
      borderRadius: moderateScale(16),
      padding: moderateScale(12),
      justifyContent: 'space-between',
    },
    headline: {
      fontFamily: Fonts.SourceSans3.SemiBold,
      fontSize: moderateScale(22),
      color: Colors.Black,
    },
    description: {
      minHeight: verticalScale(60),
      marginVertical: verticalScale(16),
      color: Colors.Black,
      fontFamily: Fonts.SourceSans3.Regular,
    },
    timestamp: {
      fontFamily: Fonts.SourceSans3.Regular,
    },
  });

  return (
    <Pressable {...props} onPress={props.onPress} style={[styles.cardContainer, props.style]}>
      <Text style={styles.headline}>
        {props.headline ?? 'Pumpkin Pie Recipe'}
      </Text>
      <Text style={styles.description}>
        {props.description ?? 'Ingredients'}
      </Text>
      
        {props.timestamp
          ?<Text style={styles.timestamp}>{getHumanizedDate(props.timestamp)} </Text>
          : <Text>No Timestamp</Text>
          }
     
    </Pressable>
  );
};

export default NotesCard;
