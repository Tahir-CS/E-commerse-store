import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { useAdminProducts } from "@/hooks/useAdminProducts";
import { Product } from "@/lib/supabase";
import { Pencil, Trash2, Plus, Save, X } from "lucide-react";
import AdminProtected from "@/components/AdminProtected";

const Admin = () => {
  const { products, loading, addProduct, updateProduct, deleteProduct } = useAdminProducts();
  
  const [form, setForm] = useState<Partial<Product>>({});
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [editingId, setEditingId] = useState<number | null>(null);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]:
        name === "price" || name === "stock_quantity"
          ? Number(value)
          : name === "category_id"
          ? Number(value)
          : value,
    }));
  };

  const handleEdit = (product: Product) => {
    setForm({
      ...product,
      features: Array.isArray(product.features) ? product.features.join("\n") : "",
    });
    setIsEditing(true);
    setEditingId(product.id);
  };

  const handleSave = async () => {
    if (!form.name || !form.price || !form.image) {
      alert("Please fill in all required fields (name, price, image)");
      return;
    }

    let featuresArr: string[] = [];
    if (typeof form.features === "string") {
      featuresArr = form.features
        .split(/\r?\n/)
        .map((f) => f.trim())
        .filter(Boolean);
    }

    const productData = {
      ...form,
      features: featuresArr,
      category_id: form.category_id || 1,
      stock_quantity: form.stock_quantity || 0,
    };

    let result;
    if (isEditing && editingId) {
      result = await updateProduct(editingId, productData);
    } else {
      result = await addProduct(productData as Omit<Product, 'id' | 'created_at' | 'updated_at'>);
    }

    if (result.error === null) {
      setForm({});
      setIsEditing(false);
      setEditingId(null);
    }
  };

  const handleDelete = async (id: number) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      await deleteProduct(id);
    }
  };

  const handleCancel = () => {
    setForm({});
    setIsEditing(false);
    setEditingId(null);
  };

  if (loading) {
    return (
      <AdminProtected>
        <div className="container py-10 text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
          <p>Loading products...</p>
        </div>
      </AdminProtected>
    );
  }

  return (
    <AdminProtected>
      <div className="container py-10">
        <h1 className="text-3xl font-bold mb-6 text-center">Admin Panel</h1>
        
        {/* Product Form */}
        <div className="max-w-2xl mx-auto bg-card rounded-lg shadow p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            {isEditing ? <Pencil className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
            {isEditing ? "Edit Product" : "Add New Product"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input
              name="name"
              placeholder="Product Name *"
              value={form.name || ""}
              onChange={handleInput}
              className="border rounded px-3 py-2 w-full"
              required
            />
            <input
              name="price"
              type="number"
              min="0"
              step="0.01"
              placeholder="Price *"
              value={form.price || ""}
              onChange={handleInput}
              className="border rounded px-3 py-2 w-full"
              required
            />
            <input
              name="image"
              placeholder="Image URL *"
              value={form.image || ""}
              onChange={handleInput}
              className="border rounded px-3 py-2 w-full"
              required
            />
            <input
              name="stock_quantity"
              type="number"
              min="0"
              placeholder="Stock Quantity"
              value={form.stock_quantity || ""}
              onChange={handleInput}
              className="border rounded px-3 py-2 w-full"
            />
            <select
              name="category_id"
              value={form.category_id || ""}
              onChange={handleInput}
              className="border rounded px-3 py-2 w-full"
            >
              <option value="">Select Category</option>
              <option value={1}>Electronics</option>
              <option value={2}>Furniture</option>
              <option value={3}>Clothing</option>
              <option value={4}>Books</option>
              <option value={5}>Sports</option>
            </select>
          </div>
          <textarea
            name="description"
            placeholder="Product Description"
            value={form.description || ""}
            onChange={handleInput}
            className="border rounded px-3 py-2 w-full mb-4"
            rows={3}
          />
          <textarea
            name="features"
            placeholder="Features (one per line)"
            value={typeof form.features === 'string' ? form.features : ''}
            onChange={handleInput}
            className="border rounded px-3 py-2 w-full mb-4"
            rows={4}
          />
          <div className="flex gap-2">
            <Button onClick={handleSave} className="flex items-center gap-2">
              <Save className="h-4 w-4" />
              {isEditing ? "Update Product" : "Add Product"}
            </Button>
            {isEditing && (
              <Button onClick={handleCancel} variant="outline" className="flex items-center gap-2">
                <X className="h-4 w-4" />
                Cancel
              </Button>
            )}
          </div>
        </div>

        {/* Products List */}
        <div className="bg-card rounded-lg shadow overflow-hidden">
          <h2 className="text-xl font-semibold p-4 border-b">Products ({products.length})</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-muted/50">
                <tr>
                  <th className="p-3 text-left">Image</th>
                  <th className="p-3 text-left">Name</th>
                  <th className="p-3 text-left">Price</th>
                  <th className="p-3 text-left">Stock</th>
                  <th className="p-3 text-left">Category</th>
                  <th className="p-3 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product.id} className="border-b hover:bg-muted/25">
                    <td className="p-3">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-12 h-12 object-cover rounded"
                      />
                    </td>
                    <td className="p-3 font-medium">{product.name}</td>
                    <td className="p-3">${product.price}</td>
                    <td className="p-3">{product.stock_quantity}</td>
                    <td className="p-3">
                      {product.category_id === 1 ? 'Electronics' :
                       product.category_id === 2 ? 'Furniture' :
                       product.category_id === 3 ? 'Clothing' :
                       product.category_id === 4 ? 'Books' :
                       product.category_id === 5 ? 'Sports' : 'Unknown'}
                    </td>
                    <td className="p-3">
                      <div className="flex gap-2">
                        <Button
                          onClick={() => handleEdit(product)}
                          size="sm"
                          variant="outline"
                          className="flex items-center gap-1"
                        >
                          <Pencil className="h-3 w-3" />
                          Edit
                        </Button>
                        <Button
                          onClick={() => handleDelete(product.id)}
                          size="sm"
                          variant="destructive"
                          className="flex items-center gap-1"
                        >
                          <Trash2 className="h-3 w-3" />
                          Delete
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </AdminProtected>
  );
};

export default Admin;
