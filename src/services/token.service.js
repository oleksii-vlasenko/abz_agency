import axios from "axios";

export const getToken = () => {
    return axios.get('https://frontend-test-assignment-api.abz.agency/api/v1/token');
};
