import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';

export enum HttpMethods {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE'
}

const instance = axios.create({
  baseURL: process.env.BASE_URL,
})

export const httpRequest = async <T>({
  method = HttpMethods.GET,
  params,
  ...rest
}: AxiosRequestConfig): Promise<T> => {
  try {
    const response: AxiosResponse<T> = await instance({
      method,
      params,
      ...rest,
    })

    return response.data
  } catch (error) {
    return Promise.reject((error as AxiosError<T>).response)
  }
}
