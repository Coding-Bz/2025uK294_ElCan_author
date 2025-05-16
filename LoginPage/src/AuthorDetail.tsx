import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getAllAuthors } from './services/GetService';
import { deleteAuthor } from './services/DeleteService';
import type { AuthorType } from './services/AddSer';

function AuthorDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [author, setAuthor] = useState<AuthorType | null>(null);

  useEffect(() => {
    if (!id) return;

    const numericId = parseInt(id);
    if (isNaN(numericId)) return;

    getAllAuthors().then((data) => {
      const found = data.find((a) => a.id === numericId);
      setAuthor(found ?? null);
    });
  }, [id]);

  const handleDelete = async () => {
    if (!id) return;

    const numericId = parseInt(id);
    if (isNaN(numericId)) return;

    await deleteAuthor(numericId);
    navigate('/');
  };

  if (!author) return <p>Lade Autorendaten...</p>;

  return (
    <div>
      <h2>Detailseite für {author.author_name}</h2>
      <p>ID: {author.id}</p>
      <p>Geburtsdatum: {author.birth_date}</p>
      <button onClick={handleDelete}>Autor*in löschen</button>
      <button onClick={() => navigate('/')}>Zurück</button>
    </div>
  );
}

export default AuthorDetail;
