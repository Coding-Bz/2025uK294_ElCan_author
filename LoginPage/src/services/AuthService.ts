import axios from 'axios';

export async function login(email: string, password: string): Promise<string> {
  const response = await axios.post('http://localhost:3030/login', {
    email,
    password,
  });

  console.log("Antwort vom Server:", response.data); // Muss { token: '...' } sein

  return response.data.token; // WICHTIG!!!
}
