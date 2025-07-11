import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { useProducts } from "@/hooks/useProducts";
import { Skeleton } from "@/components/ui/skeleton";

const features = [
  {
    title: "Fast Shipping",
    description: "Lightning quick, reliable shipping for every order.",
    icon: (
      <svg className="h-8 w-8 text-primary" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 17v-2a4 4 0 014-4h10a4 4 0 014 4v2" /><path strokeLinecap="round" strokeLinejoin="round" d="M16 10V6a4 4 0 00-8 0v4" /></svg>
    ),
  },
  {
    title: "Curated Products",
    description: "Each product is handpicked for quality and value.",
    icon: (
      <svg className="h-8 w-8 text-primary" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path strokeLinecap="round" strokeLinejoin="round" d="M8 12l2 2 4-4" /></svg>
    ),
  },
  {
    title: "Secure Payments",
    description: "Industry-grade payment security via Stripe.",
    icon: (
      <svg className="h-8 w-8 text-primary" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><rect width="20" height="14" x="2" y="5" rx="2" /><path strokeLinecap="round" strokeLinejoin="round" d="M2 10h20" /></svg>
    ),
  },
];

const Home = () => {
  const { addToCart } = useCart();
  const { products, loading } = useProducts();

  return (
    <>
      {/* Hero section */}
      <section className="relative isolate py-12 md:py-20 flex items-center justify-center bg-gradient-to-br from-background to-accent/30 overflow-hidden animate-fade-in">
        <div className="w-full max-w-3xl text-center space-y-6 z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-3 tracking-tighter bg-gradient-to-r from-primary to-primary/80 text-transparent bg-clip-text animate-fade-in">
            Welcome to ShopEase
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-5 animate-fade-in">
            Discover premium products selected just for you. Enjoy seamless shopping, fast delivery, and unbeatable service.
          </p>
        </div>
        {/* Animated blur background blob */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 animate-scale-in">
          <div className="w-[300px] h-[300px] bg-primary opacity-10 blur-3xl rounded-full" />
        </div>
      </section>

      {/* Features/Benefits section */}
      <section className="container py-12 md:py-16 animate-fade-in">
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className="flex flex-col items-center bg-card rounded-xl shadow-md px-8 py-6 w-full md:w-1/3 transition-transform duration-300 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${i * 0.1 + 0.2}s`, animationFillMode: "backwards" } as React.CSSProperties}
            >
              <div className="mb-3">{feature.icon}</div>
              <h3 className="font-semibold text-lg mb-2 text-primary animate-fade-in">{feature.title}</h3>
              <p className="text-muted-foreground text-center">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Product grid */}
      <div className="container py-8 animate-fade-in">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center tracking-tight">
          Featured Products
        </h2>
        
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="bg-card rounded-2xl p-4 space-y-4">
                <Skeleton className="h-48 w-full" />
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
                <Skeleton className="h-10 w-full" />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="relative bg-card rounded-2xl shadow-lg hover:shadow-2xl transform transition-all duration-300 hover:scale-105 group flex flex-col overflow-hidden border border-border animate-scale-in"
              >
                <Link to={`/product/${product.id}`}>
                <div className="overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-52 object-cover transition-transform duration-300 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
              </Link>
              <div className="p-5 flex-1 flex flex-col">
                <Link to={`/product/${product.id}`}>
                  <h2 className="font-semibold text-lg mb-1 hover:underline group-hover:text-primary transition-colors">
                    {product.name}
                  </h2>
                </Link>
                <p className="text-muted-foreground text-sm mb-4 flex-1">
                  {product.description}
                </p>
                <div className="font-bold text-xl mb-4">${product.price.toFixed(2)}</div>
                <Button
                  onClick={() => addToCart(product)}
                  className="w-full mt-auto font-medium transition-colors shadow-sm hover:shadow"
                >
                  Add to Cart
                </Button>
              </div>
            </div>
          ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
