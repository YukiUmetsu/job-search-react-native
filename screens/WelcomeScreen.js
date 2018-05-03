import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Slides from "../components/Slides";

const styles = {
    wrapper: {
    },
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB',
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5',
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9',
    },
    textStyle: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    }
};

const SLIDE_DATA = [
    { text: 'Welcome to Job Search App', style: styles.slide1, textStyle: styles.textStyle},
    { text: 'Use this to get a job', style: styles.slide1, textStyle: styles.textStyle},
    { text: 'Set your location, then swipe away!', style: styles.slide1, textStyle: styles.textStyle}
];

class WelcomeScreen extends Component {

    slidesComplete = () => {
        this.props.navigation.navigate("auth");
    };

    render(){
        return (
            <Slides data={SLIDE_DATA} onComplete={this.slidesComplete}/>
        );
    }
}

export default WelcomeScreen;