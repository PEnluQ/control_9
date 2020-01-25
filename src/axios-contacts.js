import axios from 'axios';

const axiosContact = axios.create({
    baseURL:'https://contact-penluq.firebaseio.com/'
});

export default axiosContact;