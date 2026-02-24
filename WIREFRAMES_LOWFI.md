# Wireframes de Baixa Fidelidade - Serviços Locais v2.0

## Visão Geral

Wireframes em preto, branco e cinza com design minimalista, botões grandes (48px+), layout mobile-first (9:16), máximo 3 cliques para contactar profissional.

---

## TELA 1: LOGIN/REGISTO

```
┌─────────────────────────────────────┐
│                                     │
│     SERVIÇOS LOCAIS                 │
│                                     │
├─────────────────────────────────────┤
│                                     │
│  Tipo de Utilizador:                │
│                                     │
│  ☐ Cliente      ☐ Profissional      │
│                                     │
│  ┌─────────────────────────────────┐│
│  │ Telefone: +258 82 123 456       ││
│  └─────────────────────────────────┘│
│                                     │
│  ┌─────────────────────────────────┐│
│  │ Senha: ••••••••                 ││
│  └─────────────────────────────────┘│
│                                     │
│  ┌─────────────────────────────────┐│
│  │    ENTRAR (48px)                ││
│  └─────────────────────────────────┘│
│                                     │
│  Criar conta? Clique aqui           │
│                                     │
└─────────────────────────────────────┘

Elementos:
- Logo/Título no topo
- Seleção de tipo (Cliente/Profissional)
- Campo de telefone
- Campo de senha
- Botão ENTRAR (grande)
- Link para criar conta
```

---

## TELA 2: HOME COM MAPA

```
┌─────────────────────────────────────┐
│ 🏠 Home                             │
├─────────────────────────────────────┤
│  🔍 Pesquisar categoria...          │
├─────────────────────────────────────┤
│                                     │
│  ┌─────────────────────────────────┐│
│  │                                 ││
│  │      MAPA (250px)               ││
│  │   com Pins de Profissionais     ││
│  │                                 ││
│  └─────────────────────────────────┘│
│                                     │
│  Filtros:                           │
│  [Distância] [Preço] [Avaliação]    │
│                                     │
│  Profissionais Próximos:            │
│  ┌─────────────────────────────────┐│
│  │ ⚡ João Silva (0.8 km)          ││
│  │ Eletricista • Bairro A          ││
│  │ ★ 4.8 (24) • 500-1500 MT        ││
│  │ [Ver Perfil]                    ││
│  └─────────────────────────────────┘│
│                                     │
│  ┌─────────────────────────────────┐│
│  │ 🧱 Maria Santos (1.2 km)        ││
│  │ Pedreiro • Bairro B             ││
│  │ ★ 4.5 (18) • 1000-2000 MT       ││
│  │ [Ver Perfil]                    ││
│  └─────────────────────────────────┘│
│                                     │
├─────────────────────────────────────┤
│ 🏠 Home │ 💬 Chat │ 📋 Histórico │ 👤
└─────────────────────────────────────┘

Elementos:
- Barra de pesquisa por categoria
- Mapa com pins (cada pin = profissional)
- Filtros (distância, preço, avaliação)
- Lista de profissionais próximos
- Cards com foto, nome, categoria, distância, preço, avaliação
- Bottom navigation (4 abas)
```

---

## TELA 3: LISTA DE PROFISSIONAIS

```
┌─────────────────────────────────────┐
│ ← Eletricistas                      │
├─────────────────────────────────────┤
│  🔍 Pesquisar...                    │
│  [Distância] [Preço] [Avaliação]    │
├─────────────────────────────────────┤
│                                     │
│  ┌─────────────────────────────────┐│
│  │ ⚡ │ João Silva                  ││
│  │   │ 0.8 km • ★ 4.8 (24)         ││
│  │   │ 500-1500 MT                 ││
│  │   │ [Ver Perfil] [❤️ Favorito]  ││
│  └─────────────────────────────────┘│
│                                     │
│  ┌─────────────────────────────────┐│
│  │ ⚡ │ Carlos Neves                ││
│  │   │ 1.5 km • ★ 4.9 (32)         ││
│  │   │ 600-1800 MT                 ││
│  │   │ [Ver Perfil] [❤️ Favorito]  ││
│  └─────────────────────────────────┘│
│                                     │
│  ┌─────────────────────────────────┐│
│  │ ⚡ │ Pedro Gomes                 ││
│  │   │ 2.1 km • ★ 4.6 (20)         ││
│  │   │ 700-2000 MT                 ││
│  │   │ [Ver Perfil] [❤️ Favorito]  ││
│  └─────────────────────────────────┘│
│                                     │
├─────────────────────────────────────┤
│ 🏠 Home │ 💬 Chat │ 📋 Histórico │ 👤
└─────────────────────────────────────┘

Elementos:
- Título da categoria
- Barra de pesquisa
- Filtros (distância, preço, avaliação)
- Cards com foto, nome, distância, avaliação, preço
- Botão "Ver Perfil"
- Botão "Favorito" (coração)
- Scroll vertical
```

---

## TELA 4: PERFIL DO PROFISSIONAL (CLIQUE 2)

```
┌─────────────────────────────────────┐
│ ← Perfil                 ⭐ ❤️ ⋮    │
├─────────────────────────────────────┤
│                                     │
│           ⚡ (Avatar)               │
│                                     │
│  João Silva                         │
│  Eletricista                        │
│  📍 Bairro A, Maputo • 0.8 km       │
│  ★ 4.8 (24 avaliações)              │
│                                     │
│  Preço: 500-1500 MT                 │
│  Disponibilidade: Disponível        │
│  Tempo de Resposta: 30 min          │
│                                     │
│  Sobre:                             │
│  Eletricista profissional com 10    │
│  anos de experiência. Trabalho      │
│  rápido e confiável.                │
│                                     │
│  ┌─────────────────────────────────┐│
│  │  📞 LIGAR (48px)                ││
│  └─────────────────────────────────┘│
│                                     │
│  ┌─────────────────────────────────┐│
│  │  💬 WHATSAPP (48px)             ││
│  └─────────────────────────────────┘│
│                                     │
│  ┌─────────────────────────────────┐│
│  │  💬 CHAT (48px)                 ││
│  └─────────────────────────────────┘│
│                                     │
│  Avaliações:                        │
│  ┌─────────────────────────────────┐│
│  │ 👩 Maria Costa                  ││
│  │ ★★★★★ Excelente!               ││
│  │ "Trabalho perfeito"             ││
│  │ 2 dias atrás                    ││
│  └─────────────────────────────────┘│
│                                     │
│  [Ver todas as avaliações →]        │
│                                     │
├─────────────────────────────────────┤
│ 🏠 Home │ 💬 Chat │ 📋 Histórico │ 👤
└─────────────────────────────────────┘

Elementos:
- Avatar do profissional
- Nome, categoria, localização, distância
- Avaliação média e número de avaliações
- Preço, disponibilidade, tempo de resposta
- Descrição do serviço
- 3 botões grandes: LIGAR, WHATSAPP, CHAT (CLIQUE 3)
- Lista de avaliações recentes
- Link para ver todas as avaliações
```

---

## TELA 5: AGENDAMENTO DE SERVIÇO

```
┌─────────────────────────────────────┐
│ ← Agendar Serviço                   │
├─────────────────────────────────────┤
│                                     │
│  João Silva - Eletricista           │
│                                     │
│  Serviço:                           │
│  ┌─────────────────────────────────┐│
│  │ Instalação de Tomada     ▼      ││
│  └─────────────────────────────────┘│
│                                     │
│  Data:                              │
│  ┌─────────────────────────────────┐│
│  │ 📅 25 Feb 2026                  ││
│  └─────────────────────────────────┘│
│                                     │
│  Horário:                           │
│  ┌─────────────────────────────────┐│
│  │ 🕐 10:00 - 11:00                ││
│  └─────────────────────────────────┘│
│                                     │
│  Localização:                       │
│  ┌─────────────────────────────────┐│
│  │ Rua da Paz, 123, Bairro A      ││
│  └─────────────────────────────────┘│
│                                     │
│  Descrição:                         │
│  ┌─────────────────────────────────┐│
│  │ Preciso de uma nova tomada...  ││
│  │                                 ││
│  └─────────────────────────────────┘│
│                                     │
│  Preço Estimado: 500 MT             │
│                                     │
│  ┌─────────────────────────────────┐│
│  │  CONFIRMAR AGENDAMENTO (48px)   ││
│  └─────────────────────────────────┘│
│                                     │
│  ┌─────────────────────────────────┐│
│  │  Cancelar                       ││
│  └─────────────────────────────────┘│
│                                     │
└─────────────────────────────────────┘

Elementos:
- Nome do profissional
- Seleção de serviço (dropdown)
- Calendário para escolher data
- Seleção de horário
- Campo de localização
- Campo de descrição
- Preço estimado
- Botão CONFIRMAR (grande)
- Botão Cancelar
```

---

## TELA 6: CHAT EM TEMPO REAL

```
┌─────────────────────────────────────┐
│ ← João Silva        📞 ⋮            │
│   Eletricista • Online              │
├─────────────────────────────────────┤
│                                     │
│  ⚡ Olá! Você faz trabalhos de      │
│     eletricidade?              10:15│
│                                     │
│                    Sim! Faço         │
│                    instalações e    │
│                    reparos. Qual é  │
│                    o problema?  10:16│
│                                     │
│  ⚡ Preciso de uma nova tomada      │
│     na sala                    10:17│
│                                     │
│                    Sem problema!    │
│                    Posso ir amanhã  │
│                    às 10h?      10:18│
│                                     │
│  ⚡ Perfeito! Qual é o preço?  10:30│
│                                     │
│                    500 MT           │
│                    Combinado?   10:31│
│                                     │
│  ⚡ Combinado! Até amanhã!     10:32│
│                                     │
├─────────────────────────────────────┤
│ 😊 [Mensagem...]        📤 📎       │
├─────────────────────────────────────┤
│ 🏠 Home │ 💬 Chat │ 📋 Histórico │ 👤
└─────────────────────────────────────┘

Elementos:
- Nome do profissional
- Status (Online/Offline)
- Botões de ação (chamada, menu)
- Histórico de mensagens
- Emoji do remetente
- Timestamp das mensagens
- Campo de entrada de texto
- Botão enviar (📤)
- Botão anexar arquivo (📎)
```

---

## TELA 7: PAGAMENTO

```
┌─────────────────────────────────────┐
│ ← Pagamento                         │
├─────────────────────────────────────┤
│                                     │
│  Resumo do Serviço:                 │
│  ┌─────────────────────────────────┐│
│  │ João Silva - Eletricista        ││
│  │ Instalação de Tomada            ││
│  │ 25 Feb 2026 • 10:00             ││
│  │ Duração: 1 hora                 ││
│  └─────────────────────────────────┘│
│                                     │
│  Detalhes do Pagamento:             │
│  Serviço:           500 MT          │
│  Taxa de Plataforma: 50 MT          │
│  ─────────────────────────          │
│  Total:             550 MT          │
│                                     │
│  Método de Pagamento:               │
│  ┌─────────────────────────────────┐│
│  │ ☐ M-Pesa                       ││
│  │ ☐ Vodacom Cash                 ││
│  │ ☑ Carteira Digital             ││
│  │ ☐ Cartão de Crédito            ││
│  └─────────────────────────────────┘│
│                                     │
│  Saldo Carteira: 1000 MT            │
│                                     │
│  ┌─────────────────────────────────┐│
│  │  CONFIRMAR PAGAMENTO (48px)     ││
│  └─────────────────────────────────┘│
│                                     │
│  ┌─────────────────────────────────┐│
│  │  Cancelar                       ││
│  └─────────────────────────────────┘│
│                                     │
└─────────────────────────────────────┘

Elementos:
- Resumo do serviço
- Detalhamento de custos
- Seleção de método de pagamento
- Saldo disponível
- Botão CONFIRMAR (grande)
- Botão Cancelar
```

---

## TELA 8: HISTÓRICO DE PEDIDOS

```
┌─────────────────────────────────────┐
│ ← Histórico de Pedidos              │
├─────────────────────────────────────┤
│ [Todos] [Concluído] [Pendente]      │
├─────────────────────────────────────┤
│                                     │
│  ┌─────────────────────────────────┐│
│  │ ⚡ João Silva    [CONCLUÍDO]   ││
│  │ Instalação de Tomada            ││
│  │ 📅 23 Feb 2026 • 🕐 10:00       ││
│  │ 500 MT • ★ 5 (Avaliado)         ││
│  │ [Ver Detalhes]                  ││
│  └─────────────────────────────────┘│
│                                     │
│  ┌─────────────────────────────────┐│
│  │ 🔧 Maria Santos  [CONCLUÍDO]   ││
│  │ Reparo de Cano                  ││
│  │ 📅 20 Feb 2026 • 🕐 14:30       ││
│  │ 800 MT • ★ 4 (Avaliado)         ││
│  │ [Ver Detalhes]                  ││
│  └─────────────────────────────────┘│
│                                     │
│  ┌─────────────────────────────────┐│
│  │ 🎨 Ana Costa     [PENDENTE]    ││
│  │ Pintura de Sala                 ││
│  │ 📅 15 Feb 2026 • 🕐 08:00       ││
│  │ 1500 MT                         ││
│  │ [Contactar] [Cancelar]          ││
│  └─────────────────────────────────┘│
│                                     │
│  ┌─────────────────────────────────┐│
│  │ 🧱 Pedro Neves   [CANCELADO]   ││
│  │ Construção de Parede            ││
│  │ 📅 10 Feb 2026                  ││
│  │ 2000 MT                         ││
│  │ [Ver Detalhes]                  ││
│  └─────────────────────────────────┘│
│                                     │
├─────────────────────────────────────┤
│ 🏠 Home │ 💬 Chat │ 📋 Histórico │ 👤
└─────────────────────────────────────┘

Elementos:
- Filtros por status (Todos, Concluído, Pendente)
- Cards de pedidos com:
  - Ícone + nome do profissional
  - Status (badge)
  - Nome do serviço
  - Data e hora
  - Valor
  - Avaliação (se concluído)
  - Botões de ação
```

---

## TELA 9: FAVORITOS

```
┌─────────────────────────────────────┐
│ ← Favoritos                         │
├─────────────────────────────────────┤
│  🔍 Pesquisar...                    │
├─────────────────────────────────────┤
│                                     │
│  ┌─────────────────────────────────┐│
│  │ ⚡ │ João Silva                  ││
│  │   │ Eletricista • 0.8 km        ││
│  │   │ ★ 4.8 (24) • 500-1500 MT    ││
│  │   │ [Ver Perfil] [❤️ Remover]   ││
│  └─────────────────────────────────┘│
│                                     │
│  ┌─────────────────────────────────┐│
│  │ 🔧 Maria Santos                 ││
│  │   │ Canalizadora • 1.2 km       ││
│  │   │ ★ 4.5 (18) • 800-2000 MT    ││
│  │   │ [Ver Perfil] [❤️ Remover]   ││
│  └─────────────────────────────────┘│
│                                     │
│  ┌─────────────────────────────────┐│
│  │ 🎨 Ana Costa                    ││
│  │   │ Pintora • 2.5 km            ││
│  │   │ ★ 4.9 (35) • 1000-2500 MT   ││
│  │   │ [Ver Perfil] [❤️ Remover]   ││
│  └─────────────────────────────────┘│
│                                     │
├─────────────────────────────────────┤
│ 🏠 Home │ 💬 Chat │ 📋 Histórico │ 👤
└─────────────────────────────────────┘

Elementos:
- Barra de pesquisa
- Cards de profissionais favoritos
- Botão "Ver Perfil"
- Botão "Remover de Favoritos" (coração cheio)
```

---

## TELA 10: AVALIAÇÕES

```
┌─────────────────────────────────────┐
│ ← Avaliações                        │
├─────────────────────────────────────┤
│                                     │
│  ┌─────────────────────────────────┐│
│  │         4.8                     ││
│  │    ★ ★ ★ ★ ★                   ││
│  │    24 avaliações                ││
│  └─────────────────────────────────┘│
│                                     │
│  ┌─────────────────────────────────┐│
│  │  ⭐ ADICIONAR AVALIAÇÃO (48px)  ││
│  └─────────────────────────────────┘│
│                                     │
│  Comentários:                       │
│  ┌─────────────────────────────────┐│
│  │ 👩 Maria Costa                  ││
│  │ ★★★★★                          ││
│  │ "Excelente profissional! Trabalho││
│  │ rápido e bem feito."            ││
│  │ 2 dias atrás                    ││
│  └─────────────────────────────────┘│
│                                     │
│  ┌─────────────────────────────────┐│
│  │ 👨 Pedro Neves                  ││
│  │ ★★★★☆                          ││
│  │ "Muito bom, recomendo!"         ││
│  │ 1 semana atrás                  ││
│  └─────────────────────────────────┘│
│                                     │
│  ┌─────────────────────────────────┐│
│  │ 👩 Ana Silva                    ││
│  │ ★★★★★                          ││
│  │ "Profissional confiável e       ││
│  │ atencioso."                     ││
│  │ 2 semanas atrás                 ││
│  └─────────────────────────────────┘│
│                                     │
├─────────────────────────────────────┤
│ 🏠 Home │ 💬 Chat │ 📋 Histórico │ 👤
└─────────────────────────────────────┘

Elementos:
- Avaliação média com estrelas
- Número total de avaliações
- Botão "ADICIONAR AVALIAÇÃO"
- Cards de comentários com:
  - Avatar do avaliador
  - Nome
  - Estrelas
  - Texto do comentário
  - Data
```

---

## TELA 11: NOTIFICAÇÕES

```
┌─────────────────────────────────────┐
│ 🔔 Notificações       [Limpar Tudo] │
├─────────────────────────────────────┤
│ [Todas] [Não Lidas]                 │
├─────────────────────────────────────┤
│                                     │
│  ┌─────────────────────────────────┐│
│  │ 💬 Nova mensagem de João Silva ◉││
│  │ "Posso ir amanhã às 10h?"       ││
│  │ 5 minutos atrás              ✕  ││
│  └─────────────────────────────────┘│
│                                     │
│  ┌─────────────────────────────────┐│
│  │ ✅ Pedido concluído             ││
│  │ Maria Santos concluiu o serviço ││
│  │ 1 hora atrás                 ✕  ││
│  └─────────────────────────────────┘│
│                                     │
│  ┌─────────────────────────────────┐│
│  │ ⭐ Nova avaliação               ││
│  │ Pedro Neves deixou 5 estrelas   ││
│  │ 3 horas atrás                ✕  ││
│  └─────────────────────────────────┘│
│                                     │
│  ┌─────────────────────────────────┐│
│  │ 📍 Profissional próximo         ││
│  │ João Silva está a 0.8 km        ││
│  │ 1 dia atrás                  ✕  ││
│  └─────────────────────────────────┘│
│                                     │
│  ┌─────────────────────────────────┐│
│  │ 🎉 Promoção especial            ││
│  │ Ganhe 10% de desconto           ││
│  │ 2 dias atrás                 ✕  ││
│  └─────────────────────────────────┘│
│                                     │
├─────────────────────────────────────┤
│ 🏠 Home │ 💬 Chat │ 📋 Histórico │ 👤
└─────────────────────────────────────┘

Elementos:
- Filtros (Todas, Não Lidas)
- Botão "Limpar Tudo"
- Cards de notificações com:
  - Ícone do tipo
  - Título
  - Mensagem
  - Timestamp
  - Indicador de não lida (◉)
  - Botão fechar (✕)
```

---

## TELA 12: PERFIL DO UTILIZADOR

```
┌─────────────────────────────────────┐
│ ← Perfil                            │
├─────────────────────────────────────┤
│                                     │
│           👤 (Avatar)               │
│        [📷 Mudar Foto]              │
│                                     │
│  Nome: João Silva                   │
│  Telefone: +258 82 123 456          │
│  Email: joao@email.com              │
│  Tipo: Cliente                      │
│                                     │
│  ┌─────────────────────────────────┐│
│  │  ✏️ EDITAR PERFIL (48px)        ││
│  └─────────────────────────────────┘│
│                                     │
│  Preferências:                      │
│  ┌─────────────────────────────────┐│
│  │ Notificações: ON                ││
│  │ Localização: ON                 ││
│  │ Modo Escuro: OFF                ││
│  └─────────────────────────────────┘│
│                                     │
│  ┌─────────────────────────────────┐│
│  │  ❤️ Favoritos (3)               ││
│  └─────────────────────────────────┘│
│                                     │
│  ┌─────────────────────────────────┐│
│  │  💳 Carteira Digital            ││
│  │  Saldo: 1000 MT                 ││
│  └─────────────────────────────────┘│
│                                     │
│  ┌─────────────────────────────────┐│
│  │  ⚙️ Configurações               ││
│  └─────────────────────────────────┘│
│                                     │
│  ┌─────────────────────────────────┐│
│  │  🚪 SAIR (48px)                 ││
│  └─────────────────────────────────┘│
│                                     │
├─────────────────────────────────────┤
│ 🏠 Home │ 💬 Chat │ 📋 Histórico │ 👤
└─────────────────────────────────────┘

Elementos:
- Avatar do utilizador
- Botão mudar foto
- Informações pessoais
- Botão "EDITAR PERFIL"
- Preferências (toggles)
- Botão "Favoritos"
- Botão "Carteira Digital"
- Botão "Configurações"
- Botão "SAIR"
```

---

## TELA 13: PAINEL ADMIN

```
┌─────────────────────────────────────┐
│ ← Painel Admin                      │
├─────────────────────────────────────┤
│                                     │
│  Dashboard:                         │
│  ┌─────────────────────────────────┐│
│  │ Utilizadores: 1,250             ││
│  │ Profissionais: 320              ││
│  │ Pedidos Hoje: 45                ││
│  │ Receita: 25,000 MT              ││
│  └─────────────────────────────────┘│
│                                     │
│  ┌─────────────────────────────────┐│
│  │  👥 Gerenciar Utilizadores      ││
│  └─────────────────────────────────┘│
│                                     │
│  ┌─────────────────────────────────┐│
│  │  🏢 Gerenciar Categorias        ││
│  └─────────────────────────────────┘│
│                                     │
│  ┌─────────────────────────────────┐│
│  │  💳 Transações                  ││
│  └─────────────────────────────────┘│
│                                     │
│  ┌─────────────────────────────────┐│
│  │  📊 Relatórios                  ││
│  └─────────────────────────────────┘│
│                                     │
│  ┌─────────────────────────────────┐│
│  │  ⚠️ Denúncias                   ││
│  └─────────────────────────────────┘│
│                                     │
│  ┌─────────────────────────────────┐│
│  │  🔐 Configurações de Sistema    ││
│  └─────────────────────────────────┘│
│                                     │
├─────────────────────────────────────┤
│ 🏠 Home │ 💬 Chat │ 📋 Histórico │ 👤
└─────────────────────────────────────┘

Elementos:
- Dashboard com estatísticas
- Cards de ações principais
- Gerenciamento de utilizadores
- Gerenciamento de categorias
- Visualização de transações
- Relatórios
- Gerenciamento de denúncias
- Configurações de sistema
```

---

## Fluxo de Navegação Completo

```
LOGIN/REGISTO
     ↓
HOME COM MAPA
     ├─→ LISTA DE PROFISSIONAIS
     │        ↓
     │   PERFIL DO PROFISSIONAL (CLIQUE 2)
     │        ├─→ LIGAR (CLIQUE 3) ✅
     │        ├─→ WHATSAPP (CLIQUE 3) ✅
     │        ├─→ CHAT (CLIQUE 3) ✅
     │        └─→ AGENDAMENTO
     │             ├─→ PAGAMENTO
     │             └─→ CONFIRMAÇÃO
     │
     ├─→ CHAT (MENSAGENS)
     │
     ├─→ HISTÓRICO DE PEDIDOS
     │        ├─→ AVALIAÇÕES
     │        └─→ DETALHES DO PEDIDO
     │
     ├─→ FAVORITOS
     │
     └─→ PERFIL DO UTILIZADOR
          ├─→ EDITAR PERFIL
          ├─→ CARTEIRA DIGITAL
          ├─→ NOTIFICAÇÕES
          └─→ CONFIGURAÇÕES

ADMIN:
PAINEL ADMIN
     ├─→ GERENCIAR UTILIZADORES
     ├─→ GERENCIAR CATEGORIAS
     ├─→ TRANSAÇÕES
     ├─→ RELATÓRIOS
     ├─→ DENÚNCIAS
     └─→ CONFIGURAÇÕES
```

---

## Requisitos de Design

- ✅ Wireframes em preto, branco e cinza
- ✅ Botões grandes (48px mínimo)
- ✅ Layout mobile-first (9:16)
- ✅ Máximo 3 cliques para contactar profissional
- ✅ Elementos simples e claros
- ✅ Fácil usabilidade
- ✅ Sem cores ou imagens reais
- ✅ Minimalista
- ✅ Texto legível
- ✅ Foco em usabilidade
