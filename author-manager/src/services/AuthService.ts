import axios from 'axios';

export async function login(email: string, password: string) {
  const response = await axios.post('http://localhost:3030/login', {
    email,
    password,
  });
  return response.data; 
}
