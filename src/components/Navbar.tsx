
import { Link, useLocation } from "react-router-dom";
import { ShoppingCart, User, LogOut, Shield } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useAuth } from "@/context/AuthContext";
import { useAdmin } from "@/hooks/useAdmin";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const location = useLocation();
  const { cart } = useCart();
  const { user, signOut } = useAuth();
  const { isAdmin } = useAdmin();
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="w-full professional-nav sticky top-0 z-50">
      <div className="container flex items-center justify-between h-16">
        <Link to="/" className="group flex items-center space-x-2 transition-colors">
          <div className="text-2xl font-black tracking-tight">
            <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              Shop
            </span>
            <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Ease
            </span>
          </div>
          <div className="h-6 w-0.5 bg-gradient-to-b from-primary to-purple-600 opacity-50"></div>
          <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">Premium</span>
        </Link>
        <div className="flex items-center gap-6">
          <Link
            to="/"
            className={`hover:text-primary transition-colors font-medium ${location.pathname === "/" ? "text-primary font-semibold" : "text-foreground"}`}
          >
            Home
          </Link>
          {isAdmin && (
            <Link
              to="/admin"
              className={`hover:text-primary transition-colors flex items-center gap-1 font-medium ${location.pathname === "/admin" ? "text-primary font-semibold" : "text-foreground"}`}
            >
              <Shield className="h-4 w-4" />
              Admin
            </Link>
          )}
          <Link
            to="/cart"
            className="relative flex items-center gap-1 group hover:text-primary transition-colors"
            aria-label="Cart"
          >
            <ShoppingCart className="h-5 w-5" />
            <span className="font-medium">Cart</span>
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-primary text-xs text-primary-foreground rounded-full px-2 py-0.5">
                {cartCount}
              </span>
            )}
          </Link>
          
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="flex items-center gap-1">
                  <User size={16} />
                  <span className="hidden sm:inline">{user.email}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={signOut}>
                  <LogOut size={16} className="mr-2" />
                  Sign out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Link to="/login" aria-label="Login" className="flex items-center gap-1 hover:underline">
              <User /> <span className="hidden sm:inline">Login</span>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
