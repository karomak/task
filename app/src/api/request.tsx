import axios from "axios";
import { API_BASE_URL } from "../config";

export interface Transaction {
  id: number;
  amount: number;
  beneficiary: string;
  account: string;
  address: string;
  date: string;
  description: string;
}

export const request = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-type": "application/json",
  },
});

async function getAll(): Promise<Transaction[]> {
  const response = await request.get<Transaction[]>("/transactions");
  return response.data;
}

async function remove(id: number): Promise<void> {
  await request.delete<any>(`/transactions/${id}`);
}

async function add(data: Transaction): Promise<void> {
  await request.post<any>(`/transactions`, data);
}

const TransactionService = {
  getAll,
  remove,
  add,
};

export default TransactionService;
