import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { getToken } from './services/AuthorService';

interface Author {
  id: number;
  author_name: string;
  birth_date: string;
}

const AuthorList: React.FC = () => {
  const [authors, setAuthors] = useState<Author[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAuthors = async () => {
      const token = getToken();
      console.log("Verwendeter Token in fetchAuthors:", token);
      try {
        const response = await axios.get('http://localhost:3030/author', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setAuthors(response.data);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (err: any) {
        if (err.response && err.response.status === 401) {
          setError('Nicht autorisiert. Bitte erneut einloggen.');
        } else {
          setError('Fehler beim Laden der Autoren.');
        }
        console.error('Axios Fehler:', err);
      }
    };

    fetchAuthors();
  }, []);

  return (
    <div>
      <h2>Autorenliste</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ul>
        {authors.map((author) => (
          <li key={author.id}>
            {author.author_name} – geboren am {author.birth_date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AuthorList;
