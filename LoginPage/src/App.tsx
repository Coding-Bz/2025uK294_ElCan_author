import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthorList from './AuthorList';
import AuthorDetail from './AuthorDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthorList />} />
        <Route path="/author/:id" element={<AuthorDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
