import axios from "axios";

const API = "http://localhost:5000/products";

export const getProducts = () => {
  return axios.get(API);
};

export const addProduct = (product) => {
  return axios.post(API, product);
};

export const updateProduct = (id, product) => {
  return axios.put(`${API}/${id}`, product);
};

export const deleteProduct = (id) => {
  return axios.delete(`${API}/${id}`);
};

export const getLowStockProducts = () => {
  return axios.get(`${API}/low-stock`);
};