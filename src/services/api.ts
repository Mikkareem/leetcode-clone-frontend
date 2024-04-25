import axios from "axios"

const BASE_URL = "http://localhost:8080"
const axiosInstance = axios.create({ baseURL: BASE_URL })

axiosInstance.interceptors.request.use(
    config => {
        // Anything with the status 2xx are fall in this method
        return config
    },
    error => {
        // Anything outside the range of 2xx are fall in this method
        return Promise.reject(error)
    }
)


export const runCode = async (token: string, data: { code: string, problemId: string }) => {
    let response = await axiosInstance.post<string>(
        "run/code", 
        JSON.stringify(data),
        {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        }
    )
    return response.data
}