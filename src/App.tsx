import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

const Landing = lazy(() => import("./pages/Landing"));
const Login = lazy(() => import("./pages/Login"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Simulations = lazy(() => import("./pages/Simulations"));
const PhishingSim = lazy(() => import("./pages/PhishingSim"));
const PasswordSim = lazy(() => import("./pages/PasswordSim"));
const UrlSim = lazy(() => import("./pages/UrlSim"));
const SocialEngSim = lazy(() => import("./pages/SocialEngSim"));
const Resources = lazy(() => import("./pages/Resources"));
const Leaderboard = lazy(() => import("./pages/Leaderboard"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const RouteFallback = () => (
  <div className="min-h-screen px-6 py-10">
    <div className="mx-auto max-w-6xl rounded-[28px] glass-panel surface-outline p-6 md:p-8">
      <div className="flex items-center gap-3 text-sm text-muted-foreground">
        <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-primary shadow-[0_0_16px_hsl(var(--primary)/0.65)]" />
        Loading secure workspace...
      </div>
    </div>
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<RouteFallback />}>
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/login" element={<Login />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/simulations" element={<Simulations />} />
              <Route path="/sim/phishing" element={<PhishingSim />} />
              <Route path="/sim/password" element={<PasswordSim />} />
              <Route path="/sim/url" element={<UrlSim />} />
              <Route path="/sim/social" element={<SocialEngSim />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/leaderboard" element={<Leaderboard />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </AnimatePresence>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
