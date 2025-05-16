import axios from 'axios';


export type AuthorType = {
  id: number;
  author_name: string;
  birth_date: string;
};


export async function deleteAuthor(id: number): Promise<void> {
  await axios.delete(`http://localhost:3030/author/${id}`, {
    headers: {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IkJlcnJhQGdvb2dsZS5jb20iLCJpYXQiOjE3NDczNzcxMTYsImV4cCI6MTc0NzM4MDcxNiwic3ViIjoiMyJ9.SQvYOmXBknH9LWpkVs4AktV87ehRONDYOZd4uVy7xcw`
    }
  });
}
