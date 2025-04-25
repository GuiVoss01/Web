import React, { useEffect, useState } from 'react';
import TennisList from '../components/TennisList';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Home = () => {
  const [tenis, setTenis] = useState([]);

  const fetchTenis = () => {
    axios.get('http://localhost:3001/tenis')
      .then(res => setTenis(res.data))
      .catch(err => console.error('Erro ao buscar tênis:', err));
  };

  useEffect(() => {
    fetchTenis();
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3001/tenis/${id}`)
      .then(() => {
        fetchTenis(); // Recarrega a lista após deletar
      })
      .catch(err => console.error('Erro ao excluir:', err));
  };

  return (
    <div className="home-container">
      <h2>Lista de Tênis</h2>
      <Link className="add-btn" to="/novo">+ Adicionar Novo Tênis</Link>
      <TennisList tenis={tenis} onDelete={handleDelete} />
    </div>
  );
};

export default Home;