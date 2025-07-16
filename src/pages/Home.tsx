import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { useProducts } from "@/hooks/useProducts";
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Star, Shield, Truck, HeartHandshake, Zap, Award, TrendingUp } from "lucide-react";

const features = [
  {
    title: "Lightning Fast Delivery",
    description: "Get your orders delivered in 24 hours or less",
    icon: <Truck className="h-6 w-6" />,
    color: "bg-blue-500",
  },
  {
    title: "Premium Quality",
    description: "Hand-selected products from trusted brands",
    icon: <Award className="h-6 w-6" />,
    color: "bg-purple-500",
  },
  {
    title: "Secure Shopping",
    description: "Bank-level security for all your transactions",
    icon: <Shield className="h-6 w-6" />,
    color: "bg-green-500",
  },
  {
    title: "24/7 Support",
    description: "Our team is here to help you anytime",
    icon: <HeartHandshake className="h-6 w-6" />,
    color: "bg-orange-500",
  },
];

const stats = [
  { label: "Happy Customers", value: "50K+", icon: <Star className="h-5 w-5" /> },
  { label: "Products Sold", value: "1M+", icon: <TrendingUp className="h-5 w-5" /> },
  { label: "Years Experience", value: "10+", icon: <Award className="h-5 w-5" /> },
  { label: "Countries", value: "25+", icon: <Zap className="h-5 w-5" /> },
];

const Home = () => {
  const { addToCart } = useCart();
  const { products, loading } = useProducts();

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-purple-50/30 to-blue-50/30 py-20 md:py-32">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container relative z-10">
          <div className="mx-auto max-w-5xl text-center">
            <Badge className="mb-6 bg-primary/10 text-primary hover:bg-primary/20 px-4 py-2">
              <Zap className="mr-2 h-4 w-4" />
              Premium Shopping Experience
            </Badge>
            
            {/* Professional ShopEase Logo/Heading */}
            <div className="mb-8">
              <div className="flex items-center justify-center mb-4">
                <div className="h-1 w-16 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
                <span className="mx-4 text-lg font-medium text-primary uppercase tracking-wider">Welcome to</span>
                <div className="h-1 w-16 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-4">
                <span className="bg-gradient-to-r from-gray-900 via-primary to-purple-600 bg-clip-text text-transparent">
                  Shop
                </span>
                <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Ease
                </span>
              </h1>
              <div className="flex items-center justify-center mb-6">
                <div className="h-0.5 w-24 bg-gradient-to-r from-primary to-purple-600"></div>
                <div className="mx-3 text-sm font-semibold text-gray-500 uppercase tracking-widest">
                  Premium Collection
                </div>
                <div className="h-0.5 w-24 bg-gradient-to-r from-purple-600 to-primary"></div>
              </div>
            </div>
            
            <h2 className="mb-6 text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 leading-tight">
              Discover Your
              <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                {" "}Perfect Style
              </span>
            </h2>
            <p className="mb-8 text-xl text-gray-600 sm:text-2xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
              Shop premium products curated for modern living. From cutting-edge technology to lifestyle essentials, find everything you need in one place.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="professional-button group px-8 py-4 text-lg">
                Shop Now
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" className="border-2 px-8 py-4 text-lg hover:bg-primary hover:text-white">
                Explore Collections
              </Button>
            </div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-blue-500/5 rounded-full blur-2xl animate-pulse delay-500"></div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white/50 backdrop-blur-sm">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  {stat.icon}
                </div>
                <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50/50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose ShopEase?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience the difference with our commitment to quality, speed, and customer satisfaction.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg shadow-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-gray-100"
              >
                <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl ${feature.color} text-white`}>
                  {feature.icon}
                </div>
                <h3 className="mb-2 text-xl font-semibold text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary">Featured</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Trending Products
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our most popular items loved by thousands of customers worldwide.
            </p>
          </div>
          
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="professional-card p-6 space-y-4">
                  <Skeleton className="h-56 w-full rounded-lg" />
                  <Skeleton className="h-4 w-3/4" />
                  <Skeleton className="h-4 w-1/2" />
                  <Skeleton className="h-10 w-full" />
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {products.slice(0, 8).map((product) => (
                <div
                  key={product.id}
                  className="group relative overflow-hidden rounded-2xl bg-white shadow-lg shadow-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-gray-100"
                >
                  <Link to={`/product/${product.id}`}>
                    <div className="relative overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <Badge className="absolute top-4 left-4 bg-primary text-white">
                        New
                      </Badge>
                    </div>
                  </Link>
                  <div className="p-6">
                    <Link to={`/product/${product.id}`}>
                      <h3 className="font-semibold text-lg mb-2 text-gray-900 hover:text-primary transition-colors line-clamp-1">
                        {product.name}
                      </h3>
                    </Link>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {product.description}
                    </p>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-bold text-primary">${product.price.toFixed(2)}</span>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="ml-1 text-sm text-gray-600">4.8</span>
                      </div>
                    </div>
                    <Button
                      onClick={() => addToCart(product)}
                      className="w-full professional-button group"
                    >
                      Add to Cart
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
          
          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="border-2">
              View All Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-purple-600">
        <div className="container">
          <div className="text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Shopping?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Join thousands of satisfied customers and discover your next favorite product today.
            </p>
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100 font-semibold">
              Get Started Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
