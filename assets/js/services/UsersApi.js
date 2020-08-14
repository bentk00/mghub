import axios from 'axios';
import {USERS_API} from "../config";


const register = user => {
    console.log(USERS_API);
    return axios.post(USERS_API, user);
}

export default {
    register
}