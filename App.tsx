/**
 * Modules
 */
import 'react-native-gesture-handler';
import React from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';

import { AppProvider } from './src/providers/appContext';

import Loading from './src/components/loading';

// Store
import store from './src/store';

// Routes
import Routes from './src/routes';

const App: React.FC = () => {
  return (
    <React.Suspense fallback={<Loading />}>
      <NavigationContainer>
        <AppProvider>
          <Provider store={store}>
            <Routes />
          </Provider>
        </AppProvider>
      </NavigationContainer>
    </React.Suspense>
  );
};

export default App;
