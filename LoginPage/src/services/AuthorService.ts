// api.ts
import axios from 'axios';

export type AuthorType = {
  id: number;
  author_name: string;
  birth_date: string;
};

const BASE_URL = 'http://localhost:3030';
let token = '';

// Token setzen und auch in localStorage speichern
export function setToken(t: string) {
  token = t;
  localStorage.setItem('token', t);
}

// Beim Laden das Token aus localStorage lesen (falls vorhanden)
const storedToken = localStorage.getItem('token');
if (storedToken) {
  token = storedToken;
}

// Funktion, um die Auth-Header zu erstellen
const authHeaders = () => ({
  headers: { Authorization: `Bearer ${token}` },
});

// Alle Autoren abrufen
export async function getAllAuthors(): Promise<AuthorType[]> {
  const response = await axios.get(`${BASE_URL}/author`, authHeaders());
  return response.data;
}

// Autor hinzufügen (ohne ID)
export async function addAuthor(author: Omit<AuthorType, 'id'>): Promise<void> {
  await axios.post(`${BASE_URL}/author`, author, authHeaders());
}

// Autor löschen
export async function deleteAuthor(id: number): Promise<void> {
  await axios.delete(`${BASE_URL}/author/${id}`, authHeaders());
}

// Optional: Autor aktualisieren
export async function updateAuthor(author: AuthorType): Promise<void> {
  await axios.put(`${BASE_URL}/author/${author.id}`, author, authHeaders());
}
