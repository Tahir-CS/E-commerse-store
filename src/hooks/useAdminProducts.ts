import { useState, useEffect } from 'react'
import { supabase, Product } from '@/lib/supabase'
import { toast } from 'sonner'

export const useAdminProducts = () => {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)

  // Fetch all products
  const fetchProducts = async () => {
    try {
      setLoading(true)
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .order('created_at', { ascending: false })

      if (error) throw error
      setProducts(data || [])
    } catch (error) {
      console.error('Error fetching products:', error)
      toast.error('Failed to fetch products')
    } finally {
      setLoading(false)
    }
  }

  // Add new product
  const addProduct = async (productData: Omit<Product, 'id' | 'created_at' | 'updated_at'>) => {
    try {
      const { data, error } = await supabase
        .from('products')
        .insert([productData])
        .select()
        .single()

      if (error) throw error
      
      setProducts(prev => [data, ...prev])
      toast.success('Product added successfully!')
      return { data, error: null }
    } catch (error) {
      console.error('Error adding product:', error)
      toast.error('Failed to add product')
      return { data: null, error }
    }
  }

  // Update product
  const updateProduct = async (id: number, productData: Partial<Product>) => {
    try {
      const { data, error } = await supabase
        .from('products')
        .update(productData)
        .eq('id', id)
        .select()
        .single()

      if (error) throw error
      
      setProducts(prev => prev.map(p => p.id === id ? data : p))
      toast.success('Product updated successfully!')
      return { data, error: null }
    } catch (error) {
      console.error('Error updating product:', error)
      toast.error('Failed to update product')
      return { data: null, error }
    }
  }

  // Delete product
  const deleteProduct = async (id: number) => {
    try {
      const { error } = await supabase
        .from('products')
        .delete()
        .eq('id', id)

      if (error) throw error
      
      setProducts(prev => prev.filter(p => p.id !== id))
      toast.success('Product deleted successfully!')
      return { error: null }
    } catch (error) {
      console.error('Error deleting product:', error)
      toast.error('Failed to delete product')
      return { error }
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return {
    products,
    loading,
    addProduct,
    updateProduct,
    deleteProduct,
    refetch: fetchProducts
  }
}
