import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import TennisForm from '../components/TennisForm';

const FormPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [initialData, setInitialData] = useState(null);

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:3001/tenis/${id}`)
        .then(res => setInitialData(res.data))
        .catch(err => console.error('Erro ao buscar o tênis:', err));
    }
  }, [id]);

  const handleSubmit = (data) => {
    const req = id
      ? axios.put(`http://localhost:3001/tenis/${id}`, data)
      : axios.post('http://localhost:3001/tenis', data);

    req.then(() => navigate('/'))
       .catch(err => console.error('Erro ao salvar:', err));
  };

  return (
    <div>
      <h2>{id ? 'Editar Tênis' : 'Cadastrar Novo Tênis'}</h2>
      <TennisForm onSubmit={handleSubmit} initialData={initialData} />
    </div>
  );
};

export default FormPage;
