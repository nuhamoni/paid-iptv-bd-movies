import { useState, useEffect, useRef } from "react";
import { Shield, Lock, Eye, EyeOff, Sparkles } from "lucide-react";
import logo from "@/assets/logo.png";

interface PasswordGateProps {
  onUnlock: () => void;
}

const PasswordGate = ({ onUnlock }: PasswordGateProps) => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [shaking, setShaking] = useState(false);
  const [unlocking, setUnlocking] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "4545") {
      setUnlocking(true);
      setTimeout(() => {
        sessionStorage.setItem("site_unlocked", "true");
        onUnlock();
      }, 1200);
    } else {
      setError(true);
      setShaking(true);
      setTimeout(() => setShaking(false), 600);
      setTimeout(() => setError(false), 3000);
      setPassword("");
    }
  };

  return (
    <div className={`fixed inset-0 z-[9999] flex items-center justify-center transition-all duration-1000 ${unlocking ? "opacity-0 scale-110" : "opacity-100 scale-100"}`}>
      {/* Animated background */}
      <div className="absolute inset-0 bg-background">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--primary)/0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,hsl(var(--accent)/0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,hsl(var(--primary)/0.08),transparent_40%)]" />
        {/* Floating particles */}
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-primary/30 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--primary)/0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)/0.3) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      {/* Gate card */}
      <div className={`relative z-10 w-full max-w-md mx-4 ${shaking ? "animate-[shake_0.5s_ease-in-out]" : ""}`}>
        {/* Glow ring behind card */}
        <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-2xl blur-xl opacity-60" />

        <div className="relative bg-card/80 backdrop-blur-2xl border border-border/50 rounded-2xl p-8 sm:p-10 shadow-2xl shadow-primary/5">
          {/* Top decorative line */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full" />

          {/* Logo & branding */}
          <div className="flex flex-col items-center mb-8">
            <div className="relative mb-4">
              <div className="absolute -inset-3 bg-primary/20 rounded-full blur-lg animate-pulse" />
              <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30 flex items-center justify-center">
                <img src={logo} alt="PAID IPTV BD" className="w-10 h-10 rounded-full" />
              </div>
            </div>
            <h1 className="font-display text-2xl sm:text-3xl font-bold tracking-wider text-foreground">
              PAID IPTV <span className="text-primary">BD</span>
            </h1>
            <div className="flex items-center gap-2 mt-2">
              <Shield className="w-4 h-4 text-accent" />
              <p className="text-sm text-muted-foreground tracking-wide">Premium Access Required</p>
              <Sparkles className="w-4 h-4 text-accent" />
            </div>
          </div>

          {/* Password form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10">
                <Lock className={`w-4.5 h-4.5 transition-colors duration-300 ${error ? "text-destructive" : "text-muted-foreground"}`} />
              </div>
              <input
                ref={inputRef}
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter access code"
                className={`w-full pl-12 pr-12 py-3.5 bg-secondary/50 border rounded-xl text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 transition-all duration-300 text-center text-lg tracking-[0.3em] font-mono ${
                  error
                    ? "border-destructive/50 focus:ring-destructive/30"
                    : "border-border/50 focus:ring-primary/30 focus:border-primary/50"
                }`}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-muted-foreground hover:text-foreground transition-colors"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>

            {error && (
              <p className="text-center text-sm text-destructive animate-fade-in font-medium">
                ⚠️ Incorrect access code
              </p>
            )}

            <button
              type="submit"
              className="w-full py-3.5 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground font-bold rounded-xl hover:shadow-[0_0_30px_hsl(var(--primary)/0.3)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 tracking-wider text-sm uppercase"
            >
              Unlock Access
            </button>
          </form>

          {/* Bottom info */}
          <p className="text-center text-[11px] text-muted-foreground/60 mt-6">
            🔒 This site is password protected for authorized users only
          </p>
        </div>
      </div>

      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          10%, 30%, 50%, 70%, 90% { transform: translateX(-6px); }
          20%, 40%, 60%, 80% { transform: translateX(6px); }
        }
      `}</style>
    </div>
  );
};

export default PasswordGate;
