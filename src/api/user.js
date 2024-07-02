import axios from 'axios';

const API_URL = 'http://localhost:3000/api'; // Cambia esto a tu URL de API

export const registerUser = async (userData) => {
  const response = await axios.post(`${API_URL}/auth/`, userData);
  return response.data;
};

export const getRoles = async () => {
  const response = await axios.get(`${API_URL}/roles`);
  return response.data;
};

export const getSchools = async () => {
  const response = await axios.get(`${API_URL}/schools`);
  return response.data;
};
