/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './src/Navigations';

const App = () => {

  return (
    <NavigationContainer>
      <TabNavigator/>
    </NavigationContainer>
  );
};
export default App;