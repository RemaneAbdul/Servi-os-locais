# Design - Serviços Locais

## Visão Geral
Aplicativo móvel para conectar clientes a profissionais locais informais em Moçambique. Interface minimalista, wireframes de baixa fidelidade (preto, branco, cinza), otimizado para internet limitada e dispositivos simples.

## Princípios de Design
- **Mobile Portrait (9:16)**: Orientação vertical exclusiva
- **One-handed Usage**: Controles acessíveis com uma mão
- **Minimalista**: Sem cores reais, sem imagens, apenas estrutura
- **Acessibilidade**: Botões grandes, texto legível, poucos passos
- **Performance**: Leve, funciona com internet limitada
- **Simplicidade**: Intuitivo para iniciantes em tecnologia

## Paleta de Cores (Wireframe)
- **Fundo**: Branco (#FFFFFF)
- **Texto Principal**: Preto (#000000)
- **Texto Secundário**: Cinza escuro (#666666)
- **Bordas/Divisores**: Cinza claro (#CCCCCC)
- **Botões Primários**: Cinza médio (#999999)
- **Botões Secundários**: Cinza claro (#DDDDDD)

## Telas do Aplicativo

### 1. Tela de Login/Registo
**Objetivo**: Autenticação e seleção de tipo de utilizador

**Elementos**:
- Logo/título no topo (placeholder)
- Seleção de tipo: "Cliente" ou "Profissional" (botões grandes)
- Campo de telefone (input)
- Campo de senha (input)
- Botão "Entrar" (primário, grande)
- Link "Criar conta" (texto secundário)

**Layout**:
```
┌─────────────────────┐
│   [LOGO/TÍTULO]     │
│                     │
│  Tipo de Utilizador │
│  ┌───────┬───────┐  │
│  │Cliente│Profis.│  │
│  └───────┴───────┘  │
│                     │
│  Telefone:          │
│  ┌─────────────────┐│
│  │ +258 ...        ││
│  └─────────────────┘│
│                     │
│  Senha:             │
│  ┌─────────────────┐│
│  │ ••••••••        ││
│  └─────────────────┘│
│                     │
│  ┌─────────────────┐│
│  │    ENTRAR       ││
│  └─────────────────┘│
│                     │
│  Criar conta >      │
└─────────────────────┘
```

### 2. Tela Home (Categorias)
**Objetivo**: Visualizar e selecionar categorias de profissionais

**Elementos**:
- Barra de pesquisa no topo
- Grid de categorias em cartões (2 colunas)
- Menu inferior com abas: Home | Perfil | Sair
- Cada cartão mostra ícone/placeholder e nome da categoria

**Categorias**:
1. Eletricista
2. Pedreiro
3. Canalizador
4. Pintor
5. Mecânico
6. Técnico de Frio
7. Outros

**Layout**:
```
┌─────────────────────┐
│ ┌─────────────────┐ │
│ │ 🔍 Pesquisar    │ │
│ └─────────────────┘ │
│                     │
│ ┌────────┬────────┐ │
│ │Eletr.  │Pedreiro│ │
│ │  [  ]  │  [  ]  │ │
│ └────────┴────────┘ │
│ ┌────────┬────────┐ │
│ │Canaliz.│Pintor  │ │
│ │  [  ]  │  [  ]  │ │
│ └────────┴────────┘ │
│ ┌────────┬────────┐ │
│ │Mecânico│Frio    │ │
│ │  [  ]  │  [  ]  │ │
│ └────────┴────────┘ │
│ ┌────────┬────────┐ │
│ │Outros  │        │ │
│ │  [  ]  │        │ │
│ └────────┴────────┘ │
│                     │
├─────────────────────┤
│ Home │ Perfil│ Sair │
└─────────────────────┘
```

### 3. Tela Lista de Profissionais
**Objetivo**: Listar profissionais de uma categoria selecionada

**Elementos**:
- Cabeçalho com nome da categoria
- Botão voltar
- Lista vertical de cartões de profissionais
- Cada cartão contém:
  - Avatar/foto (placeholder)
  - Nome
  - Categoria
  - Bairro/localização
  - Avaliação em estrelas
  - Botão "Ver Perfil"

**Layout**:
```
┌─────────────────────┐
│ < Eletricistas      │
├─────────────────────┤
│ ┌─────────────────┐ │
│ │ [FOTO]│João    │ │
│ │       │Eletric.│ │
│ │       │Bairro A│ │
│ │       │★★★★☆  │ │
│ │       │Ver Perf│ │
│ └─────────────────┘ │
│ ┌─────────────────┐ │
│ │ [FOTO]│Maria   │ │
│ │       │Eletric.│ │
│ │       │Bairro B│ │
│ │       │★★★★★  │ │
│ │       │Ver Perf│ │
│ └─────────────────┘ │
│ ┌─────────────────┐ │
│ │ [FOTO]│Pedro   │ │
│ │       │Eletric.│ │
│ │       │Bairro C│ │
│ │       │★★★☆☆  │ │
│ │       │Ver Perf│ │
│ └─────────────────┘ │
└─────────────────────┘
```

### 4. Tela Perfil do Profissional
**Objetivo**: Visualizar detalhes completos do profissional e contactá-lo

**Elementos**:
- Botão voltar
- Foto grande (placeholder)
- Nome completo
- Categoria
- Bairro
- Preço médio
- Avaliação média (estrelas)
- Descrição do serviço
- Botões grandes: "Ligar" e "WhatsApp"
- Lista de avaliações/comentários

**Layout**:
```
┌─────────────────────┐
│ <                   │
│ ┌─────────────────┐ │
│ │                 │ │
│ │    [FOTO]       │ │
│ │                 │ │
│ └─────────────────┘ │
│ João Silva          │
│ Eletricista         │
│ Bairro A, Maputo    │
│ Preço: 500-1000 MT  │
│ Avaliação: ★★★★☆   │
│                     │
│ Descrição:          │
│ Serviços de...      │
│                     │
│ ┌────────┬────────┐ │
│ │ LIGAR  │WHATSAPP│ │
│ └────────┴────────┘ │
│                     │
│ Avaliações:         │
│ ┌─────────────────┐ │
│ │★★★★★ Maria     │ │
│ │Excelente!       │ │
│ └─────────────────┘ │
│ ┌─────────────────┐ │
│ │★★★☆☆ João      │ │
│ │Bom serviço      │ │
│ └─────────────────┘ │
└─────────────────────┘
```

### 5. Tela Criar/Editar Perfil (Profissional)
**Objetivo**: Permitir profissional criar ou editar seu perfil

**Elementos**:
- Cabeçalho: "Meu Perfil" ou "Editar Perfil"
- Botão upload de foto (placeholder)
- Formulário com campos:
  - Nome (input)
  - Telefone (input)
  - Categoria (dropdown)
  - Preço médio (input)
  - Bairro (input)
  - Descrição (textarea)
- Botão "Guardar" (primário, grande)

**Layout**:
```
┌─────────────────────┐
│ Meu Perfil          │
├─────────────────────┤
│ ┌─────────────────┐ │
│ │   [FOTO]        │ │
│ │  Mudar Foto     │ │
│ └─────────────────┘ │
│                     │
│ Nome:               │
│ ┌─────────────────┐ │
│ │ João Silva      ││
│ └─────────────────┘ │
│                     │
│ Telefone:           │
│ ┌─────────────────┐ │
│ │ +258 82 123 456 ││
│ └─────────────────┘ │
│                     │
│ Categoria:          │
│ ┌─────────────────┐ │
│ │ Eletricista ▼   ││
│ └─────────────────┘ │
│                     │
│ Preço Médio:        │
│ ┌─────────────────┐ │
│ │ 500-1000 MT     ││
│ └─────────────────┘ │
│                     │
│ Bairro:             │
│ ┌─────────────────┐ │
│ │ Bairro A        ││
│ └─────────────────┘ │
│                     │
│ Descrição:          │
│ ┌─────────────────┐ │
│ │ Serviços de...  ││
│ │ ...             ││
│ └─────────────────┘ │
│                     │
│ ┌─────────────────┐ │
│ │    GUARDAR      ││
│ └─────────────────┘ │
└─────────────────────┘
```

### 6. Tela Avaliações
**Objetivo**: Visualizar e adicionar avaliações

**Elementos**:
- Cabeçalho com nome do profissional
- Avaliação média geral (estrelas)
- Lista de comentários/avaliações existentes
- Campo para adicionar nova avaliação:
  - Seletor de estrelas
  - Campo de comentário (textarea)
  - Botão "Enviar"

**Layout**:
```
┌─────────────────────┐
│ < Avaliações        │
│   João Silva        │
├─────────────────────┤
│ Avaliação Média:    │
│ ★★★★☆ (4.2/5)      │
│ 15 avaliações       │
│                     │
│ Adicionar Avaliação:│
│ ┌─────────────────┐ │
│ │ ★☆☆☆☆          ││
│ └─────────────────┘ │
│ ┌─────────────────┐ │
│ │ Seu comentário..││
│ │ ...             ││
│ └─────────────────┘ │
│ ┌─────────────────┐ │
│ │    ENVIAR       ││
│ └─────────────────┘ │
│                     │
│ Comentários:        │
│ ┌─────────────────┐ │
│ │★★★★★ Maria     │ │
│ │Excelente!       │ │
│ │2 dias atrás     │ │
│ └─────────────────┘ │
│ ┌─────────────────┐ │
│ │★★★☆☆ João      │ │
│ │Bom serviço      │ │
│ │1 semana atrás   │ │
│ └─────────────────┘ │
└─────────────────────┘
```

## Fluxo de Navegação

```
Login/Registo
    ↓
    ├─→ [Cliente] → Home (Categorias)
    │       ↓
    │       → Lista de Profissionais
    │           ↓
    │           → Perfil do Profissional
    │               ↓
    │               → Avaliações
    │
    └─→ [Profissional] → Meu Perfil (Editar)
            ↓
            → Home (Categorias)
                ↓
                → Perfil do Profissional
                    ↓
                    → Avaliações
```

## Requisitos de Usabilidade

1. **Máximo 3 toques para contactar**: Login → Categoria → Profissional → Ligar/WhatsApp
2. **Botões grandes**: Mínimo 48px de altura para toque confortável
3. **Texto legível**: Tamanho mínimo 14px, contraste adequado
4. **Navegação clara**: Menu inferior sempre visível, botão voltar em todas as telas
5. **Feedback visual**: Estados de pressão em botões, indicadores de carregamento
6. **Offline parcial**: Dados em cache local (AsyncStorage) para visualização

## Componentes Reutilizáveis

- **Button**: Botão primário/secundário com estados
- **Card**: Cartão com sombra e borda
- **Input**: Campo de texto com placeholder
- **Textarea**: Campo de texto multilinha
- **Dropdown**: Seletor de opções
- **StarRating**: Visualizador e seletor de estrelas
- **Avatar**: Placeholder para fotos
- **BottomTabBar**: Menu inferior com abas
- **Header**: Cabeçalho com botão voltar

## Próximos Passos

1. Criar estrutura de navegação com Expo Router
2. Implementar componentes base (Button, Card, Input, etc.)
3. Desenvolver as 6 telas com wireframes de baixa fidelidade
4. Integrar fluxo de navegação entre telas
5. Adicionar dados mock para testes
6. Otimizar para performance em conexões lentas
