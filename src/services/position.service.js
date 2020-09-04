import axios from "axios";

export const getPositions = () => {
    return axios.get('https://frontend-test-assignment-api.abz.agency/api/v1/positions');
};
