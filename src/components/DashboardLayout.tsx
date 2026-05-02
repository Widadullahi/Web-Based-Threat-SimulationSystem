import { Shield, LogOut, BookOpen, Trophy, LayoutDashboard, FlaskConical } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { clearProgress } from "@/lib/progress";
import { NavLink } from "@/components/NavLink";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    clearProgress();
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-background scanline">
      <header className="sticky top-0 z-50 border-b border-border/80 bg-background/72 backdrop-blur-2xl">
        <div className="container flex flex-col gap-3 py-4 md:h-20 md:flex-row md:items-center md:justify-between md:py-0">
          <Link to="/dashboard" className="group flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl glass-panel surface-outline">
              <Shield className="h-5 w-5 text-primary" />
            </span>
            <span className="font-mono font-bold text-primary text-glow">
              CYBERLAB
            </span>
          </Link>
          <nav className="flex flex-wrap items-center gap-2 rounded-full border border-border/80 bg-card/55 px-2 py-2 backdrop-blur-xl">
            <NavLink
              to="/dashboard"
              className="rounded-full border border-transparent px-3 py-2 text-xs font-mono text-muted-foreground transition-colors hover:text-primary md:text-sm"
              activeClassName="border-border bg-background/75 text-primary"
            >
              <span className="flex items-center gap-1.5"><LayoutDashboard className="h-3.5 w-3.5" /> Dashboard</span>
            </NavLink>
            <NavLink
              to="/simulations"
              className="rounded-full border border-transparent px-3 py-2 text-xs font-mono text-muted-foreground transition-colors hover:text-primary md:text-sm"
              activeClassName="border-border bg-background/75 text-primary"
            >
              <span className="flex items-center gap-1.5"><FlaskConical className="h-3.5 w-3.5" /> Simulations</span>
            </NavLink>
            <NavLink
              to="/resources"
              className="rounded-full border border-transparent px-3 py-2 text-xs font-mono text-muted-foreground transition-colors hover:text-primary md:text-sm"
              activeClassName="border-border bg-background/75 text-primary"
            >
              <span className="flex items-center gap-1.5"><BookOpen className="h-3.5 w-3.5" /> Learn</span>
            </NavLink>
            <NavLink
              to="/leaderboard"
              className="rounded-full border border-transparent px-3 py-2 text-xs font-mono text-muted-foreground transition-colors hover:text-primary md:text-sm"
              activeClassName="border-border bg-background/75 text-primary"
            >
              <span className="flex items-center gap-1.5"><Trophy className="h-3.5 w-3.5" /> Ranks</span>
            </NavLink>
            <button
              onClick={handleLogout}
              className="flex items-center gap-1 rounded-full px-3 py-2 text-xs font-mono text-muted-foreground transition-colors hover:text-destructive md:text-sm"
            >
              <LogOut className="h-4 w-4" />
              Logout
            </button>
          </nav>
        </div>
      </header>
      <main className="container py-8 md:py-10">{children}</main>
    </div>
  );
};

export default DashboardLayout;
