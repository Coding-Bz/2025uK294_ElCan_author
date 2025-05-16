import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getAllAuthors, deleteAuthor } from './services/AuthorService';
import type { AuthorType } from './services/AuthorService';

function AuthorDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [author, setAuthor] = useState<AuthorType | null>(null);

  useEffect(() => {
    if (!id) return;
    getAllAuthors().then((list) => {
      const found = list.find((a) => a.id === parseInt(id));
      setAuthor(found ?? null);
    });
  }, [id]);

  async function handleDelete() {
    if (!id) return;
    await deleteAuthor(parseInt(id));
    navigate('/authors');
  }

  if (!author) return <p>Autor*in wird geladen...</p>;

  return (
    <div>
      <h2>{author.author_name}</h2>
      <p>Geboren: {author.birth_date}</p>
      <button onClick={handleDelete}>Löschen</button>
      <button onClick={() => navigate('/authors')}>Zurück</button>
    </div>
  );
}

export default AuthorDetail;
