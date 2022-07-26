import axios from "axios";

export default axios.create({
    baseURL: 'http://172.20.10.4:4000',
    headers: {
        "Content-type": "application/json"
    }
})