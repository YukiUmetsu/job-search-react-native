import React from 'react';

import Expo, { Notifications } from 'expo';
import { StyleSheet, Text, View, Alert } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import WelcomeScreen from "./screens/WelcomeScreen";
import AuthScreen from "./screens/AuthScreen";
import MapScreen from "./screens/MapScreen";
import DeckScreen from "./screens/DeckScreen";
import ReviewScreen from "./screens/ReviewScreen";
import SettingsScreen from "./screens/SettingsScreen";
import {Provider} from "react-redux";
import store from "./store";
import registerForNotifications from './services/push_notifications';

export default class App extends React.Component {

    componentDidMount(){
        registerForNotifications();
        Notifications.addListener((notification) => {
           const { data: { text }, origin} = notification;

           if(origin === 'received' && text){
               Alert.alert(
                   'New Push Notification',
                   text,
                   [{ text: 'Ok.'}]
               );
           }
        });
    }

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
