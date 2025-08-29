const express = require('express');
const fs = require('fs');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 5000;
const FILE_PATH = path.join(__dirname, '..', 'submissions.txt');

app.use(cors());
app.use(express.json());

// Handle POST /api/submit
app.post('/api/submit', (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required' });
  }

  const entry = `${name}, ${email}\n`;
  fs.appendFile(FILE_PATH, entry, err => {
    if (err) return res.status(500).json({ error: 'Failed to write to file' });
    res.status(200).json({ message: 'Submission saved' });
  });
});

// Handle GET /api/submissions
app.get('/api/submissions', (req, res) => {
  fs.readFile(FILE_PATH, 'utf8', (err, data) => {
    if (err || !data.trim()) {
      return res.json([]); // Always return array
    }

    const entries = data.trim().split('\n').map(line => {
      const [name, email] = line.split(',').map(part => part.trim());
      return { name, email };
    });

    res.json(entries);
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
