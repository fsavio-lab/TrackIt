/**
 * TrackIt : Notes App powered by React Native
 * https://github.com/fsavio-lab/TrackIt/
 *
 * @format
 */

import * as React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import AppNavigator from './src/navigation/AppNavigator';
import { PaperProvider } from 'react-native-paper';

function App(): JSX.Element {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <PaperProvider>
        <AppNavigator />
      </PaperProvider>
    </GestureHandlerRootView>
  );
}

export default App;
