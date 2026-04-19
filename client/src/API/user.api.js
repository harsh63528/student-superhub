
import api from "./axios.api";

export const registerUser=async(userData)=> {
    try {
        const response = await api.post('users/register', userData);
        return response.data;
    } catch (error) {
        return { error: error.response ? error.response.data : 'Network error' };
    }
}

export const loginUser=async(credentials)=>{
    try {
        const response = await api.post('users/login', credentials);
        return response.data;
    } catch (error) {
        return { error: error.response ? error.response.data : 'Network error' };
    }
}

export const checkAccount=async()=>{
    try {
        const response = await api.get('users/profile');
        return response.data;
    } catch (error) {
        return { error: error.response ? error.response.data : 'Network error' };
    }
}
