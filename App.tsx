/**
 * Modules
 */
import 'react-native-gesture-handler';
import React from 'react';
import {Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

// Routes
import Routes from './src/routes';

const App: React.FC = () => {
  return (
    <React.Suspense fallback={<Text>Loading...</Text>}>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </React.Suspense>
  );
};

export default App;
