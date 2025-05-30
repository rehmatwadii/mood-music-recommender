import React from 'react';
import ReactDOM from 'react-dom/client';

const App = () => <h1>Welcome to Mood Music Recommender</h1>;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

app.get('/health', (req, res) => {
  res.status(200).send('OK');
});
