const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const SECRET = 'mein_geheimes_token';

let authors = [
  { id: 1, author_name: 'Goethe', birth_date: '1749-08-28' },
  { id: 2, author_name: 'Schiller', birth_date: '1759-11-10' },
];

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  // Dummy login: Jeder darf rein
  const token = jwt.sign({ email }, SECRET, { expiresIn: '1h' });
  res.json({ token });
});

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  if (!authHeader) return res.sendStatus(401);

  const token = authHeader.split(' ')[1];
  jwt.verify(token, SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

app.get('/author', authenticateToken, (req, res) => {
  res.json(authors);
});

app.post('/author', authenticateToken, (req, res) => {
  const { author_name, birth_date } = req.body;
  const newAuthor = {
    id: authors.length + 1,
    author_name,
    birth_date,
  };
  authors.push(newAuthor);
  res.status(201).json(newAuthor);
});

app.delete('/author/:id', authenticateToken, (req, res) => {
  const id = parseInt(req.params.id);
  authors = authors.filter(a => a.id !== id);
  res.sendStatus(204);
});

app.listen(3030, () => console.log('Server läuft auf http://localhost:3030'));
