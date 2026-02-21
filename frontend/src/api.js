import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api"
});

export const fetchSymptoms = () => API.get("/symptoms");
export const predictDisease = (symptoms) =>
  API.post("/predict", { symptoms });
