import axios from 'axios';

export type AuthorType = {
  id: number;
  author_name: string;
  birth_date: string;
};

export async function getAllAuthors(): Promise<AuthorType[]> {
  const response = await axios.get('http://localhost:3030/author', {
    headers: {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IkJlcmF5QGdvb2dsZS5jb20iLCJpYXQiOjE3NDc3MjYwOTYsImV4cCI6MTc0NzcyOTY5Niwic3ViIjoiNCJ9.yxIdCaCLoKA8xz_hmQpqF_tY_sRN3sk7-sCaVa3uGlM`
    }
  });
  return response.data;
}
