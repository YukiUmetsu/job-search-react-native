import {combineReducers} from 'redux';
import jobs from './jobs_reducer';

export default combineReducers({
    auth: () => {
        return {}
    },
    jobs
});