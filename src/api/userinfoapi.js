import axios from 'axios';

export const addUsername = ({body=null}) => {
    return new Promise((resolve, reject) => {
        let REQUEST_URL = "https://localhost:3001/click/add";
        axios.post(REQUEST_URL,body)
            .then((response) => {
                console.warn(response)
                resolve(response.data)
            }).catch((err) => {
                console.warn(err)
                reject(null);
            })

    });
};