import axios from "axios";

export const api = axios.create({
  baseURL: "https://fakestoreapi.com",
});

// Override timeout default for the library
// Now all requests using this instance will wait 2.5 seconds before timing out
// api.defaults.timeout = 2500; // you could increase this if you want api not to timeout in ms

export const ENDPOINTS = { products: "/products" };
