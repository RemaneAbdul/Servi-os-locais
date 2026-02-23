# Instruções de Uso - Serviços Locais

## Visão Geral do Aplicativo

O aplicativo "Serviços Locais" foi desenvolvido com wireframes de baixa fidelidade (preto, branco e cinza) para conectar clientes a profissionais locais informais em Moçambique. A interface é minimalista, intuitiva e otimizada para dispositivos com internet limitada.

---

## Como Começar

### 1. Aceder ao Aplicativo

O aplicativo está disponível em:
- **Web**: https://8081-ix14x8jsyrnowng3zs87u-2848da2c.us1.manus.computer
- **Mobile (Expo Go)**: Escaneie o código QR disponível no painel de desenvolvimento

### 2. Primeira Utilização

Ao abrir o aplicativo, você será direcionado para a tela de **Login/Registo**:

1. Selecione seu tipo de utilizador:
   - **Cliente**: Se procura profissionais para contratar
   - **Profissional**: Se oferece serviços

2. Preencha seus dados:
   - Telefone (ex: +258 82 123 456)
   - Senha

3. Clique em **"ENTRAR"**

---

## Fluxo para Clientes

### Passo 1: Selecionar Categoria
Após fazer login, você verá a tela **Home** com um grid de categorias:

- **Eletricista**: Serviços elétricos residenciais e comerciais
- **Pedreiro**: Construção e alvenaria
- **Canalizador**: Serviços de encanamento
- **Pintor**: Pintura residencial e comercial
- **Mecânico**: Reparação de veículos
- **Técnico de Frio**: Ar condicionado e refrigeração
- **Outros**: Outras categorias

**Funcionalidades**:
- Use a barra de pesquisa para filtrar categorias
- Clique em qualquer cartão para ver profissionais

### Passo 2: Visualizar Profissionais
Na tela **Lista de Profissionais**, você verá:

- **Avatar**: Foto do profissional (placeholder)
- **Nome**: Nome completo
- **Categoria**: Tipo de serviço
- **Bairro**: Localização
- **Avaliação**: Estrelas (★) com número de avaliações
- **Botão "Ver Perfil"**: Para mais detalhes

**Dica**: Role a tela para ver mais profissionais

### Passo 3: Contactar Profissional
Clique em **"Ver Perfil"** para ver detalhes completos:

1. **Informações do Profissional**:
   - Foto grande
   - Nome completo
   - Categoria e bairro
   - Preço médio
   - Avaliação média
   - Descrição dos serviços

2. **Contactar** (máximo 3 toques):
   - **Botão "LIGAR"**: Abre a app de telefone para chamar
   - **Botão "WHATSAPP"**: Abre WhatsApp para mensagem

3. **Ver Avaliações**:
   - Clique em "Ver todas avaliações" para ver comentários completos
   - Adicione sua própria avaliação após usar o serviço

---

## Fluxo para Profissionais

### Passo 1: Criar/Editar Perfil
Após fazer login como profissional, aceda à aba **"Perfil"** no menu inferior:

1. **Foto do Perfil**:
   - Clique em "Mudar Foto" para upload
   - Use uma foto clara e profissional

2. **Preencha os Dados**:
   - **Nome**: Seu nome completo
   - **Telefone**: Seu número de contacto
   - **Categoria**: Selecione sua especialidade (dropdown)
   - **Preço Médio**: Faixa de preço (ex: 500-1000 MT)
   - **Bairro**: Sua localização
   - **Descrição**: Detalhe seus serviços

3. **Guardar**:
   - Clique em **"GUARDAR"** para salvar seu perfil

### Passo 2: Gerenciar Avaliações
Seu perfil será visível para clientes que procuram sua categoria:

1. Clientes podem ver seu perfil e avaliar
2. Aceda à tela de **Avaliações** para ver comentários
3. Responda a avaliações para melhorar sua reputação

### Passo 3: Receber Contactos
Quando clientes clicarem em **"LIGAR"** ou **"WHATSAPP"**, você receberá:

- Chamadas telefônicas diretas
- Mensagens WhatsApp
- Oportunidades de negócio

---

## Menu Inferior (Navegação)

O aplicativo possui 3 abas principais no menu inferior:

| Aba | Função | Acesso |
|-----|--------|--------|
| 🏠 **Home** | Ver categorias e profissionais | Sempre disponível |
| 👤 **Perfil** | Editar seu perfil (profissional) | Sempre disponível |
| ⚙️ **Sair** | Configurações e logout | Sempre disponível |

---

## Dicas de Usabilidade

### Para Clientes
1. **Pesquisa Rápida**: Use a barra de pesquisa para encontrar categorias rapidamente
2. **Avaliações**: Leia as avaliações antes de contactar um profissional
3. **Comparação**: Compare preços e avaliações entre profissionais
4. **Contacto Direto**: Máximo 3 toques para ligar ou enviar WhatsApp

### Para Profissionais
1. **Perfil Completo**: Preencha todos os campos para melhor visibilidade
2. **Descrição Clara**: Detalhe bem seus serviços para atrair clientes
3. **Preço Competitivo**: Defina preços realistas e competitivos
4. **Avaliações**: Trabalhe bem para receber boas avaliações
5. **Responsividade**: Responda rapidamente a contactos de clientes

---

## Recursos de Wireframe

### Paleta de Cores
O aplicativo usa cores de wireframe para foco em usabilidade:
- **Branco**: Fundo principal
- **Preto**: Texto principal
- **Cinza**: Elementos secundários e bordas

### Botões
- **Botões Cinza Médio (#999999)**: Ações primárias (Entrar, Guardar, Enviar)
- **Botões com Borda**: Ações secundárias (Ver Perfil, Mudar Foto)

### Feedback Visual
- Botões mudam de opacidade ao serem pressionados
- Cartões destacam-se com sombra e borda
- Ícones emoji para fácil identificação

---

## Dados Mock (Teste)

O aplicativo inclui dados de teste para demonstração:

### Profissionais Mock
1. **João Silva** - Eletricista (Bairro A)
2. **Maria Santos** - Eletricista (Bairro B)
3. **Pedro Neves** - Eletricista (Bairro C)
4. **Ana Costa** - Pedreiro (Bairro A)
5. **Carlos Ferreira** - Canalizador (Bairro D)

### Avaliações Mock
- Cada profissional tem 2-3 avaliações de exemplo
- Avaliações incluem nome, estrelas e comentário

---

## Funcionalidades Implementadas

| Funcionalidade | Status | Descrição |
|---|---|---|
| Login/Registo | ✅ | Seleção de tipo e autenticação mock |
| Grid de Categorias | ✅ | 7 categorias com pesquisa |
| Lista de Profissionais | ✅ | Cartões com informações resumidas |
| Perfil Detalhado | ✅ | Informações completas do profissional |
| Contacto Direto | ✅ | Ligar e WhatsApp integrados |
| Avaliações | ✅ | Ver e adicionar comentários |
| Editar Perfil | ✅ | Formulário para profissionais |
| Menu Inferior | ✅ | Navegação entre telas |
| Wireframe Visual | ✅ | Design minimalista preto/branco/cinza |

---

## Próximas Melhorias

1. **Backend Integration**: Conectar com servidor real
2. **Autenticação Real**: Login com banco de dados
3. **Persistência de Dados**: AsyncStorage para cache local
4. **Geolocalização**: Mostrar profissionais próximos
5. **Notificações**: Alertas de novos contactos
6. **Pagamentos**: Integração com sistema de pagamento
7. **Chat**: Mensagens diretas entre cliente e profissional
8. **Histórico**: Manter registro de contactos anteriores

---

## Suporte e Feedback

Para reportar problemas ou sugerir melhorias:

1. Aceda à aba **"Sair"** → **"Ajuda"**
2. Descreva o problema ou sugestão
3. Envie feedback para a equipe de desenvolvimento

---

## Requisitos Técnicos

- **Plataforma**: iOS 12+, Android 7+, Web
- **Conexão**: Internet limitada suportada
- **Armazenamento**: ~50MB
- **Permissões**: Telefone, WhatsApp (para contacto direto)

---

## Glossário

| Termo | Significado |
|-------|------------|
| **Cliente** | Utilizador que procura profissionais |
| **Profissional** | Utilizador que oferece serviços |
| **Categoria** | Tipo de serviço (Eletricista, Pedreiro, etc.) |
| **Bairro** | Localização/zona do profissional |
| **Avaliação** | Comentário e estrelas deixados por clientes |
| **Wireframe** | Design de baixa fidelidade sem cores reais |

---

## Perguntas Frequentes

**P: Como faço login?**
R: Selecione seu tipo (Cliente/Profissional), preencha telefone e senha, clique "Entrar".

**P: Posso mudar de tipo de utilizador?**
R: Sim, aceda a "Sair" → "Sair" e faça login novamente com outro tipo.

**P: Como contacto um profissional?**
R: Clique em "Ver Perfil" → "LIGAR" ou "WHATSAPP".

**P: Como adiciono uma avaliação?**
R: Aceda ao perfil do profissional → "Ver todas avaliações" → preencha formulário → "ENVIAR".

**P: Meu perfil é visível para clientes?**
R: Sim, após preencher e guardar seu perfil, clientes podem encontrá-lo na sua categoria.

