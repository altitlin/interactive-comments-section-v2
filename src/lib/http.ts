import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';

const instance = axios.create({
  baseURL: process.env.BASE_URL,
})

export const httpRequest = async <T>({
  method = 'get',
  ...rest
}: AxiosRequestConfig) => {
  try {
    const response: AxiosResponse<T> = await instance({
      method,
      ...rest,
    })

    return response.data
  } catch (error) {
    return Promise.reject((error as AxiosError<T>).response)
  }
}
