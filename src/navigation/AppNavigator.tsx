import CreateNotePage from '../screens/Notes/CreateNotePage';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomePageNavigator from './HomePageNavigator';
import PageTitleHeader from '../components/Header/PageTitleHeader';
import {IconButton} from 'react-native-paper';
import Colors from '../constants/Colors';
import { moderateScale } from '../constants/Metrics';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="HomePageDrawer"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="HomePageDrawer" component={HomePageNavigator} />
        <Stack.Screen
          name="CreateNotes"
          component={CreateNotePage}
          options={{
            headerShown: true,
            header: props => (
              <PageTitleHeader
                title={''}
                right={
                  <>
                    <IconButton
                      icon="share-variant"
                      iconColor={Colors.White}
                      size={moderateScale(32)}
                      onPress={() => props.navigation.goBack()}
                    />
                    <IconButton
                      icon="menu"
                      iconColor={Colors.White}
                      size={moderateScale(32)}
                      onPress={() => props.navigation.goBack()}
                    />
                  </>
                }
                {...props}
              />
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
