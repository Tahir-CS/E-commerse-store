
import { useCart } from "@/context/CartContext";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Checkout = () => {
  const { cart, clearCart } = useCart();
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cart.length === 0) {
    return (
      <div className="container py-10 text-center">
        <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
        <Link to="/" className="text-primary hover:underline">&larr; Shop products</Link>
      </div>
    );
  }

  // No backend logic, so just show a fake confirmation here
  const handlePlaceOrder = () => {
    clearCart();
    window.alert("Order placed! (No real checkout yet.)");
  };

  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold mb-6 text-center">Checkout</h1>
      <div className="rounded-lg shadow bg-card p-6 max-w-lg mx-auto">
        <div className="mb-4">
          <h2 className="font-semibold text-lg mb-2">Order Summary</h2>
          <ul>
            {cart.map((item) => (
              <li key={item.id} className="flex justify-between py-1">
                <span>{item.name} × {item.quantity}</span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </li>
            ))}
          </ul>
          <div className="border-t mt-2 pt-2 flex justify-between font-bold">
            <span>Total:</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>
        <Button className="w-full mb-2" onClick={handlePlaceOrder}>
          Place Order
        </Button>
        <Link to="/cart" className="block text-center text-primary underline">Back to Cart</Link>
      </div>
    </div>
  );
};

export default Checkout;
