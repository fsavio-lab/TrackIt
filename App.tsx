/**
 * TrackIt : Notes App powered by React Native
 * https://github.com/fsavio-lab/TrackIt/
 *
 * @format
 */

import * as React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import AppNavigator from './src/navigation/AppNavigator';
import {Text} from 'react-native';

function App(): JSX.Element {
  return (
    <GestureHandlerRootView style={{flex : 1}}>
      <AppNavigator />
    </GestureHandlerRootView>
  );
}

export default App;
