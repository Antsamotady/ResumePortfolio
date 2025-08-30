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
    <div className="form-page">
      <div className="app-container">
        <div className="contact-container">
          <div className="submission-page">
            <div className="form-container form-left-side">
              <div className="name-mail-submit-title">Please register</div>
              <form onSubmit={handleSubmit}>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Name"
                  required
                  className="rounded-0 form-control"
                />
                <input
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Email"
                  required
                  className="rounded-0 form-control"
                />
                <button className="form-email-btn" type="submit">Submit</button>
              </form>
            </div>
            <div className="form-right-side">
              <div className="name-mail-submit-title">Thank you</div>
              {submissions.length === 0 ? (
                <p>No submissions yet.</p>
              ) : (
                <ul>
                  {submissions.slice().reverse().map((s) => (
                    <li key={s.id}>{s.name} | {s.email}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Submissions;
