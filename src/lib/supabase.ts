import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseKey)

// Database types
export type Product = {
  id: number
  name: string
  description: string
  price: number
  image: string
  features: string[]
  category_id?: number
  stock_quantity: number
  created_at: string
  updated_at: string
}

export type Category = {
  id: number
  name: string
  description?: string
  created_at: string
}

export type CartItem = {
  id: number
  user_id: string
  product_id: number
  quantity: number
  created_at: string
  product?: Product
}

export type Order = {
  id: number
  user_id: string
  total_amount: number
  status: 'pending' | 'confirmed' | 'shipped' | 'delivered' | 'cancelled'
  shipping_address: string
  created_at: string
  updated_at: string
}

export type OrderItem = {
  id: number
  order_id: number
  product_id: number
  quantity: number
  price: number
  product?: Product
}
