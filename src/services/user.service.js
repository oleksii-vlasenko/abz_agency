import axios from "axios";

export const getUser = ({id}) => {
    return axios.get(`https://frontend-test-assignment-api.abz.agency/api/v1/users/${id}`);
};

export const getUsers = ({page, count}) => {
    return axios.get(`https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${page}&count=${count}`);
};

export const createUser = ({token, body}) => {
    return axios.post(`https://frontend-test-assignment-api.abz.agency/api/v1/users`, JSON.stringify(body), {
        headers: {
            "Token": token,
            'Content-Type': 'multipart/form-data'
        }
    })
};
