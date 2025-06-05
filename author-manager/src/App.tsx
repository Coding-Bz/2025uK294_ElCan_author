import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import AuthorListPage from './pages/AuthorListPage';
import AuthorDetailPage from './pages/AuthorDetailPage';
import AuthorEditPage from './pages/AuthorEditPage';
import AuthorAdd from './pages/AuthorAdd';

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
