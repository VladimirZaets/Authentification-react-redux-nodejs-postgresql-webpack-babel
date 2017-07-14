import axios from 'axios';

export function userSignupRequest(userDate) {
    return dispatch => {
        return axios.post('/api/users', userDate)
    }
}