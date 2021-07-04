/**
 * Modules
 */
import 'react-native-gesture-handler';
import React from 'react';
import {Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';

// Store
import store from './src/store';

// Routes
import Routes from './src/routes';

const App: React.FC = () => {
  return (
    <React.Suspense fallback={<Text>Loading...</Text>}>
      <NavigationContainer>
        <Provider store={store}>
          <Routes />
        </Provider>
      </NavigationContainer>
    </React.Suspense>
  );
};

export default App;
