import * as types from './actions-types';
import {centreService} from '../service/centre-service';
import {beginApiCall} from './api-status-actions';

export function loadActivitiesSuccess(activities){
    return { type: types.LOAD_ACTIVITIES_SUCCESS, activities};
}

export function loadActivities() {
    return function(dispatch) {
        dispatch(beginApiCall());
        return centreService.getActivities().then(activities => {
            dispatch(loadActivitiesSuccess(activities));
        }).catch(error => {
            throw(error);
        });
    };
}
