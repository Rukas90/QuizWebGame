import axios, { AxiosResponse, AxiosRequestConfig, AxiosError } from "axios"
import { Response } from "./Response"
import { config } from "@/types/AppConfig"

axios.defaults.withCredentials = true

export const IDENTITY_API = config.IDENTITY_API
export const GAME_API     = config.GAME_API

export const BuildApiUrl = (api: string, url: string): string => {
    const path = url.startsWith('/') ? url : `/${url}`
    
    if (!api) {
        console.error('api url is not defined');
        return path
    }
    
    return `${(api)}${path}`
}

export const GET = async <T = any>(api: string, url: string, _?: any, config: AxiosRequestConfig = {}): Promise<AxiosResponse<T>> => {
    try {
        return axios.get<T>(BuildApiUrl(api, url), config)
    } catch (error) {
        return GetError<T>(error as Error)
    }
}

export const POST = async <T = any>(api: string, url: string, data?: any, config: AxiosRequestConfig = {}): Promise<AxiosResponse<T>> => {  
    try {
        return axios.post<T>(BuildApiUrl(api, url), data, config)
    } catch (error) {
        return GetError<T>(error as Error)
    }
}

export const PUT = async <T = any>(api: string, url: string, data?: any, config: AxiosRequestConfig = {}): Promise<AxiosResponse<T>> => {
    try {
        return axios.put<T>(BuildApiUrl(api, url), data, config)
    } catch (error) {
        return GetError<T>(error as Error)
    }
}

export const DELETE = async <T = any>(api: string, url: string, _?: any, config: AxiosRequestConfig = {}): Promise<AxiosResponse<T>> => {
    try {
        return axios.delete<T>(BuildApiUrl(api, url), config)
    } catch (error) {
        return GetError<T>(error as Error)
    }
}

export const PATCH = async <T = any>(api: string, url: string, data?: any, config: AxiosRequestConfig = {}): Promise<AxiosResponse<T>> => {
    try {
        return axios.patch<T>(BuildApiUrl(api, url), data, config)
    } catch (error) {
        return GetError<T>(error as Error)
    } 
}
export const MAKE_REQUEST = async (
    func: (api: string, url: string, data: any, config: AxiosRequestConfig) => Promise<AxiosResponse<any>>,
    api: string,
    path: string,
    data: any = {},
    config: AxiosRequestConfig = {}
    
): Promise<Response> => {
    const fullConfig = SETUP_CONFIG(config)
    let response;
    try {
        response = await func(api, path, data, fullConfig)
        
        const success = response.status >= 200 && response.status < 300
        return success ? {
            success: true,
            data:    response.data
        } : {
            success: false,
            error:   response.data.error,
            status:  response.status
        }
    } catch (error) {
        return {
            success: false,
            error:   response ? response.data.error : (error as Error).message,
            status:  response ? response.status : 500
        };
    }
}

export const SETUP_CONFIG = (config: AxiosRequestConfig = {}): AxiosRequestConfig => {
  const headers = {
    "Content-Type": "application/json",
    ...(window.csrfToken ? { "X-CSRF-TOKEN": window.csrfToken } : {}),
    ...config.headers
  };
  return {
    ...config,
    withCredentials: true,
    timeout: config.timeout ?? 5000,
    headers
  }
}

const GetError = <T = any>(error: Error) : AxiosResponse<T> => {
    
    const axiosError = error as AxiosError<T, any>

    if (axiosError && axiosError.response) {
        return axiosError.response
    }
    throw error
}