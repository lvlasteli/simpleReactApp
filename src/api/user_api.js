import axios from 'axios';

export function UserLogin(data) {
    return axios.post('http://localhost:8000/login', data,
    {headers: {'Content-Type': 'application/json'}}
    ).then((response) => {
        const token = response.data.token;
        localStorage.setItem('token', token);
        localStorage.setItem('useremail', data.email);
        return response.data;
    }).catch((err) => {
        return err.message;
    });
}