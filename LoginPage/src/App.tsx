import { Routes, Route } from 'react-router-dom';
import LoginPage from './LoginPage';
import AuthorList from './AuthorList';
import AuthorDetail from './AuthorDetail';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/authors" element={<AuthorList />} />
      <Route path="/author/:id" element={<AuthorDetail />} />
    </Routes>
  );
}

export default App;
