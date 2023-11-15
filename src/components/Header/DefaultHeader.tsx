import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {DrawerHeaderProps} from '@react-navigation/drawer';
import Fonts from '../../constants/Fonts';
import {horizontalScale, moderateScale} from '../../constants/Metrics';
import Colors from '../../constants/Colors';
import {IconButton} from 'react-native-paper';

export interface DefaultHeaderProps extends DrawerHeaderProps {}

const DefaultHeader = (props: DefaultHeaderProps) => {
  const {navigation, route} = props;

  const styles = StyleSheet.create({
    headerContainer: {
      minHeight: 72,
      backgroundColor: Colors.PrimaryColor,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingRight: horizontalScale(16),
    },
    headerText: {
      fontSize: moderateScale(32),
      fontFamily: Fonts.Lato.Black,
      color: Colors.White,
    },
  });

  return (
    <View style={styles.headerContainer}>
      <IconButton
        icon="text"
        iconColor={Colors.SecondaryColor}
        size={moderateScale(32)}
        onPress={() => navigation.openDrawer()}
      />
      <Text style={styles.headerText}>TrackIt</Text>
    </View>
  );
};

export default DefaultHeader;
