import axios from 'axios';

export const axiosWithAuth = () => {
    const token = localStorage.getItem('token');

    const login = () => {
        axios.post('endpoint/here', userCredentials)
            .then(res => {
                localStorage.setItem('token', res.data.token);
                props.history.push('/dashboard');
            }
    }

    return axios.create({
        headers: (
            'Content-Type': 'application/json',
        'Authorization': `${token}`,
    ),
})
    ;

};