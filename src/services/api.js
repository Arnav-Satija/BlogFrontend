import axios from 'axios';


const usersUrl = 'http://localhost:9000';

export const addUser = async (user) => {
    return await axios.post(`${usersUrl}/server/post`, user);
}

export const getUsers = async (user) => {
    return await axios.get(`${usersUrl}/server/get`,user);
}

export const getUser = async (id) => {
    return await axios.get(`${usersUrl}/server/get/${id}`);
}

export const editUser = async (id, user) => {
    return await axios.patch(`${usersUrl}/server/patch/${id}`, user)
}

export const deleteUser = async (id) => {
    return await axios.delete(`${usersUrl}/server/delete/${id}`);
}
