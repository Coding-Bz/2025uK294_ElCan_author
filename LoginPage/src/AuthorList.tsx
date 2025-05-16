/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';
import axios from 'axios';

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
      try {
        const token = localStorage.getItem('token'); // Token aus Login holen

        const response = await axios.get('http://localhost:3030/author', {
          headers: {
            Authorization: `Bearer ${token}`, // Token im Header mitsenden
          },
        });

        console.log('Antwort vom Server:', response.data);
        setAuthors(response.data); // direktes Array, kein .authors nötig
      } catch (err: any) {
        if (err.response && err.response.status === 401) {
          setError('Nicht autorisiert. Bitte melde dich erneut an.');
        } else {
          setError('Ein Fehler ist aufgetreten beim Laden der Autoren.');
        }

        console.error('AxiosError:', err);
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
