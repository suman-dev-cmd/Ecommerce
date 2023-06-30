/** @format */

import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

const api: AxiosInstance = axios.create({
  baseURL: "http://localhost:4000/api/v1",
  headers: {
    "Content-Type": "application/json", // Set the default Content-Type header
    // Additional headers if required
  },
});

api.interceptors.request.use(
  (config: any) => {
    // Modify the config object if needed (e.g., add headers, tokens)
    // Check if the request should be authenticated
    const isAuthenticated = false;

    if (isAuthenticated) {
      // Add authentication headers
      config.headers["Authorization"] = "Bearer token";
    }

    return config;
  },
  (error: any) => {
    // Handle request error
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response: AxiosResponse) => {
    // Modify the response object if needed
    return response;
  },
  (error: any) => {
    // Handle response error
    return Promise.reject(error);
  }
);

export const makeHttpRequest = async <T>(
  url: string,
  method: AxiosRequestConfig["method"] = "GET",
  data: AxiosRequestConfig["data"] = null
): Promise<T> => {
  try {
    const response = await api({
      method,
      url,
      data,
    });
    return response.data;
  } catch (error) {
    // Handle error
    console.error("HTTP request error:", error);
    throw new Error("HTTP request error");
  }
};
