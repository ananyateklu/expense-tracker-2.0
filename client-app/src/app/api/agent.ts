import axios, { AxiosResponse } from 'axios';
import { Expense } from '../models/expense';


axios.defaults.baseURL= 'http://localhost:5000/api';

axios.interceptors.response.use(async response => {
    try {
        return response;
    } catch (error) {
        console.log(error);
        return await Promise.reject(error);
    }
})

const responseBody = <T>(response: AxiosResponse<T>) => response.data;

const requests = {
    get: <T>(url: string) => axios.get<T>(url).then(responseBody)
}

const Expenses = {
    list: () => requests.get<Expense[]>('/expenses'),
}

const agent = {
    Expenses
}

export default agent;