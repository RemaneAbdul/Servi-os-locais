# API REST Documentation - Serviços Locais v2.0

## Base URL

```
Production: https://api.servicoslocais.mz/v1
Development: http://localhost:3000/api/v1
```

## Authentication

Todos os endpoints (exceto login/register) requerem autenticação via JWT token no header:

```
Authorization: Bearer <jwt_token>
```

---

## 1. AUTENTICAÇÃO

### 1.1 Registrar Novo Utilizador

**POST** `/auth/register`

```json
{
  "phone": "+258 82 123 456",
  "email": "user@example.com",
  "password": "senha_segura_123",
  "first_name": "João",
  "last_name": "Silva",
  "user_type": "client"
}
```

**Response (201):**
```json
{
  "success": true,
  "data": {
    "id": "uuid",
    "phone": "+258 82 123 456",
    "email": "user@example.com",
    "user_type": "client",
    "first_name": "João",
    "last_name": "Silva",
    "created_at": "2026-02-24T10:00:00Z"
  },
  "token": "eyJhbGciOiJIUzI1NiIs..."
}
```

### 1.2 Login

**POST** `/auth/login`

```json
{
  "phone": "+258 82 123 456",
  "password": "senha_segura_123"
}
```

**Response (200):**
```json
{
  "success": true,
  "data": {
    "id": "uuid",
    "phone": "+258 82 123 456",
    "user_type": "client",
    "first_name": "João"
  },
  "token": "eyJhbGciOiJIUzI1NiIs..."
}
```

### 1.3 Logout

**POST** `/auth/logout`

**Response (200):**
```json
{
  "success": true,
  "message": "Logout bem-sucedido"
}
```

---

## 2. PROFISSIONAIS

### 2.1 Listar Profissionais com Filtros

**GET** `/professionals?category_id=uuid&min_price=500&max_price=2000&latitude=10.5&longitude=35.3&max_distance_km=5&min_rating=4&page=1&limit=20`

**Query Parameters:**
- `category_id` (optional): UUID da categoria
- `min_price` (optional): Preço mínimo
- `max_price` (optional): Preço máximo
- `latitude` (optional): Latitude para busca por proximidade
- `longitude` (optional): Longitude para busca por proximidade
- `max_distance_km` (optional): Distância máxima em km
- `min_rating` (optional): Avaliação mínima (1-5)
- `page` (optional): Número da página (default: 1)
- `limit` (optional): Itens por página (default: 20)

**Response (200):**
```json
{
  "success": true,
  "data": [
    {
      "id": "uuid",
      "user_id": "uuid",
      "first_name": "João",
      "last_name": "Silva",
      "profile_photo_url": "https://...",
      "rating": 4.8,
      "total_reviews": 24,
      "category_name": "Eletricista",
      "icon_emoji": "⚡",
      "price_min": 500,
      "price_max": 1500,
      "availability_status": "available",
      "latitude": 10.5,
      "longitude": 35.3,
      "address": "Rua da Paz, 123",
      "neighborhood": "Bairro A",
      "city": "Maputo",
      "response_time_minutes": 30,
      "completion_rate": 0.95,
      "total_completed_services": 150,
      "distance_km": 0.8
    }
  ],
  "pagination": {
    "total": 45,
    "page": 1,
    "limit": 20,
    "total_pages": 3
  }
}
```

### 2.2 Obter Detalhes do Profissional

**GET** `/professionals/{professional_id}`

**Response (200):**
```json
{
  "success": true,
  "data": {
    "id": "uuid",
    "user_id": "uuid",
    "first_name": "João",
    "last_name": "Silva",
    "profile_photo_url": "https://...",
    "bio": "Eletricista profissional com 10 anos de experiência",
    "rating": 4.8,
    "total_reviews": 24,
    "category_name": "Eletricista",
    "price_min": 500,
    "price_max": 1500,
    "availability_status": "available",
    "address": "Rua da Paz, 123",
    "neighborhood": "Bairro A",
    "city": "Maputo",
    "response_time_minutes": 30,
    "completion_rate": 0.95,
    "total_completed_services": 150,
    "experience_years": 10,
    "is_verified": true,
    "services": [
      {
        "id": "uuid",
        "name": "Instalação de Tomada",
        "description": "Instalação de tomadas e interruptores",
        "price": 500,
        "duration_minutes": 60
      }
    ],
    "recent_reviews": [
      {
        "id": "uuid",
        "reviewer_name": "Maria Costa",
        "rating": 5,
        "comment": "Excelente profissional!",
        "created_at": "2026-02-22T10:00:00Z"
      }
    ]
  }
}
```

### 2.3 Criar Perfil de Profissional

**POST** `/professionals` (requer autenticação + user_type = professional)

```json
{
  "category_id": "uuid",
  "bio": "Eletricista profissional com 10 anos de experiência",
  "experience_years": 10,
  "price_min": 500,
  "price_max": 1500,
  "address": "Rua da Paz, 123",
  "neighborhood": "Bairro A",
  "city": "Maputo",
  "province": "Gaza",
  "response_time_minutes": 30
}
```

**Response (201):**
```json
{
  "success": true,
  "data": {
    "id": "uuid",
    "user_id": "uuid",
    "category_id": "uuid",
    "bio": "Eletricista profissional com 10 anos de experiência",
    "experience_years": 10,
    "price_min": 500,
    "price_max": 1500,
    "availability_status": "available",
    "created_at": "2026-02-24T10:00:00Z"
  }
}
```

### 2.4 Atualizar Perfil de Profissional

**PATCH** `/professionals/{professional_id}` (requer autenticação)

```json
{
  "bio": "Eletricista profissional com 15 anos de experiência",
  "price_min": 600,
  "price_max": 2000,
  "availability_status": "busy"
}
```

**Response (200):**
```json
{
  "success": true,
  "data": {
    "id": "uuid",
    "bio": "Eletricista profissional com 15 anos de experiência",
    "price_min": 600,
    "price_max": 2000,
    "availability_status": "busy",
    "updated_at": "2026-02-24T11:00:00Z"
  }
}
```

---

## 3. AGENDAMENTOS

### 3.1 Criar Agendamento

**POST** `/bookings` (requer autenticação + user_type = client)

```json
{
  "professional_id": "uuid",
  "service_id": "uuid",
  "booking_date": "2026-02-25",
  "booking_time": "10:00",
  "duration_minutes": 60,
  "location_address": "Rua da Paz, 456",
  "latitude": 10.5,
  "longitude": 35.3,
  "description": "Preciso de uma nova tomada na sala"
}
```

**Response (201):**
```json
{
  "success": true,
  "data": {
    "id": "uuid",
    "client_id": "uuid",
    "professional_id": "uuid",
    "booking_date": "2026-02-25",
    "booking_time": "10:00",
    "status": "pending",
    "price_quoted": 500,
    "created_at": "2026-02-24T10:00:00Z"
  }
}
```

### 3.2 Listar Agendamentos do Utilizador

**GET** `/bookings?status=pending&page=1&limit=20` (requer autenticação)

**Query Parameters:**
- `status` (optional): pending, accepted, rejected, in_progress, completed, cancelled
- `page` (optional): Número da página
- `limit` (optional): Itens por página

**Response (200):**
```json
{
  "success": true,
  "data": [
    {
      "id": "uuid",
      "professional_name": "João Silva",
      "service_name": "Instalação de Tomada",
      "booking_date": "2026-02-25",
      "booking_time": "10:00",
      "status": "pending",
      "price_quoted": 500,
      "created_at": "2026-02-24T10:00:00Z"
    }
  ],
  "pagination": {
    "total": 5,
    "page": 1,
    "limit": 20,
    "total_pages": 1
  }
}
```

### 3.3 Atualizar Status do Agendamento

**PATCH** `/bookings/{booking_id}` (requer autenticação)

```json
{
  "status": "accepted"
}
```

**Response (200):**
```json
{
  "success": true,
  "data": {
    "id": "uuid",
    "status": "accepted",
    "updated_at": "2026-02-24T11:00:00Z"
  }
}
```

---

## 4. PAGAMENTOS

### 4.1 Criar Pagamento

**POST** `/payments` (requer autenticação)

```json
{
  "booking_id": "uuid",
  "amount": 550,
  "payment_method": "wallet",
  "currency": "MZN"
}
```

**Response (201):**
```json
{
  "success": true,
  "data": {
    "id": "uuid",
    "booking_id": "uuid",
    "amount": 550,
    "status": "processing",
    "transaction_id": "TXN123456",
    "created_at": "2026-02-24T10:00:00Z"
  }
}
```

### 4.2 Confirmar Pagamento

**POST** `/payments/{payment_id}/confirm`

```json
{
  "confirmation_code": "123456"
}
```

**Response (200):**
```json
{
  "success": true,
  "data": {
    "id": "uuid",
    "status": "completed",
    "transaction_id": "TXN123456",
    "completed_at": "2026-02-24T10:05:00Z"
  }
}
```

### 4.3 Listar Transações da Carteira

**GET** `/wallet/transactions?page=1&limit=20` (requer autenticação)

**Response (200):**
```json
{
  "success": true,
  "data": {
    "balance": 1000,
    "transactions": [
      {
        "id": "uuid",
        "type": "debit",
        "amount": 550,
        "description": "Pagamento para João Silva",
        "created_at": "2026-02-24T10:00:00Z"
      }
    ]
  },
  "pagination": {
    "total": 15,
    "page": 1,
    "limit": 20,
    "total_pages": 1
  }
}
```

---

## 5. AVALIAÇÕES

### 5.1 Criar Avaliação

**POST** `/reviews` (requer autenticação)

```json
{
  "booking_id": "uuid",
  "rating": 5,
  "comment": "Excelente profissional! Trabalho rápido e bem feito.",
  "professionalism_rating": 5,
  "punctuality_rating": 5,
  "quality_rating": 5,
  "would_recommend": true
}
```

**Response (201):**
```json
{
  "success": true,
  "data": {
    "id": "uuid",
    "booking_id": "uuid",
    "rating": 5,
    "comment": "Excelente profissional! Trabalho rápido e bem feito.",
    "created_at": "2026-02-24T10:00:00Z"
  }
}
```

### 5.2 Listar Avaliações de um Profissional

**GET** `/professionals/{professional_id}/reviews?page=1&limit=10`

**Response (200):**
```json
{
  "success": true,
  "data": {
    "average_rating": 4.8,
    "total_reviews": 24,
    "reviews": [
      {
        "id": "uuid",
        "reviewer_name": "Maria Costa",
        "rating": 5,
        "comment": "Excelente profissional!",
        "professionalism_rating": 5,
        "punctuality_rating": 5,
        "quality_rating": 5,
        "created_at": "2026-02-22T10:00:00Z"
      }
    ]
  },
  "pagination": {
    "total": 24,
    "page": 1,
    "limit": 10,
    "total_pages": 3
  }
}
```

---

## 6. CHAT

### 6.1 Enviar Mensagem

**POST** `/chats` (requer autenticação)

```json
{
  "recipient_id": "uuid",
  "booking_id": "uuid",
  "message": "Olá! Você faz trabalhos de eletricidade?",
  "message_type": "text"
}
```

**Response (201):**
```json
{
  "success": true,
  "data": {
    "id": "uuid",
    "sender_id": "uuid",
    "recipient_id": "uuid",
    "message": "Olá! Você faz trabalhos de eletricidade?",
    "created_at": "2026-02-24T10:00:00Z"
  }
}
```

### 6.2 Listar Conversas

**GET** `/chats/conversations?page=1&limit=20` (requer autenticação)

**Response (200):**
```json
{
  "success": true,
  "data": [
    {
      "id": "uuid",
      "other_user_id": "uuid",
      "other_user_name": "João Silva",
      "other_user_photo": "https://...",
      "last_message": "Posso ir amanhã às 10h?",
      "last_message_time": "2026-02-24T10:00:00Z",
      "unread_count": 2
    }
  ],
  "pagination": {
    "total": 5,
    "page": 1,
    "limit": 20,
    "total_pages": 1
  }
}
```

### 6.3 Obter Histórico de Mensagens

**GET** `/chats/conversation/{user_id}?page=1&limit=50` (requer autenticação)

**Response (200):**
```json
{
  "success": true,
  "data": [
    {
      "id": "uuid",
      "sender_id": "uuid",
      "sender_name": "João Silva",
      "message": "Olá! Você faz trabalhos de eletricidade?",
      "message_type": "text",
      "created_at": "2026-02-24T10:00:00Z",
      "is_read": true
    }
  ],
  "pagination": {
    "total": 25,
    "page": 1,
    "limit": 50,
    "total_pages": 1
  }
}
```

### 6.4 Marcar Mensagens como Lidas

**PATCH** `/chats/mark-as-read` (requer autenticação)

```json
{
  "user_id": "uuid"
}
```

**Response (200):**
```json
{
  "success": true,
  "message": "Mensagens marcadas como lidas"
}
```

---

## 7. NOTIFICAÇÕES

### 7.1 Listar Notificações

**GET** `/notifications?is_read=false&page=1&limit=20` (requer autenticação)

**Query Parameters:**
- `is_read` (optional): true, false
- `page` (optional): Número da página
- `limit` (optional): Itens por página

**Response (200):**
```json
{
  "success": true,
  "data": [
    {
      "id": "uuid",
      "title": "Nova mensagem de João Silva",
      "message": "Posso ir amanhã às 10h?",
      "notification_type": "message",
      "is_read": false,
      "created_at": "2026-02-24T10:00:00Z"
    }
  ],
  "unread_count": 5,
  "pagination": {
    "total": 12,
    "page": 1,
    "limit": 20,
    "total_pages": 1
  }
}
```

### 7.2 Marcar Notificação como Lida

**PATCH** `/notifications/{notification_id}/read` (requer autenticação)

**Response (200):**
```json
{
  "success": true,
  "data": {
    "id": "uuid",
    "is_read": true,
    "read_at": "2026-02-24T10:05:00Z"
  }
}
```

---

## 8. FAVORITOS

### 8.1 Adicionar Profissional aos Favoritos

**POST** `/favorites` (requer autenticação)

```json
{
  "professional_id": "uuid"
}
```

**Response (201):**
```json
{
  "success": true,
  "data": {
    "id": "uuid",
    "professional_id": "uuid",
    "created_at": "2026-02-24T10:00:00Z"
  }
}
```

### 8.2 Listar Favoritos

**GET** `/favorites?page=1&limit=20` (requer autenticação)

**Response (200):**
```json
{
  "success": true,
  "data": [
    {
      "id": "uuid",
      "professional_id": "uuid",
      "first_name": "João",
      "last_name": "Silva",
      "category_name": "Eletricista",
      "rating": 4.8,
      "price_min": 500,
      "price_max": 1500
    }
  ],
  "pagination": {
    "total": 3,
    "page": 1,
    "limit": 20,
    "total_pages": 1
  }
}
```

### 8.3 Remover de Favoritos

**DELETE** `/favorites/{professional_id}` (requer autenticação)

**Response (200):**
```json
{
  "success": true,
  "message": "Removido dos favoritos"
}
```

---

## 9. CATEGORIAS

### 9.1 Listar Categorias

**GET** `/categories`

**Response (200):**
```json
{
  "success": true,
  "data": [
    {
      "id": "uuid",
      "name": "Eletricista",
      "slug": "eletricista",
      "icon_emoji": "⚡",
      "description": "Serviços de eletricidade"
    },
    {
      "id": "uuid",
      "name": "Pedreiro",
      "slug": "pedreiro",
      "icon_emoji": "🧱",
      "description": "Serviços de alvenaria"
    }
  ]
}
```

---

## 10. ADMIN

### 10.1 Dashboard Admin

**GET** `/admin/dashboard` (requer autenticação + user_type = admin)

**Response (200):**
```json
{
  "success": true,
  "data": {
    "total_users": 1250,
    "total_professionals": 320,
    "total_bookings": 5420,
    "total_revenue": 1250000,
    "bookings_today": 45,
    "revenue_today": 25000,
    "pending_bookings": 12,
    "pending_reviews": 8,
    "flagged_reviews": 3
  }
}
```

### 10.2 Listar Utilizadores (Admin)

**GET** `/admin/users?page=1&limit=20` (requer autenticação + user_type = admin)

**Response (200):**
```json
{
  "success": true,
  "data": [
    {
      "id": "uuid",
      "phone": "+258 82 123 456",
      "user_type": "client",
      "first_name": "João",
      "is_active": true,
      "is_blocked": false,
      "created_at": "2026-02-20T10:00:00Z"
    }
  ],
  "pagination": {
    "total": 1250,
    "page": 1,
    "limit": 20,
    "total_pages": 63
  }
}
```

### 10.3 Bloquear Utilizador (Admin)

**POST** `/admin/users/{user_id}/block` (requer autenticação + user_type = admin)

```json
{
  "reason": "Comportamento inadequado"
}
```

**Response (200):**
```json
{
  "success": true,
  "data": {
    "id": "uuid",
    "is_blocked": true,
    "blocked_at": "2026-02-24T10:00:00Z"
  }
}
```

---

## Códigos de Erro

| Código | Mensagem | Descrição |
|--------|----------|-----------|
| 400 | Bad Request | Requisição inválida |
| 401 | Unauthorized | Autenticação necessária |
| 403 | Forbidden | Acesso negado |
| 404 | Not Found | Recurso não encontrado |
| 409 | Conflict | Conflito (ex: email já existe) |
| 500 | Internal Server Error | Erro do servidor |

**Exemplo de Erro:**
```json
{
  "success": false,
  "error": "Unauthorized",
  "message": "Token inválido ou expirado"
}
```

---

## Rate Limiting

- **Limite**: 100 requisições por minuto por IP
- **Header**: `X-RateLimit-Remaining`
- **Resposta (429)**: Too Many Requests

---

## Webhooks (Eventos em Tempo Real)

### Eventos Disponíveis

- `booking.created` - Novo agendamento criado
- `booking.accepted` - Agendamento aceito
- `booking.completed` - Agendamento concluído
- `payment.completed` - Pagamento completado
- `review.created` - Nova avaliação criada
- `message.sent` - Nova mensagem enviada

### Configurar Webhook

**POST** `/webhooks`

```json
{
  "url": "https://seu-servidor.com/webhook",
  "events": ["booking.created", "payment.completed"]
}
```

---

## Exemplo de Integração (JavaScript/TypeScript)

```typescript
// Autenticação
const loginResponse = await fetch('https://api.servicoslocais.mz/v1/auth/login', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    phone: '+258 82 123 456',
    password: 'senha_segura_123'
  })
});

const { token } = await loginResponse.json();

// Listar profissionais próximos
const professionalsResponse = await fetch(
  'https://api.servicoslocais.mz/v1/professionals?latitude=10.5&longitude=35.3&max_distance_km=5',
  {
    headers: { 'Authorization': `Bearer ${token}` }
  }
);

const professionals = await professionalsResponse.json();
```

---

## Versioning

A API segue versionamento semântico:
- **v1.x.x**: Versão atual
- **v2.x.x**: Próxima versão (em desenvolvimento)

Mudanças quebradas sempre resultam em nova versão major.
