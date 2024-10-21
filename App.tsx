import { StyleSheet, Text, View } from 'react-native';
import { MyScreenNavigationStack } from './src/navigation/ScreenNavigation';
import { Provider } from 'react-redux';

import { store } from './src/store/store';


export default function App() {
  return (
    <Provider store={store}>
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
