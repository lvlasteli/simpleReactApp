import axios from 'axios';

export function GetProducts(data) {
    return axios.get('http://localhost:8000/products').then((response) => {
        return response.data;
    }).catch((err) => {
        return err});
}