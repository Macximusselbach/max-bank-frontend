const axios = require("axios");

const api = axios.create({
    baseURL: 'http://localhost:8080/client'
});

module.exports = api;