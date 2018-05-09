import React, { Component } from 'react';
import { View, Text, ScrollView, Linking, Platform } from 'react-native';
import { Button, Card, Icon } from 'react-native-elements';
import {connect} from "react-redux";
import { MapView } from 'expo';

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
        ),
        tabBarLabel: 'Review Jobs',
        tabBarIcon: ({ tintColor }) => {
                return <Icon name="favorite" size={30} color={tintColor} />
        }
    });

    renderLikedJobs(){
        return this.props.likedJobs.map(job => {
            const { company, formattedRelativeTime, url, longitude, latitude, jobkey, jobtitle } = job;
            const initialRegion = {
                longitude: longitude,
                latitude: latitude,
                latitudeDelta: 0.045,
                longitudeDelta: 0.02
            };

            return (
                <Card title={jobtitle} key={jobkey}>
                    <View style={{height:200}}>
                        <MapView
                            scrollEnabled={false}
                            style={{ flex: 1 }}
                            cacheEnabled={Platform.OS === 'android'}
                            initialRegion={initialRegion}
                        >
                        </MapView>
                        <View style={styles.detailWrapper}>
                            <Text style={styles.italics}>{company}</Text>
                            <Text style={styles.italics}>{formattedRelativeTime}</Text>
                        </View>
                        <Button
                            title="Apply Now!"
                            backgroundColor="#03A9F4"
                            onPress={() => Linking.openURL(url)}
                        />
                    </View>
                </Card>
            );
        });
    }

    render(){
        return (
            <ScrollView>
                {this.renderLikedJobs()}
            </ScrollView>
        );
    }
}

const styles = {
    viewStyle: {
      paddingTop: Platform.OS === "ios" ? 0 : Expo.Constants.statusBarHeight,　
      flex: 1
    },
    italics: {
      fontStyle: 'italic',
    },
    detailWrapper: {
        marginTop: 10,
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
};

function mapStaeToProps(state){
    return {likedJobs: state.likedJobs}
}

export default connect(mapStaeToProps)(ReviewScreen);