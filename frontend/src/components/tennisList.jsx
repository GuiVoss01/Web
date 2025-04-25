import React from 'react';
import { Link } from 'react-router-dom';

const TennisList = ({ tenis }) => {
  if (!tenis.length) return <p>Nenhum tênis cadastrado ainda.</p>;

  return (
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {tenis.map(item => (
        <li key={item.id} style={{ marginBottom: '1rem', background: '#333', padding: '1rem', borderRadius: '10px' }}>
          <strong>{item.nome}</strong> — {item.marca}
          <div style={{ marginTop: '0.5rem' }}>
          <Link to={`/tenis/${item.id}`}>Detalhes</Link>
          <Link to={`/tenis/editar/${item.id}`}>Editar</Link>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TennisList;
