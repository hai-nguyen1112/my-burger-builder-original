import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://react-my-burger-24c89.firebaseio.com/',
});

export default axiosInstance;
