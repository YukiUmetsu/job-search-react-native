import React, { Component } from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import * as actions from '../actions';
import {connect} from "react-redux";

class AuthScreen extends Component {

    componentDidMount(){
        // TODO erase
        AsyncStorage.removeItem('fb_token');
        console.log(AsyncStorage.getItem('fb_token'));
        this.props.facebookLogin();
    }

    render(){
        return (
            <View>
                <Text>AuthScreen</Text>
            </View>
        );
    }
}

export default connect(null, actions)(AuthScreen);