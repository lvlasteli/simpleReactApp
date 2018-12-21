import axios from 'axios';

export function UserOrders(data) {
    const token = localStorage.getItem('token');
    const authHeader = {'Authorization': `Bearer ${token}`};
    return axios.post('http://localhost:8000/orders', data,
    {headers: {authHeader}}
    ).then((response) => {
        return response.data;
      }).catch(err => {
         return err.message;
      });
}