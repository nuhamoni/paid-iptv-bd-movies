import { Search, Menu, X, Crown } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "@/assets/logo.png";

interface NavbarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

const Navbar = ({ searchQuery, onSearchChange }: NavbarProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="PAID IPTV BD" className="w-9 h-9 rounded-md" />
            <span className="font-display text-2xl tracking-wider text-foreground">
              PAID IPTV <span className="text-primary">BD</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="/" className="text-sm font-medium text-foreground hover:text-primary transition-colors">Home</a>
            <a href="/#movies" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Movies</a>
            <a href="/#series" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Series</a>
            <a href="/#genres" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Genres</a>
            <Link to="/vip" className="flex items-center gap-1.5 text-sm font-bold text-accent hover:text-accent/80 transition-colors">
              <Crown className="w-3.5 h-3.5" />
              VIP Movies
            </Link>
          </div>

          {/* Search & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <div className={`${searchOpen ? 'w-64' : 'w-0'} overflow-hidden transition-all duration-300`}>
              <input
                type="text"
                placeholder="Search movies..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-full bg-secondary border border-border rounded-lg px-3 py-1.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-muted-foreground hover:text-primary transition-colors"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 border-t border-border/50 mt-2 pt-4 animate-fade-in">
            <div className="flex flex-col gap-3">
              <a href="/" className="text-sm font-medium text-foreground hover:text-primary transition-colors">Home</a>
              <a href="/#movies" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Movies</a>
              <a href="/#series" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Series</a>
              <a href="/#genres" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Genres</a>
              <Link to="/vip" className="flex items-center gap-1.5 text-sm font-bold text-accent hover:text-accent/80 transition-colors">
                <Crown className="w-3.5 h-3.5" />
                VIP Movies
              </Link>
              <input
                type="text"
                placeholder="Search movies..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-full bg-secondary border border-border rounded-lg px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary mt-2"
              />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
