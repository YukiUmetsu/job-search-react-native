import { AsyncStorage } from 'react-native';
import {FACEBOOK_LOGIN_FAIL, FACEBOOK_LOGIN_SUCCESS} from "./types";
import { Facebook } from 'expo';

export const facebookLogin = () => async dispatch => {
    let token = await AsyncStorage.getItem('fb_token');

    if (token) {
        // Dispatch an action saying FB login is done
        dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: token });
    } else {
        // Start up FB Login process
        doFacebookLogin(dispatch);
    }
};

const doFacebookLogin = async dispatch => {
    let { type, token } = await Facebook.logInWithReadPermissionsAsync('196207057539134', {
        permissions: ['public_profile']
    });

    if (type === 'cancel') {
        return dispatch({ type: FACEBOOK_LOGIN_FAIL });
    }

    await AsyncStorage.setItem('fb_token', token);
    return dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: token });
};