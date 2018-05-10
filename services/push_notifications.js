import { Permissions, Notifications } from 'expo';
import { AsyncStorage } from 'react-native';
import axios from 'axios';

const PUSH_ENDPOINT = 'http://rallycoding.herokuapp.com/api/tokens';

export default async () => {
    console.log('first line ');
    let previousToken = await AsyncStorage.getItem('pushtoken');
    console.log(previousToken);

    if(previousToken){
        return;
    }
    console.log('previous token');

    let { status }  = await Permissions.askAsync(Permissions.NOTIFICATIONS);
    console.log(status);

    if(status !== 'granted'){
        console.log('status not granted');
        return;
    }

    let token = await Notifications.getExpoPushTokenAsync();
    await axios.post(PUSH_ENDPOINT, { token: { token }});
    AsyncStorage.setItem('pushtoken', token);
}