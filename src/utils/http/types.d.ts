import { Method, AxiosError, AxiosResponse, AxiosRequestConfig } from "axios";
import { ResultData } from "@/api/interface";
export type resultType = {
  accessToken?: string;
};

export type RequestMethods = Extract<Method, "get" | "post" | "put" | "delete" | "patch" | "option" | "head">;

export interface PureHttpError extends AxiosError {
  isCancelRequest?: boolean;
}

export interface PureHttpResponse extends AxiosResponse {
  config: PureHttpRequestConfig;
}

export interface PureHttpRequestConfig extends AxiosRequestConfig {
  beforeRequestCallback?: (request: PureHttpRequestConfig) => void;
  beforeResponseCallback?: (response: PureHttpResponse) => void;
}

export default class PureHttp {
  request<T>(method: RequestMethods, url: string, param?: AxiosRequestConfig, axiosConfig?: PureHttpRequestConfig): Promise<ResultData<T>>;
  // post<T, P>(url: string, params?: P, config?: PureHttpRequestConfig): Promise<T>;
  // get<T, P>(url: string, params?: P, config?: PureHttpRequestConfig): Promise<T>;
}
