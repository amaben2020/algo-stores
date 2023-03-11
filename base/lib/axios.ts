import axios from "axios";

export const api = axios.create({
  baseURL: "https://fakestoreapi.com",
});

export const ENDPOINTS = { products: "/products" };
