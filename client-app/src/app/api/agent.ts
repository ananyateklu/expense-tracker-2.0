import axios, { AxiosResponse } from 'axios';
import { Expense } from '../models/expense';
import { TotalExpense } from '../models/totalexpense';
import { TotalIncome } from '../models/totalincome';

const sleep = (delay: number) => {
    return new Promise((resolve) => {
        setTimeout(resolve,delay)
    })
}


axios.defaults.baseURL= 'http://localhost:5000/api';

axios.interceptors.response.use( async response => {
    try {
        await sleep(1000)
        return response;
    } catch (error) {
        console.log(error);
        return Promise.reject(error);
    }
})

const responseBody = <T>(response: AxiosResponse<T>) => response.data;

const requests = {
    get: <T>(url: string) => axios.get<T>(url).then(responseBody),
    del: <T>(url: string) => axios.delete<T>(url).then(responseBody),
    put: <T>(url: string, body: {}) => axios.put<T>(url).then(responseBody),
    post: <T>(url: string, body: {}) => axios.post<T>(url).then(responseBody),
}

const Expenses = {
    list: () => requests.get<Expense[]>('/expenses'),
    delete: (id: string) => axios.delete<void>(`/expenses/${id}`),
    update: (expense: Expense) => axios.put(`/expenses/${expense.id}`, expense),
    create: (expense: Expense) => axios.post<void>('/expenses', expense),
    totalExpense: () => requests.get<TotalExpense[]>('/TotalExpense'),
    totalIncome: () => requests.get<TotalIncome[]>('/TotalIncome')
    
}

const agent = {
    Expenses
}

export default agent;