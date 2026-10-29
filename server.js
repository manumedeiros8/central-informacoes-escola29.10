
import express from 'express';

const app = express();
const PORT = 3000;

// GET / - Página inicial
app.get('/', (req, res) => {
  res.send('Bem-vindo à Central de Informações da Escola!');
});

// GET /status - Estado do servidor
app.get('/status', (req, res) => {
  res.json({
    status: 'online',
    mensagem: 'O servidor está funcionando corretamente.'
  });
});

// GET /escola - Informações da instituição
app.get('/escola', (req, res) => {
  res.json({
    nome: 'Escola Técnica Futuro',
    cidade: 'São Paulo',
    tipo: 'Ensino Técnico'
  });
});

// GET /cursos - Cursos disponíveis
app.get('/cursos', (req, res) => {
  const cursos = [
    { id: 1, nome: 'Desenvolvimento de Sistemas' },
    { id: 2, nome: 'Redes de Computadores' },
    { id: 3, nome: 'Administração' }
  ];

  res.json(cursos);
});

// GET /professor - Informações do professor
app.get('/professor', (req, res) => {
  res.json({
    nome: 'Carlos Oliveira',
    disciplina: 'Programação Back-End'
  });
});

// GET /ajuda - Orientações sobre as rotas
app.get('/ajuda', (req, res) => {
  res.send(
    'Rotas disponíveis:\n' +
    '/ - Página inicial da escola.\n' +
    '/status - Verifica se o servidor está online.\n' +
    '/escola - Exibe informações da instituição.\n' +
    '/cursos - Lista os cursos disponíveis.\n' +
    '/professor - Exibe informações do professor.\n' +
    '/ajuda - Apresenta as orientações do sistema.\n' +
    '/requisicao - Mostra os dados da requisição recebida.'
  );
});

// GET /requisicao - Desafio extra
app.get('/requisicao', (req, res) => {
  res.json({
    metodo: req.method,
    caminho: req.path,
    mensagem: 'Solicitação recebida com sucesso.'
  });
});

// Inicialização do servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
