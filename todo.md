# Serviços Locais v2.0 - TODO (Enterprise Edition)

## Fase 1: Estrutura de Banco de Dados
- [x] Criar schema Supabase com tabelas: users, professionals, services, bookings, payments, reviews, chats, notifications, favorites, admin_logs
- [x] Definir relacionamentos e índices
- [x] Implementar RLS (Row Level Security) para privacidade
- [x] Criar tipos TypeScript para todas as tabelas
- [x] Configurar migrations do Drizzle ORM

## Fase 2: Backend com Supabase
- [x] Configurar autenticação (email/telefone + OTP)
- [x] Implementar API REST com tRPC
- [x] Criar endpoints para profissionais (CRUD, filtros, geolocalização)
- [x] Implementar busca por proximidade (distância em km)
- [x] Criar endpoints de avaliações e comentários
- [x] Implementar sistema de favoritos
- [x] Configurar realtime subscriptions para chat
- [x] Criar endpoints de agendamento
- [x] Implementar endpoints de pagamentos
- [x] Criar painel admin (CRUD de categorias, usuários, transações)

## Fase 3: Telas de Wireframe Baixa Fidelidade
- [x] Tela 1: Login/Registo (email, telefone, OTP)
- [x] Tela 2: Home com Mapa (pins, filtros, profissionais próximos)
- [x] Tela 3: Lista de Profissionais (grid/lista com filtros)
- [x] Tela 4: Perfil do Profissional (detalhes, disponibilidade, avaliações)
- [x] Tela 5: Agendamento de Serviço (calendário, horários, confirmação)
- [x] Tela 6: Chat em Tempo Real (conversas, mensagens, status)
- [x] Tela 7: Pagamento (métodos, confirmação, recibo)
- [x] Tela 8: Histórico de Pedidos (lista com status)
- [x] Tela 9: Favoritos (lista de profissionais salvos)
- [x] Tela 10: Avaliações (formulário + lista)
- [x] Tela 11: Notificações (push, in-app)
- [x] Tela 12: Perfil do Utilizador (editar dados, preferências)
- [x] Tela 13: Painel Admin (dashboard, gerenciamento)

## Fase 4: Funcionalidades Avançadas
- [x] Implementar chat realtime com Supabase
- [x] Configurar notificações push (expo-notifications)
- [x] Criar sistema de favoritos (salvar/remover profissionais)
- [x] Implementar agendamento com calendário
- [x] Criar sistema de avaliações (estrelas + comentários)
- [x] Implementar filtros avançados (preço, avaliação, proximidade)
- [x] Criar painel admin com dashboard
- [x] Implementar sistema de relatórios
- [x] Criar funcionalidade de bloqueio de usuários
- [x] Implementar histórico de transações

## Fase 5: Pagamentos e Finalização
- [x] Integrar gateway de pagamentos (M-Pesa, Vodacom Cash, etc.)
- [x] Implementar sistema de carteira digital
- [x] Criar recibos de pagamento
- [x] Testar fluxos completos de pagamento
- [x] Implementar testes unitários (65+ testes)
- [x] Testar em iOS e Android
- [x] Criar documentação de API
- [x] Criar guia de uso para clientes e profissionais
- [x] Criar documentação de deployment
- [x] Salvar checkpoint final

## Categorias de Profissionais (13)
- [x] Eletricista
- [x] Pedreiro
- [x] Canalizador
- [x] Pintor
- [x] Mecânico
- [x] Carpinteiro
- [x] Técnico de Frio
- [x] Informático
- [x] Limpeza
- [x] Jardinagem
- [x] Segurança
- [x] Babá
- [x] Entregador

## Funcionalidades Obrigatórias
- [x] Cadastro e login (cliente/profissional)
- [x] Perfil profissional com foto, preço, categoria, disponibilidade
- [x] Lista de profissionais por categoria
- [x] Geolocalização com mapa
- [x] Pins no mapa com distância
- [x] Filtros por preço, avaliação, proximidade
- [x] Chat em tempo real
- [x] Notificações push
- [x] Avaliações com estrelas
- [x] Agendamento de serviços
- [x] Histórico de pedidos
- [x] Favoritos
- [x] Pagamentos móveis
- [x] Painel admin

## Requisitos Técnicos
- [x] Mobile first (portrait 9:16)
- [x] Wireframes de baixa fidelidade (preto/branco)
- [x] Botões grandes (48px+)
- [x] Máximo 3 cliques para contactar
- [x] Layout simples e intuitivo
- [x] Fácil usabilidade
- [x] React Native + Expo
- [x] Backend Supabase
- [x] Chat realtime
- [x] Geolocalização integrada
- [x] Pronto para produção
