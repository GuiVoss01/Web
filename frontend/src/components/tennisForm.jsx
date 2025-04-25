import React, { useState, useEffect } from 'react';

const TennisForm = ({ onSubmit, initialData }) => {
  const [form, setForm] = useState({
    nome: '',
    marca: '',
    tamanho: '',
    cor: '',
    preco: ''
  });

  useEffect(() => {
    if (initialData) {
      setForm(initialData);
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validação simples
    if (!form.nome || !form.marca || !form.tamanho || !form.cor || !form.preco) {
      alert('Por favor, preencha todos os campos!');
      return;
    }
    onSubmit(form);
  };

  return (
    <form onSubmit={handleSubmit} className="tennis-form">
      <div className="form-group">
        <label>Nome do Tênis</label>
        <input type="text" name="nome" value={form.nome} onChange={handleChange} required />
      </div>
      
      <div className="form-group">
        <label>Marca</label>
        <input type="text" name="marca" value={form.marca} onChange={handleChange} required />
      </div>
      
      <div className="form-group">
        <label>Tamanho</label>
        <input type="number" name="tamanho" value={form.tamanho} onChange={handleChange} required />
      </div>
      
      <div className="form-group">
        <label>Cor</label>
        <input type="text" name="cor" value={form.cor} onChange={handleChange} required />
      </div>
      
      <div className="form-group">
        <label>Preço (R$)</label>
        <input type="number" step="0.01" name="preco" value={form.preco} onChange={handleChange} required />
      </div>
      
      <button type="submit" className="submit-btn">Salvar Tênis</button>
    </form>
  );
};

export default TennisForm;