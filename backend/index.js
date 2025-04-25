import express from 'express';
import cors from 'cors';
import tennisRoutes from '../routes/tennisRoutes.js'; 
import { db } from './db.js';

const app = express();
const PORT = 3001;

// Middlewares
app.use(cors());
app.use(express.json());

// Conexão com o MySQL
db.connect(err => {
  if (err) {
    console.error('Erro ao conectar ao MySQL:', err);
    return;
  }
  console.log('✅ Conectado ao MySQL');
});

// Rotas
app.use('/api/tenis', tennisRoutes); // Prefixo para todas as rotas de tênis

// Rota de teste
app.get('/', (req, res) => {
  res.send('API do CRUD de Tênis está operacional!');
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});