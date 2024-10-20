import type { RootState } from "@/store/store";
import type { BaseQueryFn } from "@reduxjs/toolkit/query";
import axios, {
   type InternalAxiosRequestConfig,
   type AxiosError,
   type AxiosInstance,
   type AxiosRequestConfig,
   type AxiosResponse,
} from "axios";
import { toast } from "react-toastify";

export const axiosInstance: AxiosInstance = axios.create({ baseURL: process.env.BASE_URL });
axiosInstance.interceptors.request.use((config: InternalAxiosRequestConfig) => {
   // const access_token = getCookie('session')
   // if (access_token) {
   //   config.headers.set({
   //     authorization: `Bearer ${access_token}`,
   //     'Accept-Language': 'fa',
   //     'Content-Type': 'application/json',
   //     Accept: 'application/json',
   //     ...config.headers,
   //   })
   // } else {
   //   config.headers.set({
   //     'Accept-Language': 'fa',
   //     'Content-Type': 'application/json',
   //     Accept: 'application/json',
   //     ...config.headers,
   //   })
   // }

   return config;
});

axiosInstance.interceptors.response.use(
   (res: AxiosResponse) => {
      return res;
   },
   (error: AxiosResponse) => {
      return Promise.reject(error);
   },
);

const axiosBaseQuery =
   (
      { baseUrl }: { baseUrl: string } = { baseUrl: "" },
   ): BaseQueryFn<
      {
         url: string;
         headers?: { "Content-Type"?: string };
         sendAuthorization?: boolean;
         method: AxiosRequestConfig["method"];
         data?: AxiosRequestConfig["data"];
         params?: AxiosRequestConfig["params"];
      },
      unknown,
      unknown
   > =>
   async ({ url, headers = {}, sendAuthorization = true, method, data, params }, { getState }) => {
      try {
         const token: string | null = (getState() as RootState).auth.token || null;
         const auth = sendAuthorization ? { Authorization: `Bearer ${token}` } : {};
         const API_URL = baseUrl + url;
         const result = await axiosInstance({
            url: API_URL,
            method,
            data,
            params,
            headers: {
               ...auth,
               ...headers,
            },
         });
         return result;
         // return {
         //   data: {
         //     data: result.data.data,
         //     message: result.data.message,
         //     status: result.data.status,
         //   },
         // }
      } catch (axiosError) {
         const err = axiosError as AxiosError<{ data: null; message: string[] }>;
         if (err.response?.status !== 401) {
            toast.error(err.response?.data.message[0]);
         }
         toast.error(err.response?.data.message);
         throw err;
      }
   };

export default axiosBaseQuery;
