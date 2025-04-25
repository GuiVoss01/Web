import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import FormPage from './pages/FormPage';
import DetailPage from './pages/DetailPage';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <Header />
      <main style={{ padding: '20px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tenis/novo" element={<FormPage />} />
          <Route path="/tenis/editar/:id" element={<FormPage />} />
          <Route path="/tenis/:id" element={<DetailPage />} />
        </Routes>
      </main>
    </Router>
  );
}
