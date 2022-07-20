import axios from "axios";

export default axios.create({
    baseURL: 'http://192.168.100.228:4000',
    headers: {
        "Content-type": "application/json"
    }
})