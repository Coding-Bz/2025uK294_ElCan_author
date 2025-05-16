import { useEffect, useState } from 'react';
import { getAllAuthors } from './services/GetService';
import { deleteAuthor } from './services/DeleteService';
import { addAuthor } from './services/AddSer';
import type { AuthorType } from './services/AddSer';
import { useNavigate } from 'react-router-dom';

function AuthorList() {
  const [authors, setAuthors] = useState<AuthorType[]>([]);
  const [newAuthorName, setNewAuthorName] = useState('');
  const [newAuthorDate, setNewAuthorDate] = useState('');
  const navigate = useNavigate();

  const loadAuthors = async () => {
    const data = await getAllAuthors();
    setAuthors(data);
  };

  useEffect(() => {
    loadAuthors();
  }, []);

  const handleAddAuthor = async () => {
    if (!newAuthorName || !newAuthorDate) return;
    await addAuthor({ author_name: newAuthorName, birth_date: newAuthorDate });
    setNewAuthorName('');
    setNewAuthorDate('');
    loadAuthors();
  };

  const handleDelete = async (id : number) => {
    await deleteAuthor(id);
    loadAuthors();
  };

  return (
    <>
      <h1>Autor*innen</h1>
      <input value={newAuthorName} onChange={(e) => setNewAuthorName(e.target.value)} placeholder="Name" />
      <input type="date" value={newAuthorDate} onChange={(e) => setNewAuthorDate(e.target.value)} />
      <button onClick={handleAddAuthor}>Hinzufügen</button>

      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        {authors.map((author) => (
          <div key={author.id} style={{ border: '1px solid #ccc', padding: '1rem' }}>
            <h3>{author.author_name}</h3>
            <p>Geboren: {author.birth_date}</p>
            <button onClick={() => navigate(`/author/${author.id}`)}>Info</button>
            <button onClick={() => handleDelete(author.id)}>Löschen</button>
          </div>
        ))}
      </div>
    </>
  );
}

export default AuthorList;
