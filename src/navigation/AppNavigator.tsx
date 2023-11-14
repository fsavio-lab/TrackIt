import {createDrawerNavigator} from '@react-navigation/drawer';
import NotesPage from '../screens/Notes/NotesPage';
import ChecklistPage from '../screens/CheckList/ChecklistPage';
import SettingsPage from '../screens/Settings/SettingsPage';
import CreateNotePage from '../screens/Notes/CreateNotePage';
import {NavigationContainer} from '@react-navigation/native';
import DefaultHeader from '../components/Header/DefaultHeader';

type AppDrawerParamList = {
  Notes: undefined;
  CheckList: undefined;
  Settings: undefined;
  CreateNotes: undefined;
};

const Drawer = createDrawerNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Notes"
        screenOptions={{
          drawerType: 'front',
          drawerStyle: {width: '50%'},
          header: props => <DefaultHeader {...props} />,
        }}>
        <Drawer.Screen name="Notes" component={NotesPage} />
        <Drawer.Screen name="CheckList" component={ChecklistPage} />
        <Drawer.Screen name="Settings" component={SettingsPage} />
        <Drawer.Screen name="CreateNotes" component={CreateNotePage} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
