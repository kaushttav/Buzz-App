import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import facebookScreen from './screens/facebookScreen';
import instagramScreen from './screens/instagramScreen';

export default class App extends React.Component{
  render(){
    return(
      <AppContainer/>
    );
  }
}
const TabNavigator = createBottomTabNavigator({
  facebook : {screen : facebookScreen},
  instagram : {screen : instagramScreen},
});

const AppContainer = createAppContainer(TabNavigator);
