import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Fonts from '../../constants/Fonts';
import Colors from '../../constants/Colors';
import {horizontalScale, moderateScale} from '../../constants/Metrics';
import {IconButton} from 'react-native-paper';
import { StackHeaderProps } from '@react-navigation/stack/lib/typescript/src/types';

export interface PageTitleHeaderProps extends StackHeaderProps {
  title: string;
  right?: React.ReactNode;
  left?: React.ReactNode;
}

const PageTitleHeader = (props: PageTitleHeaderProps) => {
  const {navigation, route, title, right, left} = props;

  return (
    <View style={styles.headerContainer}>
      <View style={styles.titleContainer}>
        {left ?? (
          <>
            <IconButton
              icon="chevron-left"
              iconColor={Colors.SecondaryColor}
              size={moderateScale(32)}
              onPress={() => navigation.goBack()}
            />
            <Text style={styles.headerText}>{title ?? 'Header'}</Text>
          </>
        )}
      </View>
      <View style={styles.rightContainer}>{right ?? <></>}</View>
    </View>
  );
};

export default PageTitleHeader;

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
    fontSize: moderateScale(24),
    fontFamily: Fonts.Lato.Black,
    color: Colors.White,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightContainer: {
    flexDirection: 'row',
    
  },
});
