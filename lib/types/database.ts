/**
 * Database Types - Serviços Locais v2.0
 * Auto-generated TypeScript types for all database tables
 */

// ============================================================================
// ENUMS
// ============================================================================

export enum UserType {
  CLIENT = "client",
  PROFESSIONAL = "professional",
  ADMIN = "admin",
}

export enum AvailabilityStatus {
  AVAILABLE = "available",
  BUSY = "busy",
  OFFLINE = "offline",
}

export enum BookingStatus {
  PENDING = "pending",
  ACCEPTED = "accepted",
  REJECTED = "rejected",
  IN_PROGRESS = "in_progress",
  COMPLETED = "completed",
  CANCELLED = "cancelled",
}

export enum PaymentMethod {
  MPESA = "mpesa",
  VODACOM_CASH = "vodacom_cash",
  CREDIT_CARD = "credit_card",
  DEBIT_CARD = "debit_card",
  WALLET = "wallet",
}

export enum PaymentStatus {
  PENDING = "pending",
  PROCESSING = "processing",
  COMPLETED = "completed",
  FAILED = "failed",
  REFUNDED = "refunded",
}

export enum MessageType {
  TEXT = "text",
  IMAGE = "image",
  FILE = "file",
  LOCATION = "location",
}

export enum NotificationType {
  BOOKING = "booking",
  MESSAGE = "message",
  REVIEW = "review",
  PAYMENT = "payment",
  SYSTEM = "system",
}

export enum TransactionType {
  CREDIT = "credit",
  DEBIT = "debit",
  REFUND = "refund",
}

// ============================================================================
// DATABASE TYPES
// ============================================================================

export interface User {
  id: string;
  email?: string;
  phone: string;
  password_hash: string;
  user_type: UserType;
  first_name: string;
  last_name?: string;
  profile_photo_url?: string;
  bio?: string;
  rating: number;
  total_reviews: number;
  is_verified: boolean;
  is_active: boolean;
  is_blocked: boolean;
  blocked_at?: string;
  created_at: string;
  updated_at: string;
  deleted_at?: string;
}

export interface ProfessionalProfile {
  id: string;
  user_id: string;
  category_id: string;
  bio?: string;
  experience_years?: number;
  price_min?: number;
  price_max?: number;
  availability_status: AvailabilityStatus;
  latitude?: number;
  longitude?: number;
  address?: string;
  neighborhood?: string;
  city?: string;
  province?: string;
  country: string;
  response_time_minutes: number;
  completion_rate: number;
  total_completed_services: number;
  is_featured: boolean;
  verification_document_url?: string;
  is_document_verified: boolean;
  created_at: string;
  updated_at: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string;
  icon_emoji?: string;
  icon_url?: string;
  is_active: boolean;
  sort_order: number;
  created_at: string;
  updated_at: string;
}

export interface Service {
  id: string;
  professional_id: string;
  category_id: string;
  name: string;
  description?: string;
  price: number;
  duration_minutes?: number;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface Booking {
  id: string;
  client_id: string;
  professional_id: string;
  service_id?: string;
  booking_date: string;
  booking_time: string;
  duration_minutes?: number;
  location_address?: string;
  latitude?: number;
  longitude?: number;
  description?: string;
  price_quoted?: number;
  status: BookingStatus;
  cancellation_reason?: string;
  cancelled_by?: string;
  cancelled_at?: string;
  completed_at?: string;
  notes?: string;
  created_at: string;
  updated_at: string;
}

export interface Payment {
  id: string;
  booking_id: string;
  client_id: string;
  professional_id: string;
  amount: number;
  currency: string;
  payment_method: PaymentMethod;
  transaction_id?: string;
  status: PaymentStatus;
  payment_gateway_response?: Record<string, any>;
  refund_amount?: number;
  refund_reason?: string;
  refunded_at?: string;
  created_at: string;
  updated_at: string;
}

export interface Review {
  id: string;
  booking_id: string;
  reviewer_id: string;
  reviewed_user_id: string;
  rating: number;
  comment?: string;
  professionalism_rating?: number;
  punctuality_rating?: number;
  quality_rating?: number;
  would_recommend?: boolean;
  is_verified_purchase: boolean;
  helpful_count: number;
  is_flagged: boolean;
  flagged_reason?: string;
  created_at: string;
  updated_at: string;
}

export interface Chat {
  id: string;
  sender_id: string;
  recipient_id: string;
  booking_id?: string;
  message: string;
  message_type: MessageType;
  attachment_url?: string;
  is_read: boolean;
  read_at?: string;
  created_at: string;
  updated_at: string;
}

export interface Notification {
  id: string;
  user_id: string;
  title: string;
  message: string;
  notification_type: NotificationType;
  related_booking_id?: string;
  is_read: boolean;
  read_at?: string;
  action_url?: string;
  created_at: string;
  updated_at: string;
}

export interface Favorite {
  id: string;
  client_id: string;
  professional_id: string;
  created_at: string;
}

export interface BlockedUser {
  id: string;
  user_id: string;
  blocked_user_id: string;
  reason?: string;
  created_at: string;
}

export interface AdminLog {
  id: string;
  admin_id: string;
  action: string;
  entity_type?: string;
  entity_id?: string;
  changes?: Record<string, any>;
  ip_address?: string;
  user_agent?: string;
  created_at: string;
}

export interface Wallet {
  id: string;
  user_id: string;
  balance: number;
  total_earned: number;
  total_spent: number;
  currency: string;
  last_transaction_at?: string;
  created_at: string;
  updated_at: string;
}

export interface WalletTransaction {
  id: string;
  wallet_id: string;
  transaction_type: TransactionType;
  amount: number;
  description?: string;
  related_payment_id?: string;
  balance_before?: number;
  balance_after?: number;
  created_at: string;
}

// ============================================================================
// VIEW TYPES
// ============================================================================

export interface ProfessionalListView {
  id: string;
  user_id: string;
  first_name: string;
  last_name?: string;
  profile_photo_url?: string;
  rating: number;
  total_reviews: number;
  category_name: string;
  icon_emoji?: string;
  price_min?: number;
  price_max?: number;
  availability_status: AvailabilityStatus;
  latitude?: number;
  longitude?: number;
  address?: string;
  neighborhood?: string;
  city?: string;
  response_time_minutes: number;
  completion_rate: number;
  total_completed_services: number;
}

export interface ProfessionalStatsView {
  id: string;
  total_bookings: number;
  completed_bookings: number;
  avg_completion_hours?: number;
  total_reviews: number;
  avg_rating?: number;
}

// ============================================================================
// REQUEST/RESPONSE TYPES
// ============================================================================

export interface LoginRequest {
  phone: string;
  password: string;
}

export interface RegisterRequest {
  phone: string;
  email?: string;
  password: string;
  first_name: string;
  last_name?: string;
  user_type: UserType;
}

export interface CreateProfessionalProfileRequest {
  category_id: string;
  bio?: string;
  experience_years?: number;
  price_min?: number;
  price_max?: number;
  address?: string;
  neighborhood?: string;
  city?: string;
  province?: string;
}

export interface CreateBookingRequest {
  professional_id: string;
  service_id?: string;
  booking_date: string;
  booking_time: string;
  duration_minutes?: number;
  location_address?: string;
  latitude?: number;
  longitude?: number;
  description?: string;
}

export interface CreatePaymentRequest {
  booking_id: string;
  amount: number;
  payment_method: PaymentMethod;
}

export interface CreateReviewRequest {
  booking_id: string;
  rating: number;
  comment?: string;
  professionalism_rating?: number;
  punctuality_rating?: number;
  quality_rating?: number;
  would_recommend?: boolean;
}

export interface SendMessageRequest {
  recipient_id: string;
  booking_id?: string;
  message: string;
  message_type?: MessageType;
  attachment_url?: string;
}

export interface UpdateProfileRequest {
  first_name?: string;
  last_name?: string;
  bio?: string;
  profile_photo_url?: string;
}

export interface UpdateProfessionalProfileRequest {
  bio?: string;
  experience_years?: number;
  price_min?: number;
  price_max?: number;
  availability_status?: AvailabilityStatus;
  address?: string;
  neighborhood?: string;
  city?: string;
  province?: string;
  response_time_minutes?: number;
}

// ============================================================================
// FILTER TYPES
// ============================================================================

export interface ProfessionalFilterParams {
  category_id?: string;
  min_price?: number;
  max_price?: number;
  min_rating?: number;
  latitude?: number;
  longitude?: number;
  max_distance_km?: number;
  availability_status?: AvailabilityStatus;
  is_featured?: boolean;
  search_query?: string;
  page?: number;
  limit?: number;
}

export interface BookingFilterParams {
  status?: BookingStatus;
  start_date?: string;
  end_date?: string;
  page?: number;
  limit?: number;
}

// ============================================================================
// PAGINATION
// ============================================================================

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  total_pages: number;
}

// ============================================================================
// API RESPONSE
// ============================================================================

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}
