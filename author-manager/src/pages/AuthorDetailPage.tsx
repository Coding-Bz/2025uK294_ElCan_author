import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import AxiosInstance from '../Services/AxiosInstance';

interface Author {
  id: number;
  author_name: string;
  birth_date: string;
}

function AuthorDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [author, setAuthor] = useState<Author | null>(null);

  useEffect(() => {
    AxiosInstance.get('/author')
      .then(res => {
        const found = res.data.find((a: Author) => a.id === parseInt(id!));
        setAuthor(found ?? null);
      })
      .catch(() => {
        alert('Nicht autorisiert oder Autor nicht gefunden.');
        navigate('/');
      });
  }, [id, navigate]);

  const handleDelete = async () => {
    try {
      await AxiosInstance.delete(`/author/${id}`);
      navigate('/authors');
    } catch {
      alert('Fehler beim Löschen.');
    }
  };

  if (!author) return <p>Lade Daten...</p>;

  return (
    <div>
      <h2>{author.author_name}</h2>
      <p>Geboren am: {author.birth_date}</p>
      <p>Id: {author.id}</p>
      <button onClick={handleDelete}>Löschen</button>
      <button onClick={() => navigate('/authors')}>Zurück</button>
      <button onClick={() => navigate(`/author/${id}/edit`)}>Bearbeiten</button>
    </div>
  );
}

export default AuthorDetailPage;
