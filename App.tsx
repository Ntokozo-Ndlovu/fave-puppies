import React from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import { MyScreenNavigationStack } from './src/navigation/ScreenNavigation';
import { Provider } from 'react-redux';

import { store } from './src/store/store';
import { Colors } from '@constants';


export default function App() {
  return (<Provider store={store}>
      <StatusBar backgroundColor={Colors.light.background} />
    <MyScreenNavigationStack>
    </MyScreenNavigationStack>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
