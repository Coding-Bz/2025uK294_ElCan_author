export function setToken(token: string) {
  console.log("TOKEN gespeichert:", token);
  localStorage.setItem('token', token);
}

export function getToken(): string | null {
  const token = localStorage.getItem('token');
  console.log("TOKEN geladen:", token);
  return token;
}
