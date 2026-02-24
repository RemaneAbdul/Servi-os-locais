# Fluxo de Navegação - Serviços Locais

## Visão Geral do Aplicativo

O aplicativo "Serviços Locais" é um marketplace mobile que conecta clientes a profissionais locais. O fluxo é otimizado para **máximo 3 cliques para contactar um profissional**.

---

## Estrutura de Navegação

### 1. **Tela de Login/Registo** (`login-hifi.tsx`)
**Ponto de entrada do aplicativo**

```
┌─────────────────────────────────────┐
│   SERVIÇOS LOCAIS                   │
├─────────────────────────────────────┤
│                                     │
│  Tipo de Utilizador:                │
│  ☐ Cliente    ☐ Profissional        │
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
│  │    ENTRAR                       ││
│  └─────────────────────────────────┘│
│                                     │
│  Criar conta? Clique aqui           │
│                                     │
└─────────────────────────────────────┘

↓ Login bem-sucedido
```

---

### 2. **Tela Home com Mapa** (`home-map-hifi.tsx`)
**Página principal após login**

```
┌─────────────────────────────────────┐
│ 🏠 Home                             │
├─────────────────────────────────────┤
│  🔍 Pesquisar categoria...          │
├─────────────────────────────────────┤
│                                     │
│  ┌──────────────┐  ┌──────────────┐│
│  │   MAPA       │  │   MAPA       ││
│  │   (250px)    │  │   (250px)    ││
│  │   com Pins   │  │   com Pins   ││
│  └──────────────┘  └──────────────┘│
│                                     │
│  Profissionais Próximos:            │
│  ┌─────────────────────────────────┐│
│  │ ⚡ João Silva (0.8 km)          ││
│  │ Eletricista • Bairro A          ││
│  │ ★ 4.8 (24 avaliações)           ││
│  │ [Ver Perfil]                    ││
│  └─────────────────────────────────┘│
│                                     │
│  ┌─────────────────────────────────┐│
│  │ 🔧 Maria Santos (1.2 km)        ││
│  │ Encanadora • Bairro B           ││
│  │ ★ 4.5 (18 avaliações)           ││
│  │ [Ver Perfil]                    ││
│  └─────────────────────────────────┘│
│                                     │
├─────────────────────────────────────┤
│ 🏠 Home │ 💬 Chat │ 📋 Histórico │ 👤 Perfil
└─────────────────────────────────────┘

↓ Clique em "Ver Perfil" ou categoria
```

---

### 3. **Tela Perfil do Profissional** (`professional-detail-hifi.tsx`)
**Detalhes completos do profissional - CLIQUE 2**

```
┌─────────────────────────────────────┐
│ ← Perfil do Profissional            │
├─────────────────────────────────────┤
│                                     │
│           ⚡ (Avatar)               │
│                                     │
│  João Silva                         │
│  Eletricista                        │
│  📍 Bairro A, Maputo • 0.8 km       │
│  ★ 4.8 (24 avaliações)              │
│                                     │
│  ┌─────────────────────────────────┐│
│  │ Preço Médio: 500-1500 MT        ││
│  └─────────────────────────────────┘│
│                                     │
│  Sobre o Serviço:                   │
│  Eletricista profissional com 10    │
│  anos de experiência...             │
│                                     │
│  ┌─────────────────────────────────┐│
│  │  📞 LIGAR                       ││
│  └─────────────────────────────────┘│
│                                     │
│  ┌─────────────────────────────────┐│
│  │  💬 WHATSAPP                    ││
│  └─────────────────────────────────┘│
│                                     │
│  ┌─────────────────────────────────┐│
│  │  💬 ENVIAR MENSAGEM             ││
│  └─────────────────────────────────┘│
│                                     │
│  Avaliações:                        │
│  ┌─────────────────────────────────┐│
│  │ 👩 Maria Costa                  ││
│  │ ★★★★★ Excelente profissional!  ││
│  │ 2 dias atrás                    ││
│  └─────────────────────────────────┘│
│                                     │
│  [Ver todas as avaliações →]        │
│                                     │
├─────────────────────────────────────┤
│ 🏠 Home │ 💬 Chat │ 📋 Histórico │ 👤 Perfil
└─────────────────────────────────────┘

↓ Clique em LIGAR, WHATSAPP ou ENVIAR MENSAGEM (CLIQUE 3)
```

---

### 4. **Tela Chat em Tempo Real** (`chat-hifi.tsx`)
**Comunicação direta com profissional**

#### 4a. Lista de Conversas
```
┌─────────────────────────────────────┐
│ 💬 Mensagens                        │
├─────────────────────────────────────┤
│                                     │
│  ┌─────────────────────────────────┐│
│  │ ⚡ João Silva          10:30    ││
│  │ Eletricista                     ││
│  │ Posso ir amanhã às 10h?    [2]  ││
│  └─────────────────────────────────┘│
│                                     │
│  ┌─────────────────────────────────┐│
│  │ 🔧 Maria Santos        Ontem    ││
│  │ Encanadora                      ││
│  │ Obrigado pelo serviço!          ││
│  └─────────────────────────────────┘│
│                                     │
│  ┌─────────────────────────────────┐│
│  │ 🧱 Pedro Neves        2 dias    ││
│  │ Pedreiro                        ││
│  │ Qual é o seu orçamento?         ││
│  └─────────────────────────────────┘│
│                                     │
├─────────────────────────────────────┤
│ 🏠 Home │ 💬 Chat │ 📋 Histórico │ 👤 Perfil
└─────────────────────────────────────┘

↓ Clique em conversa para abrir
```

#### 4b. Conversa Aberta
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
├─────────────────────────────────────┤
│ 😊 [Text Input] 📤                  │
├─────────────────────────────────────┤
│ 🏠 Home │ 💬 Chat │ 📋 Histórico │ 👤 Perfil
└─────────────────────────────────────┘
```

---

### 5. **Tela Histórico de Pedidos** (`history-hifi.tsx`)
**Rastreamento de serviços solicitados**

```
┌─────────────────────────────────────┐
│ ← Histórico de Pedidos              │
├─────────────────────────────────────┤
│ [Todos] [Concluído] [Pendente]      │
├─────────────────────────────────────┤
│                                     │
│  ┌─────────────────────────────────┐│
│  │ ⚡ João Silva        [CONCLUÍDO]││
│  │ Eletricista                     ││
│  │ Instalação de tomada            ││
│  │ 📅 23 Feb 2026 • 🕐 10:00       ││
│  │ 500 MT                          ││
│  │ ★ 5 Avaliado                    ││
│  └─────────────────────────────────┘│
│                                     │
│  ┌─────────────────────────────────┐│
│  │ 🔧 Maria Santos      [CONCLUÍDO]││
│  │ Encanadora                      ││
│  │ Reparo de cano                  ││
│  │ 📅 20 Feb 2026 • 🕐 14:30       ││
│  │ 800 MT                          ││
│  │ ★ 4 Avaliado                    ││
│  └─────────────────────────────────┘│
│                                     │
│  ┌─────────────────────────────────┐│
│  │ 🎨 Ana Costa         [PENDENTE] ││
│  │ Pintora                         ││
│  │ Pintura de sala                 ││
│  │ 📅 15 Feb 2026 • 🕐 08:00       ││
│  │ 1500 MT                         ││
│  │ [Contactar] [Cancelar]          ││
│  └─────────────────────────────────┘│
│                                     │
├─────────────────────────────────────┤
│ 🏠 Home │ 💬 Chat │ 📋 Histórico │ 👤 Perfil
└─────────────────────────────────────┘

↓ Clique em pedido para ver detalhes
```

---

### 6. **Tela Avaliações** (`reviews-hifi.tsx`)
**Avaliar profissional e ver comentários**

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
│  │  ⭐ ADICIONAR AVALIAÇÃO         ││
│  └─────────────────────────────────┘│
│                                     │
│  Comentários:                       │
│  ┌─────────────────────────────────┐│
│  │ 👩 Maria Costa                  ││
│  │ ★★★★★                          ││
│  │ Excelente profissional! Trabalho││
│  │ rápido e bem feito.             ││
│  │ 2 dias atrás                    ││
│  └─────────────────────────────────┘│
│                                     │
│  ┌─────────────────────────────────┐│
│  │ 👨 Pedro Neves                  ││
│  │ ★★★★☆                          ││
│  │ Muito bom, recomendo!           ││
│  │ 1 semana atrás                  ││
│  └─────────────────────────────────┘│
│                                     │
│  ┌─────────────────────────────────┐│
│  │ 👩 Ana Silva                    ││
│  │ ★★★★★                          ││
│  │ Profissional confiável e        ││
│  │ atencioso.                      ││
│  │ 2 semanas atrás                 ││
│  └─────────────────────────────────┘│
│                                     │
├─────────────────────────────────────┤
│ 🏠 Home │ 💬 Chat │ 📋 Histórico │ 👤 Perfil
└─────────────────────────────────────┘
```

#### Formulário de Avaliação (ao clicar em "ADICIONAR AVALIAÇÃO")
```
┌─────────────────────────────────────┐
│ Sua Avaliação                       │
├─────────────────────────────────────┤
│                                     │
│  Selecione as estrelas:             │
│  ☆ ☆ ☆ ☆ ☆                        │
│                                     │
│  ┌─────────────────────────────────┐│
│  │ Compartilhe sua experiência...  ││
│  │                                 ││
│  │                                 ││
│  └─────────────────────────────────┘│
│                                     │
│  [Cancelar]  [Enviar]               │
│                                     │
└─────────────────────────────────────┘
```

---

### 7. **Tela Editar Perfil** (`profile-edit-hifi.tsx`)
**Para profissionais atualizarem informações**

```
┌─────────────────────────────────────┐
│ ← Editar Perfil                     │
├─────────────────────────────────────┤
│                                     │
│           ⚡ (Avatar)               │
│        [📷 Mudar Foto]              │
│                                     │
│  Nome Completo:                     │
│  ┌─────────────────────────────────┐│
│  │ João Silva                      ││
│  └─────────────────────────────────┘│
│                                     │
│  Telefone:                          │
│  ┌─────────────────────────────────┐│
│  │ +258 82 123 456                 ││
│  └─────────────────────────────────┘│
│                                     │
│  Categoria de Serviço:              │
│  ┌─────────────────────────────────┐│
│  │ Eletricista              ▼      ││
│  └─────────────────────────────────┘│
│                                     │
│  Faixa de Preço:                    │
│  ┌─────────────────────────────────┐│
│  │ 500-1500 MT                     ││
│  └─────────────────────────────────┘│
│                                     │
│  Bairro/Localização:                │
│  ┌─────────────────────────────────┐│
│  │ Bairro A, Maputo                ││
│  └─────────────────────────────────┘│
│                                     │
│  Descrição do Serviço:              │
│  ┌─────────────────────────────────┐│
│  │ Eletricista profissional com 10 ││
│  │ anos de experiência...          ││
│  └─────────────────────────────────┘│
│                                     │
│  ┌─────────────────────────────────┐│
│  │  💾 GUARDAR PERFIL              ││
│  └─────────────────────────────────┘│
│                                     │
│  ┌─────────────────────────────────┐│
│  │  Cancelar                       ││
│  └─────────────────────────────────┘│
│                                     │
└─────────────────────────────────────┘
```

---

### 8. **Tela Notificações** (`notifications-hifi.tsx`)
**Alertas de mensagens, pedidos, avaliações e promoções**

```
┌─────────────────────────────────────┐
│ 🔔 Notificações            [Limpar] │
├─────────────────────────────────────┤
│ [Todas] [Não Lidas]                 │
├─────────────────────────────────────┤
│                                     │
│  ┌─────────────────────────────────┐│
│  │ 💬 Nova mensagem de João Silva ◉││
│  │ Posso ir amanhã às 10h?         ││
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
│ 🏠 Home │ 💬 Chat │ 📋 Histórico │ 👤 Perfil
└─────────────────────────────────────┘
```

---

## Fluxo de Contacto Rápido (Máximo 3 Cliques)

### Cenário: Cliente quer contactar eletricista

```
CLIQUE 1: Home → Selecionar categoria "Eletricista" ou ver profissional no mapa
                 ↓
CLIQUE 2: Lista/Mapa → Clicar em "João Silva" para ver perfil
                 ↓
CLIQUE 3: Perfil → Clicar em "LIGAR" ou "WHATSAPP"
                 ↓
           CONTACTO ESTABELECIDO ✅
```

---

## Fluxo de Avaliação

```
Histórico de Pedidos
         ↓
Clicar em pedido concluído
         ↓
Clicar em "⭐ Avaliar Serviço"
         ↓
Tela de Avaliações
         ↓
Selecionar estrelas + Escrever comentário
         ↓
Clicar em "Enviar"
         ↓
AVALIAÇÃO REGISTADA ✅
```

---

## Fluxo de Chat

```
Home → Clicar em "💬 Chat"
         ↓
Lista de Conversas
         ↓
Clicar em conversa (ex: João Silva)
         ↓
Conversa Aberta
         ↓
Digitar mensagem + Clicar em "📤"
         ↓
MENSAGEM ENVIADA ✅
```

---

## Fluxo de Edição de Perfil (Profissional)

```
Home → Clicar em "👤 Perfil"
         ↓
Perfil do Profissional
         ↓
Clicar em "Editar Perfil"
         ↓
Tela de Edição
         ↓
Preencher campos + Clicar em "💾 GUARDAR PERFIL"
         ↓
PERFIL ATUALIZADO ✅
```

---

## Resumo de Navegação

| Tela | Rota | Acesso | Função |
|------|------|--------|--------|
| Login | `/login-hifi` | Inicial | Autenticação |
| Home | `/home-map-hifi` | Menu | Mapa + Profissionais próximos |
| Perfil Profissional | `/professional-detail-hifi` | Home | Detalhes + Contacto |
| Chat | `/chat-hifi` | Menu | Mensagens em tempo real |
| Histórico | `/history-hifi` | Menu | Pedidos anteriores |
| Avaliações | `/reviews-hifi` | Perfil/Histórico | Comentários + Rating |
| Editar Perfil | `/profile-edit-hifi` | Menu Perfil | Atualizar informações |
| Notificações | `/notifications-hifi` | Menu | Alertas |

---

## Cores Material Design

- **Primária**: #1976D2 (Azul)
- **Secundária**: #0097A7 (Azul-Turquesa)
- **Sucesso**: #4CAF50 (Verde)
- **Aviso**: #FF9800 (Laranja)
- **Erro**: #F44336 (Vermelho)
- **Fundo**: #FFFFFF (Branco)
- **Superfície**: #F5F5F5 (Cinza claro)

---

## Componentes Reutilizáveis

- **Botões grandes** (48px mínimo) com feedback visual
- **Cards** com sombras suaves e bordas arredondadas
- **Avatares** circulares com ícones emoji
- **Bottom Navigation** com 4 abas principais
- **Badges** para notificações não lidas
- **Ratings** com estrelas (★/☆)
- **Formulários** com validação

---

## Requisitos Técnicos Atendidos

✅ Mobile first (portrait 9:16)
✅ UX simples e intuitiva
✅ Máximo 3 cliques para contactar
✅ Componentes realistas (não wireframe)
✅ Design moderno tipo Uber/Airbnb
✅ Material Design com cores azul/branco
✅ Navegação clara entre telas
✅ Feedback visual em todas as interações
