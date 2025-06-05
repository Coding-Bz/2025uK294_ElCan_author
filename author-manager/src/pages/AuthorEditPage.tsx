import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import AxiosInstance from '../Services/AxiosInstance';
import { Formik, Form, Field, ErrorMessage } from 'formik';


interface Author {
  id: number;
  author_name: string;
  birth_date: string;
}

function AuthorEditPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [author, setAuthor] = useState<Author | null>(null);

  useEffect(() => {
    AxiosInstance.get('/author')
      .then(res => {
        const found = res.data.find((a: Author) => a.id === parseInt(id!));
        setAuthor(found ?? null);
      })
      .catch(() => alert('Autoren-Daten konnten nicht geladen werden.'));
  }, [id]);

  if (!author) return <p>Lade Daten...</p>;

  return (
    <div>
      <h2>Autor bearbeiten</h2>
      <Formik
        initialValues={{
          author_name: author.author_name,
          birth_date: author.birth_date,
        }}
        validate={values => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const errors: any = {};
          if (!values.author_name) {
            errors.author_name = 'Name darf nicht leer sein.';
          }
          if (!values.birth_date) {
            errors.birth_date = 'Geburtsdatum ist erforderlich.';
          }
          return errors;
        }}
        onSubmit={async values => {
          try {
            await AxiosInstance.put(`/author/${id}`, {
              ...author,
              author_name: values.author_name,
              birth_date: values.birth_date,
            });
            alert('Autor gespeichert!');
            navigate('/authors');
          } catch {
            alert('Fehler beim Speichern.');
          }
        }}
      >
        <Form>
          <div>
            <label>Name:</label>
            <Field name="author_name" />
            <ErrorMessage name="author_name" component="div"/>
          </div>
          <div>
            <label>Geburtsdatum:</label>
            <Field name="birth_date" type="date" />
            <ErrorMessage name="birth_date" component="div" />
          </div>
          <button type="submit">Speichern</button>
          <button type="button" onClick={() => navigate('/authors')}>Abbrechen</button>
        </Form>
      </Formik>
    </div>
  );
}

export default AuthorEditPage;
