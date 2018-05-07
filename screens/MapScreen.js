import React, { Component } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { MapView } from 'expo';
import * as actions from '../actions';
import {connect} from "react-redux";
import { Button, Icon } from 'react-native-elements';

class MapScreen extends Component {

    state = {
        mapLoaded: false,
        region: {
            longitude: -122,
            latitude: 37,
            longitudeDelta: 0.04,
            latitudeDelta:0.09,
        }
    };

    componentDidMount(){
        this.setState({ mapLoaded: true})
    }

    onRegionChangeComplete = (region) => {
      this.setState({ region });
    };

    onButtonPress = () => {
        this.props.fetchJobs(this.state.region, () => {
            this.props.navigation.navigate('deck');
        });
    };

    render(){
        if(!this.state.mapLoaded){
            return (
                <View style={{flex: 1, justifyContent: 'center'}}>
                    <ActivityIndicator size="large"/>
                </View>
            );
        }
        return (
            <View style={{ flex: 1}}>
                <MapView
                    style={{flex:1}}
                    region={this.state.region}
                    onRegionChangeComplete={this.onRegionChangeComplete}
                />
                <View style={styles.buttonContainer}>
                    <Button
                        large
                        title="Search This Area"
                        icon={{name: 'search'}}
                        style={styles.buttonStyle}
                        onPress={this.onButtonPress}
                    />
                </View>
            </View>
        );
    }
}

styles = {
  buttonContainer: {
      position: 'absolute',
      bottom: 20,
      left: 0,
      right: 0,
  },
  buttonStyle: {
    backgroundColor: "#009688"
  }
};

export default connect(null, actions)(MapScreen);