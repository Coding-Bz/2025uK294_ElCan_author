import axios from 'axios';

export type AuthorType = {
  id: number;
  author_name: string;
  birth_date: string;
};

const BASE_URL = 'http://localhost:3030';
let token = '';

export function setToken(t: string) {
  token = t;
}

const authHeaders = () => ({
  headers: { Authorization: `Bearer ${token}` },
});

export async function getAllAuthors(): Promise<AuthorType[]> {
  const response = await axios.get(`${BASE_URL}/author`, authHeaders());
  return response.data;
}

export async function addAuthor(author: Omit<AuthorType, 'id'>): Promise<void> {
  await axios.post(`${BASE_URL}/author`, author, authHeaders());
}

export async function deleteAuthor(id: number): Promise<void> {
  await axios.delete(`${BASE_URL}/author/${id}`, authHeaders());
}
