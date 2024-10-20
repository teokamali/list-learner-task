import type { AxiosRequestConfig, AxiosResponse } from "axios";
export interface IRequestOption<D> extends AxiosRequestConfig<D> {}

export interface IResponse<T> extends AxiosResponse<T> {}

export interface BaseResponse<T> {
   status: string;
   message: string;
   data: T;
}
export interface IErrorResponse {
   response: {
      data: {
         code: number;
         message: string;
      };
   };
}
