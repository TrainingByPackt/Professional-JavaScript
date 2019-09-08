function getData(transport) {
  return transport('https://hello-world-micro.glitch.me').then(res => res.text())
}

// in some server-side code
const axios = require('axios');
const axiosWithServerHeaders = axios.create({
  headers: { Authorization: 'Server-side allowed' }
});
getData(axiosWithServerHeaders);

// in some client-side code
import axios from 'axios';
const axiosWithCookies = axios.create({
  withCredentials: true
})
getData(axiosWithCookies);
