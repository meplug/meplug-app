import axios from "axios";

export default axios.create({
    baseURL: 'http://10.84.11.191:4000',
    headers: {
        "Content-type": "application/json"
    }
})