import { Routes, Route } from 'react-router-dom';
import LoginPage from './Pages/LoginPage';
import AuthorListPage from './Pages/AuthorListPage';
import AuthorDetailPage from './Pages/AuthorDetailPage';
import AuthorEditPage from './Pages/AuthorEditPage';
import AuthorAdd from './Pages/AuthorAdd';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/authors" element={<AuthorListPage />} />
      <Route path="/author/:id" element={<AuthorDetailPage />} />
      <Route path="/author/:id/edit" element={<AuthorEditPage />} />
      <Route path="/authors/add" element={<AuthorAdd />} />
    </Routes>
  );
}

export default App;
