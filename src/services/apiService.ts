import axios from "axios";

export const API_BASE_URL = import.meta.env.PROD
  ? "/api"
  : "https://localhost:8080/api";
// Create an Axios instance
const apiService = axios.create({
  baseURL: API_BASE_URL,
});

export default apiService;
