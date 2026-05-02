import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Mail, Key, Globe, Users } from "lucide-react";
import { motion } from "framer-motion";
import DashboardLayout from "@/components/DashboardLayout";
import PageTransition from "@/components/PageTransition";
import { getProgress } from "@/lib/progress";

const scenarios = [
  { id: "phishing", title: "Phishing Email Detection", description: "Can you tell real emails from phishing attempts? Test your skills by analyzing emails and identifying red flags like suspicious senders, urgency tactics, and fake links.", icon: Mail, path: "/sim/phishing", color: "text-secondary", border: "border-secondary/30", difficulty: "Medium", questions: 5 },
  { id: "password", title: "Password Strength Analyzer", description: "Learn what makes a strong password. Type passwords and get real-time analysis of strength, crack time estimates, and improvement suggestions.", icon: Key, path: "/sim/password", color: "text-accent", border: "border-accent/30", difficulty: "Easy", questions: 1 },
  { id: "malicious-url", title: "Malicious URL Scanner", description: "Practice identifying dangerous URLs. Learn to spot homograph attacks, suspicious domains, and other URL-based threats before clicking.", icon: Globe, path: "/sim/url", color: "text-destructive", border: "border-destructive/30", difficulty: "Hard", questions: 8 },
  { id: "social-engineering", title: "Social Engineering Detection", description: "Identify suspicious phone calls, text messages, and in-person social engineering attempts. Learn to recognize manipulation tactics.", icon: Users, path: "/sim/social", color: "text-primary", border: "border-primary/30", difficulty: "Medium", questions: 6 },
];

const Simulations = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!getProgress()) navigate("/");
  }, [navigate]);

  const progress = getProgress();

  return (
    <DashboardLayout>
      <PageTransition>
        <div className="space-y-6">
          <div>
            <h1 className="text-2xl font-mono font-bold text-foreground">Threat Simulations</h1>
            <p className="mt-1 text-sm text-muted-foreground">Choose a module to begin your training</p>
          </div>

          <div className="grid gap-4">
            {scenarios.map((s, idx) => {
              const Icon = s.icon;
              const completed = progress?.completedScenarios.includes(s.id);
              const score = progress?.scores[s.id];
              return (
                <motion.div key={s.id} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: idx * 0.08 }}>
                  <Link to={s.path} className={`glass-panel surface-outline group flex items-start gap-6 rounded-[26px] border p-6 transition-all hover:-translate-y-0.5 ${s.border}`}>
                    <div className="rounded-2xl border border-border/70 bg-background/45 p-3"><Icon className={`h-8 w-8 ${s.color}`} /></div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="font-mono font-semibold text-foreground group-hover:text-primary transition-colors">{s.title}</h3>
                        <div className="flex items-center gap-3">
                          {completed && <span className="rounded-full border border-border/70 bg-background/45 px-2.5 py-1 text-xs font-mono text-primary">{score}%</span>}
                          <span className="text-xs font-mono text-muted-foreground">{s.difficulty}</span>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">{s.description}</p>
                      <p className="text-xs text-muted-foreground mt-2 font-mono">{s.questions} {s.questions === 1 ? "exercise" : "questions"}</p>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </PageTransition>
    </DashboardLayout>
  );
};

export default Simulations;
