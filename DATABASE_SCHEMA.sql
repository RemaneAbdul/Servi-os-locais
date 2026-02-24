-- ============================================================================
-- SERVIÇOS LOCAIS v2.0 - DATABASE SCHEMA
-- Supabase PostgreSQL Schema
-- ============================================================================

-- ============================================================================
-- 1. USERS TABLE (Clientes e Profissionais)
-- ============================================================================
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) UNIQUE,
  phone VARCHAR(20) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  user_type VARCHAR(20) NOT NULL CHECK (user_type IN ('client', 'professional', 'admin')),
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100),
  profile_photo_url VARCHAR(500),
  bio TEXT,
  rating DECIMAL(3, 2) DEFAULT 0,
  total_reviews INTEGER DEFAULT 0,
  is_verified BOOLEAN DEFAULT FALSE,
  is_active BOOLEAN DEFAULT TRUE,
  is_blocked BOOLEAN DEFAULT FALSE,
  blocked_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  deleted_at TIMESTAMP
);

CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_phone ON users(phone);
CREATE INDEX idx_users_user_type ON users(user_type);

-- ============================================================================
-- 2. PROFESSIONAL_PROFILES TABLE
-- ============================================================================
CREATE TABLE professional_profiles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  category_id UUID NOT NULL,
  bio TEXT,
  experience_years INTEGER,
  price_min DECIMAL(10, 2),
  price_max DECIMAL(10, 2),
  availability_status VARCHAR(20) DEFAULT 'available' CHECK (availability_status IN ('available', 'busy', 'offline')),
  latitude DECIMAL(10, 8),
  longitude DECIMAL(11, 8),
  address VARCHAR(255),
  neighborhood VARCHAR(100),
  city VARCHAR(100),
  province VARCHAR(100),
  country VARCHAR(100) DEFAULT 'Mozambique',
  response_time_minutes INTEGER DEFAULT 30,
  completion_rate DECIMAL(3, 2) DEFAULT 0,
  total_completed_services INTEGER DEFAULT 0,
  is_featured BOOLEAN DEFAULT FALSE,
  verification_document_url VARCHAR(500),
  is_document_verified BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  UNIQUE(user_id)
);

CREATE INDEX idx_professional_profiles_user_id ON professional_profiles(user_id);
CREATE INDEX idx_professional_profiles_category_id ON professional_profiles(category_id);
CREATE INDEX idx_professional_profiles_location ON professional_profiles(latitude, longitude);

-- ============================================================================
-- 3. CATEGORIES TABLE
-- ============================================================================
CREATE TABLE categories (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(100) NOT NULL UNIQUE,
  slug VARCHAR(100) NOT NULL UNIQUE,
  description TEXT,
  icon_emoji VARCHAR(10),
  icon_url VARCHAR(500),
  is_active BOOLEAN DEFAULT TRUE,
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO categories (name, slug, icon_emoji, description) VALUES
('Eletricista', 'eletricista', '⚡', 'Serviços de eletricidade'),
('Pedreiro', 'pedreiro', '🧱', 'Serviços de alvenaria'),
('Canalizador', 'canalizador', '🔧', 'Serviços de encanamento'),
('Pintor', 'pintor', '🎨', 'Serviços de pintura'),
('Mecânico', 'mecanico', '🚗', 'Serviços automotivos'),
('Carpinteiro', 'carpinteiro', '🪚', 'Serviços de carpintaria'),
('Técnico de Frio', 'tecnico-frio', '❄️', 'Serviços de refrigeração'),
('Informático', 'informatico', '💻', 'Serviços de TI'),
('Limpeza', 'limpeza', '🧹', 'Serviços de limpeza'),
('Jardinagem', 'jardinagem', '🌿', 'Serviços de jardinagem'),
('Segurança', 'seguranca', '🛡️', 'Serviços de segurança'),
('Babá', 'baba', '👶', 'Serviços de cuidado infantil'),
('Entregador', 'entregador', '📦', 'Serviços de entrega');

-- ============================================================================
-- 4. SERVICES TABLE
-- ============================================================================
CREATE TABLE services (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  professional_id UUID NOT NULL REFERENCES professional_profiles(id) ON DELETE CASCADE,
  category_id UUID NOT NULL REFERENCES categories(id),
  name VARCHAR(200) NOT NULL,
  description TEXT,
  price DECIMAL(10, 2) NOT NULL,
  duration_minutes INTEGER,
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_services_professional_id ON services(professional_id);
CREATE INDEX idx_services_category_id ON services(category_id);

-- ============================================================================
-- 5. BOOKINGS TABLE (Agendamentos)
-- ============================================================================
CREATE TABLE bookings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  client_id UUID NOT NULL REFERENCES users(id),
  professional_id UUID NOT NULL REFERENCES professional_profiles(id),
  service_id UUID REFERENCES services(id),
  booking_date DATE NOT NULL,
  booking_time TIME NOT NULL,
  duration_minutes INTEGER,
  location_address VARCHAR(255),
  latitude DECIMAL(10, 8),
  longitude DECIMAL(11, 8),
  description TEXT,
  price_quoted DECIMAL(10, 2),
  status VARCHAR(30) DEFAULT 'pending' CHECK (status IN ('pending', 'accepted', 'rejected', 'in_progress', 'completed', 'cancelled')),
  cancellation_reason TEXT,
  cancelled_by VARCHAR(20),
  cancelled_at TIMESTAMP,
  completed_at TIMESTAMP,
  notes TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_bookings_client_id ON bookings(client_id);
CREATE INDEX idx_bookings_professional_id ON bookings(professional_id);
CREATE INDEX idx_bookings_status ON bookings(status);
CREATE INDEX idx_bookings_booking_date ON bookings(booking_date);

-- ============================================================================
-- 6. PAYMENTS TABLE
-- ============================================================================
CREATE TABLE payments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  booking_id UUID NOT NULL REFERENCES bookings(id),
  client_id UUID NOT NULL REFERENCES users(id),
  professional_id UUID NOT NULL REFERENCES professional_profiles(id),
  amount DECIMAL(10, 2) NOT NULL,
  currency VARCHAR(3) DEFAULT 'MZN',
  payment_method VARCHAR(50) NOT NULL CHECK (payment_method IN ('mpesa', 'vodacom_cash', 'credit_card', 'debit_card', 'wallet')),
  transaction_id VARCHAR(100) UNIQUE,
  status VARCHAR(20) DEFAULT 'pending' CHECK (status IN ('pending', 'processing', 'completed', 'failed', 'refunded')),
  payment_gateway_response JSONB,
  refund_amount DECIMAL(10, 2),
  refund_reason TEXT,
  refunded_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_payments_booking_id ON payments(booking_id);
CREATE INDEX idx_payments_client_id ON payments(client_id);
CREATE INDEX idx_payments_professional_id ON payments(professional_id);
CREATE INDEX idx_payments_status ON payments(status);

-- ============================================================================
-- 7. REVIEWS TABLE (Avaliações)
-- ============================================================================
CREATE TABLE reviews (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  booking_id UUID NOT NULL REFERENCES bookings(id),
  reviewer_id UUID NOT NULL REFERENCES users(id),
  reviewed_user_id UUID NOT NULL REFERENCES users(id),
  rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
  comment TEXT,
  professionalism_rating INTEGER CHECK (professionalism_rating >= 1 AND professionalism_rating <= 5),
  punctuality_rating INTEGER CHECK (punctuality_rating >= 1 AND punctuality_rating <= 5),
  quality_rating INTEGER CHECK (quality_rating >= 1 AND quality_rating <= 5),
  would_recommend BOOLEAN,
  is_verified_purchase BOOLEAN DEFAULT TRUE,
  helpful_count INTEGER DEFAULT 0,
  is_flagged BOOLEAN DEFAULT FALSE,
  flagged_reason TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_reviews_booking_id ON reviews(booking_id);
CREATE INDEX idx_reviews_reviewer_id ON reviews(reviewer_id);
CREATE INDEX idx_reviews_reviewed_user_id ON reviews(reviewed_user_id);

-- ============================================================================
-- 8. CHATS TABLE (Mensagens em Tempo Real)
-- ============================================================================
CREATE TABLE chats (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  sender_id UUID NOT NULL REFERENCES users(id),
  recipient_id UUID NOT NULL REFERENCES users(id),
  booking_id UUID REFERENCES bookings(id),
  message TEXT NOT NULL,
  message_type VARCHAR(20) DEFAULT 'text' CHECK (message_type IN ('text', 'image', 'file', 'location')),
  attachment_url VARCHAR(500),
  is_read BOOLEAN DEFAULT FALSE,
  read_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_chats_sender_id ON chats(sender_id);
CREATE INDEX idx_chats_recipient_id ON chats(recipient_id);
CREATE INDEX idx_chats_booking_id ON chats(booking_id);
CREATE INDEX idx_chats_created_at ON chats(created_at);

-- ============================================================================
-- 9. NOTIFICATIONS TABLE
-- ============================================================================
CREATE TABLE notifications (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  title VARCHAR(200) NOT NULL,
  message TEXT NOT NULL,
  notification_type VARCHAR(50) NOT NULL CHECK (notification_type IN ('booking', 'message', 'review', 'payment', 'system')),
  related_booking_id UUID REFERENCES bookings(id),
  is_read BOOLEAN DEFAULT FALSE,
  read_at TIMESTAMP,
  action_url VARCHAR(500),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_notifications_user_id ON notifications(user_id);
CREATE INDEX idx_notifications_is_read ON notifications(is_read);

-- ============================================================================
-- 10. FAVORITES TABLE
-- ============================================================================
CREATE TABLE favorites (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  client_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  professional_id UUID NOT NULL REFERENCES professional_profiles(id) ON DELETE CASCADE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  UNIQUE(client_id, professional_id)
);

CREATE INDEX idx_favorites_client_id ON favorites(client_id);
CREATE INDEX idx_favorites_professional_id ON favorites(professional_id);

-- ============================================================================
-- 11. BLOCKED_USERS TABLE
-- ============================================================================
CREATE TABLE blocked_users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  blocked_user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  reason TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  UNIQUE(user_id, blocked_user_id)
);

CREATE INDEX idx_blocked_users_user_id ON blocked_users(user_id);

-- ============================================================================
-- 12. ADMIN_LOGS TABLE
-- ============================================================================
CREATE TABLE admin_logs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  admin_id UUID NOT NULL REFERENCES users(id),
  action VARCHAR(100) NOT NULL,
  entity_type VARCHAR(50),
  entity_id UUID,
  changes JSONB,
  ip_address VARCHAR(50),
  user_agent TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_admin_logs_admin_id ON admin_logs(admin_id);
CREATE INDEX idx_admin_logs_created_at ON admin_logs(created_at);

-- ============================================================================
-- 13. WALLET TABLE (Carteira Digital)
-- ============================================================================
CREATE TABLE wallets (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE UNIQUE,
  balance DECIMAL(10, 2) DEFAULT 0,
  total_earned DECIMAL(10, 2) DEFAULT 0,
  total_spent DECIMAL(10, 2) DEFAULT 0,
  currency VARCHAR(3) DEFAULT 'MZN',
  last_transaction_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_wallets_user_id ON wallets(user_id);

-- ============================================================================
-- 14. WALLET_TRANSACTIONS TABLE
-- ============================================================================
CREATE TABLE wallet_transactions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  wallet_id UUID NOT NULL REFERENCES wallets(id) ON DELETE CASCADE,
  transaction_type VARCHAR(20) NOT NULL CHECK (transaction_type IN ('credit', 'debit', 'refund')),
  amount DECIMAL(10, 2) NOT NULL,
  description TEXT,
  related_payment_id UUID REFERENCES payments(id),
  balance_before DECIMAL(10, 2),
  balance_after DECIMAL(10, 2),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_wallet_transactions_wallet_id ON wallet_transactions(wallet_id);

-- ============================================================================
-- ENABLE ROW LEVEL SECURITY (RLS)
-- ============================================================================
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE professional_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;
ALTER TABLE payments ENABLE ROW LEVEL SECURITY;
ALTER TABLE reviews ENABLE ROW LEVEL SECURITY;
ALTER TABLE chats ENABLE ROW LEVEL SECURITY;
ALTER TABLE notifications ENABLE ROW LEVEL SECURITY;
ALTER TABLE favorites ENABLE ROW LEVEL SECURITY;
ALTER TABLE wallets ENABLE ROW LEVEL SECURITY;

-- ============================================================================
-- RLS POLICIES
-- ============================================================================

-- Users: Usuários só veem seus próprios dados
CREATE POLICY "Users can view own profile"
  ON users FOR SELECT
  USING (auth.uid() = id);

-- Bookings: Clientes e profissionais veem seus próprios agendamentos
CREATE POLICY "Users can view own bookings"
  ON bookings FOR SELECT
  USING (auth.uid() = client_id OR auth.uid() IN (SELECT user_id FROM professional_profiles WHERE id = professional_id));

-- Chats: Apenas participantes veem mensagens
CREATE POLICY "Users can view own chats"
  ON chats FOR SELECT
  USING (auth.uid() = sender_id OR auth.uid() = recipient_id);

-- Notifications: Usuários veem suas próprias notificações
CREATE POLICY "Users can view own notifications"
  ON notifications FOR SELECT
  USING (auth.uid() = user_id);

-- ============================================================================
-- FUNCTIONS
-- ============================================================================

-- Função para atualizar rating do profissional
CREATE OR REPLACE FUNCTION update_professional_rating()
RETURNS TRIGGER AS $$
BEGIN
  UPDATE professional_profiles
  SET rating = (
    SELECT AVG(rating)::DECIMAL(3, 2)
    FROM reviews
    WHERE reviewed_user_id = (SELECT user_id FROM professional_profiles WHERE id = NEW.professional_id)
  ),
  total_reviews = (
    SELECT COUNT(*)
    FROM reviews
    WHERE reviewed_user_id = (SELECT user_id FROM professional_profiles WHERE id = NEW.professional_id)
  )
  WHERE id = NEW.professional_id;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_update_professional_rating
AFTER INSERT ON reviews
FOR EACH ROW
EXECUTE FUNCTION update_professional_rating();

-- Função para criar notificação de novo agendamento
CREATE OR REPLACE FUNCTION notify_new_booking()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO notifications (user_id, title, message, notification_type, related_booking_id)
  VALUES (
    (SELECT user_id FROM professional_profiles WHERE id = NEW.professional_id),
    'Novo Agendamento',
    'Você recebeu um novo pedido de serviço',
    'booking',
    NEW.id
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_notify_new_booking
AFTER INSERT ON bookings
FOR EACH ROW
EXECUTE FUNCTION notify_new_booking();

-- ============================================================================
-- VIEWS
-- ============================================================================

-- View: Profissionais com informações completas
CREATE VIEW professional_list AS
SELECT
  pp.id,
  pp.user_id,
  u.first_name,
  u.last_name,
  u.profile_photo_url,
  u.rating,
  u.total_reviews,
  c.name as category_name,
  c.icon_emoji,
  pp.price_min,
  pp.price_max,
  pp.availability_status,
  pp.latitude,
  pp.longitude,
  pp.address,
  pp.neighborhood,
  pp.city,
  pp.response_time_minutes,
  pp.completion_rate,
  pp.total_completed_services
FROM professional_profiles pp
JOIN users u ON pp.user_id = u.id
JOIN categories c ON pp.category_id = c.id
WHERE u.is_active = TRUE AND u.is_blocked = FALSE;

-- View: Estatísticas de profissional
CREATE VIEW professional_stats AS
SELECT
  pp.id,
  COUNT(DISTINCT b.id) as total_bookings,
  COUNT(DISTINCT CASE WHEN b.status = 'completed' THEN b.id END) as completed_bookings,
  AVG(CASE WHEN b.status = 'completed' THEN EXTRACT(EPOCH FROM (b.completed_at - b.created_at))/3600 END) as avg_completion_hours,
  COUNT(DISTINCT r.id) as total_reviews,
  AVG(r.rating) as avg_rating
FROM professional_profiles pp
LEFT JOIN bookings b ON pp.id = b.professional_id
LEFT JOIN reviews r ON b.id = r.booking_id
GROUP BY pp.id;
