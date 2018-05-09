import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import WelcomeScreen from "./screens/WelcomeScreen";
import AuthScreen from "./screens/AuthScreen";
import MapScreen from "./screens/MapScreen";
import DeckScreen from "./screens/DeckScreen";
import ReviewScreen from "./screens/ReviewScreen";
import SettingsScreen from "./screens/SettingsScreen";
import {Provider} from "react-redux";
import store from "./store";

export default class App extends React.Component {
  render() {
    const MainNavigator = TabNavigator({
        welcome: { screen: WelcomeScreen },
        auth: { screen: AuthScreen },
        main: {
          screen: TabNavigator({
              map: { screen: MapScreen },
              deck: { screen: DeckScreen },
              review: StackNavigator({
                  review: {screen: ReviewScreen},
                  settings: {screen: SettingsScreen}
              })
          },{
              tabBarOptions: {
                  tabBarPosition: 'bottom',
                  labelStyle: { fontSize: 12}
              }
          })
        }
    }, {
        navigationOptions: {
            tabBarVisible: true,
        }
    });

    return (
        <Provider store={store}>
            <MainNavigator />
        </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
