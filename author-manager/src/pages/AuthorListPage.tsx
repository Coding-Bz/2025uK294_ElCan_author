import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AxiosInstance from '../services/AxiosInstance';

interface Author {
  id: number;
  author_name: string;
  birth_date: string;
}

function AuthorListPage() {
  const [authors, setAuthors] = useState<Author[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    AxiosInstance.get('/author')
      .then(res => setAuthors(res.data))
      .catch(() => setError('Nicht autorisiert oder Fehler beim Laden.'));
  }, []);

  return (
    <div>
      <h2>Autorenliste</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ul>
        {authors.map(a => (
          <li key={a.id}>
            <Link to={`/author/${a.id}`}>{a.author_name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AuthorListPage;
