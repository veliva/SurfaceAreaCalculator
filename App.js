import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {createSwitchNavigator, createAppContainer} from 'react-navigation'

import CalculatorScreen from './screens/CalculatorScreen';
import MenuScreen from './screens/MenuScreen';
import ShapeSelectionScreen from './screens/ShapeSelectionScreen';

class App extends React.Component {
  render() {
    return <AppContainer/>;
  }
}

export default App;

const AppSwitchNavigator = createSwitchNavigator({
  Menu: {screen: MenuScreen},
  Calculator: {screen: CalculatorScreen},
  ShapeSelection: {screen: ShapeSelectionScreen}
});

const AppContainer = createAppContainer(AppSwitchNavigator);