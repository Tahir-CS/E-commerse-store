
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cart.length === 0) {
    return (
      <div className="container py-10 text-center">
        <h2 className="text-2xl font-bold mb-4">Your Cart is Empty</h2>
        <Link to="/" className="text-primary hover:underline">
          &larr; Shop products
        </Link>
      </div>
    );
  }

  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold mb-6 text-center">Shopping Cart</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-card rounded-lg shadow">
          <thead>
            <tr>
              <th className="p-2 text-left">Product</th>
              <th className="p-2 text-left">Price</th>
              <th className="p-2 text-left">Quantity</th>
              <th className="p-2"></th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <tr key={item.id} className="border-b last:border-b-0">
                <td className="p-2 flex items-center gap-3">
                  <img src={item.image} alt={item.name} className="w-14 h-14 rounded object-cover" />
                  <span>{item.name}</span>
                </td>
                <td className="p-2">${item.price.toFixed(2)}</td>
                <td className="p-2">
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={e => updateQuantity(item.id, Number(e.target.value))}
                    className="w-16 border rounded px-2 py-1"
                  />
                </td>
                <td className="p-2">
                  <Button variant="destructive" onClick={() => removeFromCart(item.id)}>Remove</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-xl font-bold">Total: ${total.toFixed(2)}</div>
        <div className="flex gap-4">
          <Button variant="outline" onClick={clearCart}>Clear Cart</Button>
          <Link to="/checkout">
            <Button>Checkout</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
