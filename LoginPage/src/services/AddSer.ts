import axios from 'axios';


export type AuthorType = {
  id: number;
  author_name: string;
  birth_date: string;
};

export async function addAuthor(newAuthor: { author_name: string; birth_date: string }): Promise<AuthorType> {
  const response = await axios.post(
    'http://localhost:3030/author',
    newAuthor,
    {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IkJlcnJhQGdvb2dsZS5jb20iLCJpYXQiOjE3NDczNzcxMTYsImV4cCI6MTc0NzM4MDcxNiwic3ViIjoiMyJ9.SQvYOmXBknH9LWpkVs4AktV87ehRONDYOZd4uVy7xcw`,
        'Content-Type': 'application/json',
      },
    }
  );
  return response.data; 
}
