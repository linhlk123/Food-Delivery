import axios from 'axios';


const api = axios.create({
  baseURL: 'http://localhost:8080/food-delivery',
  timeout: 10000
});

