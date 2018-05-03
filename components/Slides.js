import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Swiper from 'react-native-swiper';
import {Button} from "react-native-elements";

class Slides extends Component {

    renderLastSlideButton(index){
        if(index === this.props.data.length -1){
            return (
                <Button
                    title="Onwards!"
                    raised
                    buttonStyle={styles.buttonStyle}
                    onPress={this.props.onComplete}
                />
            );
        }
    }

    renderSlides(){
        return this.props.data.map((slide, index) => {
            return (
                <View style={slide.style}>
                    <Text style={slide.textStyle}>{slide.text}</Text>
                    {this.renderLastSlideButton(index)}
                </View>
            );
        }
    )};


    render(){
        return (
            <Swiper style={styles.wrapper} showsButtons={true}>
                {this.renderSlides()}
            </Swiper>
        );
    }
}


const styles = {
    wrapper: {
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    },
    buttonStyle: {
        backgroundColor: '#0288D1',
        marginTop: 15
    }
};

export default Slides;