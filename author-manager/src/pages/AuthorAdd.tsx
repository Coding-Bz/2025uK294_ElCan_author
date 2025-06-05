import { useNavigate } from 'react-router-dom';
import AxiosInstance from '../services/AxiosInstance';
import { Formik, Form, Field, ErrorMessage } from 'formik';



function AuthorAddPage() {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Autor erstellen</h2>
      <Formik
        initialValues={{
          author_name: "",
          birth_date: "",
        }}
        validate={ (values: {author_name:string, birth_date: string}) => {
          const errors: {author_name?:string, birth_date?: string} = {};
          if (!values.author_name) {
            errors.author_name = 'Name darf nicht leer sein.';
          }
          if (!values.birth_date) {
            errors.birth_date = 'Geburtsdatum ist erforderlich.';
          }
          return errors;
        }}
        onSubmit={async (values, {setSubmitting}) => {
            const response = await AxiosInstance.post('/author', {
              author_name: values.author_name,
              birth_date: values.birth_date,
            });
            alert('Autor gespeichert!');
            navigate('/authors/');
            setSubmitting(false);
            console.log(values);
            return response.data; 
        }}
      >
        {({values, handleChange, isSubmitting, isValid}) => (
        <Form>
          <div>
            <label>Name:</label>
            <Field name="author_name" onChange={handleChange} value={values.author_name}/>
            <ErrorMessage name="author_name" component="div"/>
          </div>
          <div>
            <label>Geburtsdatum:</label>
            <Field name="birth_date" type="date" onChange={handleChange} value={values.birth_date } />
            <ErrorMessage name="birth_date" component="div" />
          </div>
          <button type="submit" disabled={isSubmitting || !isValid}>Speichern</button>
          <button type="button" onClick={() => navigate('/authors')}>Abbrechen</button>
        </Form>)}
      </Formik>
    </div>
  );
}

export default AuthorAddPage; 