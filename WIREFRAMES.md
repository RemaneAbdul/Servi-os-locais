# Wireframes - Serviços Locais

## Visão Geral
Este documento apresenta os wireframes de baixa fidelidade (preto, branco e cinza) para o aplicativo "Serviços Locais". Cada tela foi projetada com foco em usabilidade, acessibilidade e otimização para dispositivos com internet limitada.

---

## 1. Tela de Login/Registo

### Descrição
Primeira tela do aplicativo onde o utilizador faz login ou cria uma conta. Inclui seleção de tipo de utilizador (Cliente ou Profissional).

### Layout ASCII
```
┌──────────────────────────┐
│                          │
│      ┌──────────────┐    │
│      │      SL      │    │
│      └──────────────┘    │
│   Serviços Locais        │
│   Conecte-se com         │
│   profissionais locais   │
│                          │
│  Tipo de Utilizador      │
│  ┌──────────┬──────────┐ │
│  │ Cliente  │Profis.   │ │
│  └──────────┴──────────┘ │
│                          │
│  Telefone:               │
│  ┌────────────────────┐  │
│  │ +258 82 123 456    │  │
│  └────────────────────┘  │
│                          │
│  Senha:                  │
│  ┌────────────────────┐  │
│  │ ••••••••           │  │
│  └────────────────────┘  │
│                          │
│  ┌────────────────────┐  │
│  │     ENTRAR         │  │
│  └────────────────────┘  │
│                          │
│  Não tem conta?          │
│  Criar conta >           │
│                          │
└──────────────────────────┘
```

### Elementos
- **Logo/Título**: Placeholder com iniciais "SL"
- **Seleção de Tipo**: Dois botões grandes (Cliente/Profissional)
- **Campos de Input**: Telefone e Senha com placeholders
- **Botão Primário**: "ENTRAR" com fundo cinza
- **Link Secundário**: "Criar conta" em texto

### Fluxo
- Cliente seleciona tipo → preenche dados → clica "Entrar" → vai para Home (Categorias)
- Profissional seleciona tipo → preenche dados → clica "Entrar" → vai para Home (Categorias)

---

## 2. Tela Home - Categorias

### Descrição
Tela principal com grid de categorias de profissionais. Inclui barra de pesquisa e menu inferior com abas.

### Layout ASCII
```
┌──────────────────────────┐
│  ┌────────────────────┐  │
│  │ 🔍 Pesquisar...    │  │
│  └────────────────────┘  │
│                          │
│  ┌──────────┬──────────┐ │
│  │   ⚡     │   🧱     │ │
│  │Eletricista│Pedreiro │ │
│  └──────────┴──────────┘ │
│                          │
│  ┌──────────┬──────────┐ │
│  │   🔧     │   🎨     │ │
│  │Canalizador│ Pintor   │ │
│  └──────────┴──────────┘ │
│                          │
│  ┌──────────┬──────────┐ │
│  │   🔩     │   ❄️     │ │
│  │ Mecânico │Frio      │ │
│  └──────────┴──────────┘ │
│                          │
│  ┌──────────┬──────────┐ │
│  │   ⋯      │          │ │
│  │ Outros   │          │ │
│  └──────────┴──────────┘ │
│                          │
├──────────────────────────┤
│ 🏠 Home │👤 Perfil│⚙️ Sair │
└──────────────────────────┘
```

### Elementos
- **Barra de Pesquisa**: Input com placeholder "🔍 Pesquisar categoria..."
- **Grid de Categorias**: 2 colunas, 7 categorias
- **Cartões de Categoria**: Ícone emoji + nome
- **Menu Inferior**: 3 abas (Home, Perfil, Sair)

### Funcionalidades
- Pesquisa filtra categorias em tempo real
- Clique em categoria → vai para Lista de Profissionais
- Menu inferior permite navegação entre telas

---

## 3. Tela Lista de Profissionais

### Descrição
Lista vertical de profissionais de uma categoria selecionada. Cada cartão mostra informações resumidas e botão "Ver Perfil".

### Layout ASCII
```
┌──────────────────────────┐
│ < Eletricistas           │
├──────────────────────────┤
│                          │
│ ┌────────────────────┐   │
│ │ 👤 │ João Silva    │   │
│ │    │ Eletricista   │   │
│ │    │ Bairro A      │   │
│ │    │ ★★★★☆ (12)   │   │
│ │    │ ┌────────────┐│   │
│ │    │ │ Ver Perfil ││   │
│ │    │ └────────────┘│   │
│ └────────────────────┘   │
│                          │
│ ┌────────────────────┐   │
│ │ 👤 │ Maria Santos  │   │
│ │    │ Eletricista   │   │
│ │    │ Bairro B      │   │
│ │    │ ★★★★★ (18)   │   │
│ │    │ ┌────────────┐│   │
│ │    │ │ Ver Perfil ││   │
│ │    │ └────────────┘│   │
│ └────────────────────┘   │
│                          │
│ ┌────────────────────┐   │
│ │ 👤 │ Pedro Neves   │   │
│ │    │ Eletricista   │   │
│ │    │ Bairro C      │   │
│ │    │ ★★★☆☆ (8)    │   │
│ │    │ ┌────────────┐│   │
│ │    │ │ Ver Perfil ││   │
│ │    │ └────────────┘│   │
│ └────────────────────┘   │
│                          │
└──────────────────────────┘
```

### Elementos
- **Cabeçalho**: Botão voltar + nome da categoria
- **Cartões de Profissional**: Avatar + nome + categoria + bairro + avaliação + botão
- **Lista Vertical**: FlatList com scroll

### Funcionalidades
- Botão voltar → volta para Home
- Clique em "Ver Perfil" → vai para Perfil do Profissional
- Scroll para ver mais profissionais

---

## 4. Tela Perfil do Profissional

### Descrição
Detalhes completos do profissional com foto, informações, botões de contacto e avaliações.

### Layout ASCII
```
┌──────────────────────────┐
│ <                        │
├──────────────────────────┤
│                          │
│  ┌────────────────────┐  │
│  │                    │  │
│  │      👤 FOTO       │  │
│  │                    │  │
│  └────────────────────┘  │
│                          │
│  João Silva              │
│  Eletricista             │
│  Bairro A, Maputo        │
│  Preço: 500-1000 MT      │
│  Avaliação: ★★★★☆       │
│                          │
│  Sobre o Serviço:        │
│  Serviços de instalação  │
│  e manutenção elétrica   │
│  residencial e comercial.│
│  Experiência de 10 anos. │
│                          │
│  ┌──────────┬──────────┐ │
│  │ 📞 LIGAR │💬 WHATSAP│ │
│  └──────────┴──────────┘ │
│                          │
│  Avaliações:             │
│  ┌────────────────────┐  │
│  │ ★★★★★ Maria       │  │
│  │ Excelente trabalho!│  │
│  └────────────────────┘  │
│  ┌────────────────────┐  │
│  │ ★★★☆☆ João        │  │
│  │ Bom serviço        │  │
│  └────────────────────┘  │
│                          │
│  Ver todas avaliações >  │
│                          │
└──────────────────────────┘
```

### Elementos
- **Foto Placeholder**: Avatar grande
- **Informações**: Nome, categoria, bairro, preço, avaliação
- **Descrição**: Texto sobre o serviço
- **Botões de Contacto**: "LIGAR" e "WHATSAPP" (botões grandes)
- **Avaliações**: Resumo de comentários com opção "Ver todas"

### Funcionalidades
- Botão "LIGAR" → abre app de telefone
- Botão "WHATSAPP" → abre WhatsApp
- "Ver todas avaliações" → vai para tela de Avaliações

---

## 5. Tela Criar/Editar Perfil (Profissional)

### Descrição
Formulário para profissional criar ou editar seu perfil com foto, dados pessoais e serviços.

### Layout ASCII
```
┌──────────────────────────┐
│ Meu Perfil               │
├──────────────────────────┤
│                          │
│  ┌────────────────────┐  │
│  │      📷 FOTO       │  │
│  │   Mudar Foto       │  │
│  └────────────────────┘  │
│                          │
│  Nome:                   │
│  ┌────────────────────┐  │
│  │ João Silva         │  │
│  └────────────────────┘  │
│                          │
│  Telefone:               │
│  ┌────────────────────┐  │
│  │ +258 82 123 456    │  │
│  └────────────────────┘  │
│                          │
│  Categoria:              │
│  ┌────────────────────┐  │
│  │ Eletricista ▼      │  │
│  └────────────────────┘  │
│                          │
│  Preço Médio:            │
│  ┌────────────────────┐  │
│  │ 500-1000 MT        │  │
│  └────────────────────┘  │
│                          │
│  Bairro:                 │
│  ┌────────────────────┐  │
│  │ Bairro A           │  │
│  └────────────────────┘  │
│                          │
│  Descrição:              │
│  ┌────────────────────┐  │
│  │ Serviços de...     │  │
│  │ ...                │  │
│  └────────────────────┘  │
│                          │
│  ┌────────────────────┐  │
│  │     GUARDAR        │  │
│  └────────────────────┘  │
│                          │
└──────────────────────────┘
```

### Elementos
- **Foto Upload**: Placeholder com botão "Mudar Foto"
- **Campos de Input**: Nome, telefone, preço, bairro
- **Dropdown**: Categoria com lista de opções
- **Textarea**: Descrição do serviço
- **Botão Primário**: "GUARDAR"

### Funcionalidades
- Preencher todos os campos
- Clique em "GUARDAR" → salva perfil
- Dropdown mostra lista de categorias

---

## 6. Tela Avaliações

### Descrição
Lista completa de avaliações e comentários do profissional com opção de adicionar nova avaliação.

### Layout ASCII
```
┌──────────────────────────┐
│ < Avaliações             │
│   João Silva             │
├──────────────────────────┤
│                          │
│  Avaliação Média:        │
│  ★★★★☆ 4.2/5            │
│  15 avaliações           │
│                          │
│  Adicionar Avaliação:    │
│  ┌────────────────────┐  │
│  │ ★☆☆☆☆             │  │
│  └────────────────────┘  │
│  ┌────────────────────┐  │
│  │ Seu comentário...  │  │
│  │ ...                │  │
│  │ ...                │  │
│  └────────────────────┘  │
│  ┌────────────────────┐  │
│  │     ENVIAR         │  │
│  └────────────────────┘  │
│                          │
│  Comentários:            │
│  ┌────────────────────┐  │
│  │ ★★★★★ Maria       │  │
│  │ Excelente!         │  │
│  │ 2 dias atrás       │  │
│  └────────────────────┘  │
│  ┌────────────────────┐  │
│  │ ★★★☆☆ João        │  │
│  │ Bom serviço        │  │
│  │ 1 semana atrás     │  │
│  └────────────────────┘  │
│  ┌────────────────────┐  │
│  │ ★★★★★ Carlos      │  │
│  │ Profissional!      │  │
│  │ 2 semanas atrás    │  │
│  └────────────────────┘  │
│                          │
└──────────────────────────┘
```

### Elementos
- **Cabeçalho**: Botão voltar + nome do profissional
- **Avaliação Média**: Estrelas + pontuação + número de avaliações
- **Formulário de Avaliação**: Seletor de estrelas + textarea + botão "ENVIAR"
- **Lista de Comentários**: Cartões com nome, estrelas, comentário e data

### Funcionalidades
- Seletor de estrelas (1-5)
- Campo de comentário multilinha
- Clique em "ENVIAR" → adiciona avaliação
- Scroll para ver mais comentários

---

## Fluxo de Navegação Completo

```
┌─────────────────────┐
│  Login/Registo      │
│  (Tipo: Cliente)    │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│  Home - Categorias  │
│  (Grid 2x3+1)       │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│  Lista de           │
│  Profissionais      │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│  Perfil do          │
│  Profissional       │
└──────────┬──────────┘
           │
           ├─────────────────────┐
           │                     │
           ▼                     ▼
    ┌────────────┐        ┌────────────┐
    │ Ligar      │        │ Avaliações │
    │ WhatsApp   │        │ (Ver/Add)  │
    └────────────┘        └────────────┘
```

---

## Requisitos de Usabilidade Implementados

| Requisito | Implementação |
|-----------|---------------|
| **Máximo 3 toques** | Login → Categoria → Profissional → Ligar/WhatsApp |
| **Botões grandes** | Mínimo 48px altura, padding generoso |
| **Texto legível** | Fonte 14px+, contraste preto/branco |
| **Navegação clara** | Menu inferior + botão voltar em todas as telas |
| **Feedback visual** | Press states com opacity, cores de wireframe |
| **Offline parcial** | Dados mock em AsyncStorage (pronto para integração) |
| **Mobile first** | Orientação vertical (9:16), one-handed usage |
| **Minimalista** | Sem cores reais, sem imagens, apenas estrutura |

---

## Paleta de Cores (Wireframe)

| Elemento | Cor | Hex |
|----------|-----|-----|
| Fundo | Branco | #FFFFFF |
| Texto Principal | Preto | #000000 |
| Texto Secundário | Cinza Escuro | #666666 |
| Bordas/Divisores | Cinza Claro | #CCCCCC |
| Botões Primários | Cinza Médio | #999999 |
| Botões Secundários | Cinza Claro | #DDDDDD |
| Superfícies | Cinza Muito Claro | #F5F5F5 |

---

## Próximas Fases

1. **Integração de Dados**: Conectar com backend/API
2. **Autenticação Real**: Implementar login com servidor
3. **Persistência**: AsyncStorage para dados locais
4. **Otimizações**: Lazy loading, cache, offline mode
5. **Testes**: Unit tests e testes E2E
6. **Deploy**: Build para iOS e Android

