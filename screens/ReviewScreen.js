import React, { Component } from 'react';
import { View, Text, Platform } from 'react-native';
import { Button } from 'react-native-elements';

class ReviewScreen extends Component {

    static navigationOptions = ({ navigation }) => ({
        headerTitle: "Review Jobs",
        headerRight: (
            <Button
                title="Settings"
                onPress={() => {
                    navigation.navigate("settings");
                }}
                color="rgba(0,122,255,1)"
                buttonStyle={{
                    backgroundColor: "rgba(0,0,0,0)"
                }}
            />
        )
    });

    render(){
        return (
            <View style={styles.viewStyle}>
                <Text>Review Screen</Text>
            </View>
        );
    }
}

const styles = {
  viewStyle: {
      paddingTop: Platform.OS === "ios" ? 0 : Expo.Constants.statusBarHeight,　
      flex: 1
  }
};

export default ReviewScreen;