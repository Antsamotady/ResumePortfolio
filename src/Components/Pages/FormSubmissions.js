import React, { useState, useEffect } from 'react';
import '../../Stylesheets/form-submissions.css';

const Submissions = () => {
  const [form, setForm] = useState({ name: '', email: '' });
  const [submissions, setSubmissions] = useState([]);

  const fetchSubmissions = async () => {
    try {
      const res = await fetch('/api/submissions');
      const data = await res.json();

      if (Array.isArray(data)) {
        setSubmissions(data);
      } else {
        setSubmissions([]); // fallback if data is not an array
      }
    } catch (err) {
      console.error("Fetch failed:", err);
      setSubmissions([]);
    }
  };

  useEffect(() => {
    fetchSubmissions();
  }, []);

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await fetch('/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });

      if (res.ok) {
        setForm({ name: '', email: '' });
        fetchSubmissions();
      }
    } catch (err) {
      console.error("Submit failed:", err);
    }
  };

  return (
    <div className="submission-page">
      <div className="form-container">
        <h2>Submit Info</h2>
        <form onSubmit={handleSubmit}>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Name"
            required
          />
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
            required
          />
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="data-container">
        <h2>Submissions</h2>
        {submissions.length === 0 ? (
          <p>No submissions yet.</p>
        ) : (
          <ul>
            {submissions.map((s, idx) => (
              <li key={idx}>{s.name} - {s.email}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Submissions;
