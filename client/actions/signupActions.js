import axios from 'axios';

export function userSignupRequest(userDate) {
    return dispatch => {
        return axios.post('/api/users', userDate)
    }
}

export function isUserExists(identifier) {
    return dispatch => {
       return axios.get(`/api/users/${identifier}`);
    }
}