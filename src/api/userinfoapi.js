import axios from 'axios';

export const addUsername = ({ body = null }) => {
    return new Promise((resolve, reject) => {
        let REQUEST_URL = "https://goturapp.herokuapp.com/click/add";
        axios.post(REQUEST_URL, body)
            .then((response) => {
                resolve(response.data)
            }).catch((err) => {
                reject(null);
            })
    });
};
export const addScore = ({ body = null }) => {
    return new Promise((resolve, reject) => {       
        let REQUEST_URL = "https://goturapp.herokuapp.com/click/updateScore/"+body._id;
       console.warn(body)
        axios.put(REQUEST_URL, body)
            .then((response) => {
                resolve(response.data)
            }).catch((err) => {
                console.warn(err)
                reject(null);
            })
    });
};
export const addLeader = () => {
    return new Promise((resolve, reject) => {       
        let REQUEST_URL = "https://goturapp.herokuapp.com/click/get";
        axios.get(REQUEST_URL)
            .then((response) => {
                resolve(response.data)
            }).catch((err) => {
                console.warn(err)
                reject(null);
            })
    });
};
