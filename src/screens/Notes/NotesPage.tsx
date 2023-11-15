import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React, {useState} from 'react';
import Colors from '../../constants/Colors';
import ThemedTextInput from '../../components/TextInput/ThemedTextInput';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../constants/Metrics';
import {TextInput, ToggleButton} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';
import Fonts from '../../constants/Fonts';
import {IconButton} from 'react-native-paper';
import MasonryList from '@react-native-seoul/masonry-list';
import NotesCard from '../../components/Card/NotesCard';
import { FAB } from 'react-native-paper';
const tags = [
  'Work',
  'Uncategorized',
  'Call Notes',
  'Passwords',
  'Passwords 2',
];

type Props = {
  navigation: any;
  route: any;
};

const NotesPage = (props: Props) => {
  const {navigation, route} = props;

  const [selectedFolder, setSelectedFolder] = useState('');

  const styles = StyleSheet.create({
    pageContainer: {
      backgroundColor: Colors.PrimaryAccentColor,
      flex: 1,
      paddingHorizontal: moderateScale(16),
    },
    folderContainer: {
      marginVertical: verticalScale(8),
      width: '100%',
      gap: horizontalScale(8),
      borderRadius: moderateScale(16),
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    folderTagsContainer: {
      width: '100%',
      gap: horizontalScale(4),
      borderRadius: moderateScale(16),
    },
    pill: {
      paddingHorizontal: horizontalScale(12),
      paddingVertical: moderateScale(4),
      backgroundColor: Colors.White,
      borderRadius: moderateScale(16),
      width: 'auto',
    },
    pillText: {color: Colors.PrimaryColor, fontFamily: Fonts.SourceSans3.Bold},
    selectedPill: {
      paddingHorizontal: horizontalScale(12),
      paddingVertical: moderateScale(4),
      backgroundColor: Colors.SecondaryColor,
      borderRadius: moderateScale(16),
      width: 'auto',
    },
    selectedPillText: {color: Colors.White, fontFamily: Fonts.SourceSans3.Bold},
    notesContainer: {
      width: '100%',
      gap: moderateScale(8),
      flexWrap: 'wrap',
      flexDirection: 'row',
      borderRadius: moderateScale(16),
    },
    fab:{
      backgroundColor: Colors.SecondaryColor,
      position: 'absolute',
      borderRadius: 64,
      bottom: 16,
      right: 16,
    }
  });

  let data: object[] = [
    {
      headline: 'Pumpkin Pie Recipe',
      description:
        'Ingredients:\n\n1 tbsp Olive Oil\n2 tsp Baking Soda\n200 gm Pumpkin\n1 cup  Flour',
      timestamp: '2019-09-26T07:58:30.996+0200',
    },
    {
      headline: 'Berry Cake Recipe',
      description:
        'Ingredients:\n\n1 tbsp Olive Oil\n2 tsp Baking Soda\n200 gm Pumpkin\n1 cup  Flour\nLorem Ipsum\n Lorem Ipsum',
      timestamp: '2019-10-26T07:58:30.996+0200',
    },
    {
      headline: 'MOM for Client',
      description:
        'Ingredients:\n\n1 tbsp Olive Oil\n2 tsp Baking Soda\n200 gm Pumpkin\n1 cup  FlourIngredients:\n\n1 tbsp Olive Oil\n2 tsp Baking Soda\n200 gm Pumpkin\n1 cup  Flour\nLorem Ipsum\n Lorem Ipsum\nLorem Ipsum\nLorem Ipsum\nLorem Ipsum',
      timestamp: '2019-12-26T07:58:30.996+0200',
    },
    {
      headline: 'Pumpkin Pie Recipe',
      description:
        'Ingredients:\n\n1 tbsp Olive Oil\n2 tsp Baking Soda\n200 gm Pumpkin\n1 cup  Flour',
      timestamp: '2019-01-26T07:58:30.996+0200',
    },
    {
      headline: 'Pumpkin Pie Recipe',
      description:
        'Ingredients:\n\n1 tbsp Olive Oil\n2 tsp Baking Soda\n200 gm Pumpkin\n1 cup  Flour',
      timestamp: '2019-02-26T07:58:30.996+0200',
    },
    {
      headline: 'Pumpkin Pie Recipe',
      description:
        'Ingredients:\n\n1 tbsp Olive Oil\n2 tsp Baking Soda\n200 gm Pumpkin\n1 cup  Flour',
      timestamp: '2019-03-26T07:58:30.996+0200',
    },
  ];

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
      <View style={styles.folderContainer}>
        <ScrollView
          horizontal
          contentContainerStyle={styles.folderTagsContainer}>
          <ToggleButton.Group
            onValueChange={value => setSelectedFolder(value)}
            value={selectedFolder}>
            {tags.map(item => (
              <ToggleButton
                key={item}
                icon={() => (
                  <Text
                    style={
                      selectedFolder === item
                        ? styles.selectedPillText
                        : styles.pillText
                    }>
                    {item}
                  </Text>
                )}
                style={
                  selectedFolder === item ? styles.selectedPill : styles.pill
                }
                value={item}
              />
            ))}
          </ToggleButton.Group>
          <IconButton
            icon={'folder-open'}
            size={moderateScale(24)}
            iconColor={Colors.SecondaryAccentColor}
            style={[styles.pill, {height: 48}]}
          />
        </ScrollView>
      </View>

      <MasonryList
        data={data}
        style={{
          marginBottom: verticalScale(8),
          borderRadius: moderateScale(16),
          gap: moderateScale(8),
        }}
        contentContainerStyle={styles.notesContainer}
        scrollEnabled
        showsVerticalScrollIndicator={false}
        renderItem={(element: any) => (
          <NotesCard
            headline={element.item.headline}
            description={element.item.description}
            timestamp={element.item.timestamp}
            onPress={() => navigation.navigate('CreateNotes')}
            style={{marginVertical: verticalScale(4)}}
          />
        )}
      />
      <FAB
        icon="plus"
        color={Colors.White}
        style={styles.fab}
        onPress={() => console.log('Pressed')}
      />
    </SafeAreaView>
  );
};

export default NotesPage;
