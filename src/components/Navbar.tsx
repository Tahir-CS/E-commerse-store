
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
    <nav className="w-full bg-background border-b sticky top-0 z-50">
      <div className="container flex items-center justify-between h-16">
        <Link to="/" className="text-2xl font-bold text-primary hover:underline">
          ShopEase
        </Link>
        <div className="flex items-center gap-4">
          <Link
            to="/"
            className={`hover:underline transition ${location.pathname === "/" && "underline font-semibold"}`}
          >
            Home
          </Link>
          {isAdmin && (
            <Link
              to="/admin"
              className={`hover:underline transition flex items-center gap-1 ${location.pathname === "/admin" && "underline font-semibold"}`}
            >
              <Shield className="h-4 w-4" />
              Admin
            </Link>
          )}
          <Link
            to="/cart"
            className="relative flex items-center gap-1 group"
            aria-label="Cart"
          >
            <ShoppingCart />
            <span>Cart</span>
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
