
import productsData from "@/data/products.json";
import { useParams, Link } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";

const ProductDetail = () => {
  const { id } = useParams();
  const product = productsData.find((p) => String(p.id) === String(id));
  const { addToCart } = useCart();

  if (!product) {
    return (
      <div className="container py-10 text-center">
        <h2 className="text-2xl font-bold mb-4">Product not found</h2>
        <Link to="/" className="text-primary hover:underline">
          &larr; Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="container py-10 flex flex-col md:flex-row gap-8">
      <img src={product.image} alt={product.name} className="rounded-lg w-full max-w-xs mx-auto md:mx-0 md:w-1/3 object-cover" />
      <div className="flex-1 flex flex-col">
        <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
        <p className="text-muted-foreground mb-3">{product.description}</p>
        <div className="text-2xl font-bold mb-4">${product.price.toFixed(2)}</div>
        {product.features && product.features.length > 0 && (
          <div className="mb-6">
            <h3 className="font-semibold text-lg mb-2">Product Features:</h3>
            <ul className="list-disc pl-5 space-y-1">
              {product.features.map((feat, i) => (
                <li key={i} className="text-muted-foreground">{feat}</li>
              ))}
            </ul>
          </div>
        )}
        <Button onClick={() => addToCart(product)} className="w-full md:w-auto md:self-start">Add to Cart</Button>
        <Link to="/cart" className="mt-4 text-primary hover:underline">
          View Cart
        </Link>
      </div>
    </div>
  );
};

export default ProductDetail;
