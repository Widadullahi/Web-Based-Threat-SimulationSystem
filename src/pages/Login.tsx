import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Shield, Lock, ChevronRight } from "lucide-react";
import { getProgress, initProgress } from "@/lib/progress";
import { z } from "zod";

const usernameSchema = z
  .string()
  .trim()
  .min(2, "Username must be at least 2 characters")
  .max(30, "Username must be under 30 characters")
  .regex(/^[a-zA-Z0-9_]+$/, "Only letters, numbers, and underscores");

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const existing = getProgress();

  const handleStart = (e: React.FormEvent) => {
    e.preventDefault();
    const result = usernameSchema.safeParse(username);
    if (!result.success) {
      setError(result.error.errors[0].message);
      return;
    }
    if (existing && existing.username === result.data) {
      navigate("/dashboard");
      return;
    }
    initProgress(result.data);
    navigate("/dashboard");
  };

  return (
    <div className="flex min-h-screen items-center justify-center px-6 py-16">
      <div className="glass-panel-strong surface-outline w-full max-w-md rounded-[30px] p-8 space-y-6">
        <div className="text-center space-y-2">
          <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-border/80 bg-background/45">
            <Shield className="h-7 w-7 text-primary" />
          </div>
          <h1 className="text-2xl font-bold tracking-[-0.03em] text-foreground">Start Training</h1>
          <p className="text-sm text-muted-foreground">Enter your username to continue to the training workspace.</p>
        </div>

        {existing && (
          <div className="rounded-2xl border border-border/80 bg-background/40 px-4 py-3 text-xs text-muted-foreground">
            Last local user: <span className="font-semibold">{existing.username}</span>
          </div>
        )}

        <form onSubmit={handleStart} className="space-y-4">
          <div>
            <label className="mb-2 block text-xs font-semibold tracking-[0.18em] text-muted-foreground">USERNAME</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                  setError("");
                }}
                className="w-full rounded-2xl border border-border bg-background/45 py-3 pl-10 pr-3 text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/25"
                placeholder="agent_name"
                maxLength={30}
                autoFocus
              />
            </div>
            {error && <p className="mt-2 text-xs text-destructive">{error}</p>}
          </div>

          <button
            type="submit"
            className="flex w-full items-center justify-center gap-2 rounded-2xl bg-primary py-3 font-semibold text-primary-foreground shadow-[0_16px_32px_hsl(var(--primary)/0.22)] transition-transform hover:-translate-y-0.5"
          >
            Enter Dashboard
            <ChevronRight className="h-4 w-4" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
