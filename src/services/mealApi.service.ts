import axios from "axios";

const baseUrl = "https://www.themealdb.com/api/json/v1/1";

export const mealApi = axios.create({
  baseURL: baseUrl,
  timeout: 1000,
});
