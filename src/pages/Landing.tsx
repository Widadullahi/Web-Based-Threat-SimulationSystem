import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Activity,
  ArrowRight,
  BookOpenText,
  BrainCircuit,
  Building2,
  CheckCircle2,
  Database,
  Globe,
  GraduationCap,
  Key,
  Layers3,
  Mail,
  Server,
  Shield,
  Star,
  Trophy,
  Users,
} from "lucide-react";

const trainingModules = [
  {
    title: "Phishing Analysis",
    description: "Inspect sender patterns, urgency cues, and fake links in realistic email simulations.",
    icon: Mail,
    route: "/sim/phishing",
    tone: "text-primary",
  },
  {
    title: "Password Lab",
    description: "Measure password resilience and learn what separates disposable secrets from durable ones.",
    icon: Key,
    route: "/sim/password",
    tone: "text-accent",
  },
  {
    title: "URL Safety Check",
    description: "Break down suspicious domains, deceptive paths, and homograph tricks before they get clicked.",
    icon: Globe,
    route: "/sim/url",
    tone: "text-secondary",
  },
  {
    title: "Social Engineering",
    description: "Practice identifying manipulation in calls, texts, and in-person pretexting attempts.",
    icon: Users,
    route: "/sim/social",
    tone: "text-primary",
  },
];

const projectStats = [
  { label: "Threat Modules", value: "04" },
  { label: "Response Feedback", value: "Instant" },
  { label: "Storage", value: "Browser Local" },
  { label: "Learning Mode", value: "Interactive" },
];

const objectives = [
  "Design a clean, accessible training environment for cybersecurity awareness.",
  "Simulate phishing, weak passwords, malicious URLs, and social engineering.",
  "Return immediate feedback that explains both the mistake and the safer action.",
  "Track progress and scores so learning improves across sessions.",
];

const workflowSteps = [
  "Choose a threat module.",
  "Review the scenario and inspect its signals.",
  "Submit a decision.",
  "Read the explanation and score.",
  "Return later with saved local progress.",
];

const architectureCards = [
  {
    title: "Client Interface",
    text: "React routes, motion, and focused interaction design drive the training flow.",
    icon: Server,
  },
  {
    title: "Simulation Logic",
    text: "Scenario datasets evaluate decisions and attach educational feedback to each answer.",
    icon: BrainCircuit,
  },
  {
    title: "Local Persistence",
    text: "Progress, totals, and leaderboard state are stored directly in the browser.",
    icon: Database,
  },
];

const contributions = [
  {
    title: "For Students",
    text: "Turns abstract cyber advice into repeatable practice inside a safe environment.",
    icon: GraduationCap,
  },
  {
    title: "For Institutions",
    text: "Works as a lightweight awareness tool for labs, workshops, and classroom demos.",
    icon: Building2,
  },
  {
    title: "For Research",
    text: "Creates a base for adaptive difficulty, analytics, and larger scenario libraries.",
    icon: Layers3,
  },
  {
    title: "For Practice",
    text: "Encourages better judgment under pressure, not just passive reading.",
    icon: Activity,
  },
];

const faqs = [
  {
    q: "Does this platform run real attacks?",
    a: "No. Every exercise is a contained educational simulation.",
  },
  {
    q: "Do learners need accounts?",
    a: "No. Progress is stored in the current browser with LocalStorage.",
  },
  {
    q: "Who is it designed for?",
    a: "Students, beginners, and non-technical users building safer web habits.",
  },
  {
    q: "Is it suitable for academic presentation?",
    a: "Yes. It shows the problem, objectives, system flow, and measurable outcomes clearly.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0 },
};

const Landing = () => {
  const navigate = useNavigate();

  const goTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen text-foreground">
      <header className="sticky top-0 z-50 border-b border-border/80 bg-background/70 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <button onClick={() => goTo("home")} className="flex items-center gap-3 text-left">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl glass-panel surface-outline">
              <Shield className="h-5 w-5 text-primary" />
            </span>
            <span className="block max-w-[16rem] text-sm font-semibold leading-tight text-foreground">
              Web-Based Threat Simulation System
            </span>
          </button>

          <nav className="hidden items-center gap-6 md:flex">
            {[
              ["overview", "Overview"],
              ["modules", "Modules"],
              ["methodology", "Workflow"],
              ["faq", "FAQ"],
            ].map(([id, label]) => (
              <button
                key={id}
                onClick={() => goTo(id)}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {label}
              </button>
            ))}
            <button
              onClick={() => navigate("/login")}
              className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-[0_12px_30px_hsl(var(--primary)/0.25)] transition-transform hover:-translate-y-0.5"
            >
              Start Training
            </button>
          </nav>
        </div>
      </header>

      <main>
        <section id="home" className="px-6 pb-20 pt-12 md:pt-16">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <motion.div
              className="rounded-[32px] glass-panel-strong surface-outline p-8 md:p-10"
              variants={fadeUp}
              initial="hidden"
              animate="show"
              transition={{ duration: 0.55 }}
            >
              <div className="mb-8 flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-background/40 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  <BookOpenText className="h-3.5 w-3.5 text-primary" />
                  Threat Simulation Interface
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-background/40 px-3 py-1.5 text-xs font-medium text-muted-foreground">
                  <Trophy className="h-3.5 w-3.5 text-accent" />
                  Built for practical awareness training
                </span>
              </div>

              <h1 className="max-w-4xl text-4xl font-extrabold leading-[1.05] tracking-[-0.04em] md:text-6xl">
                Train better threat instincts
                <span className="block text-muted-foreground">without the visual noise.</span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground md:text-lg">
                Web-Based Threat Simulation System teaches phishing detection, password hygiene, malicious URL recognition,
                and social engineering awareness through focused browser simulations and immediate feedback.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <button
                  onClick={() => navigate("/login")}
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[0_14px_36px_hsl(var(--primary)/0.22)] transition-transform hover:-translate-y-0.5"
                >
                  Enter Platform
                  <ArrowRight className="h-4 w-4" />
                </button>
                <button
                  onClick={() => goTo("modules")}
                  className="rounded-full border border-border bg-background/35 px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-background/55"
                >
                  Explore Modules
                </button>
              </div>

              <div className="mt-10 grid gap-3 md:grid-cols-4">
                {projectStats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="rounded-2xl border border-border/80 bg-background/35 p-4"
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.08 * index }}
                  >
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                      {stat.label}
                    </p>
                    <p className="mt-2 text-lg font-semibold text-foreground">{stat.value}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="space-y-6"
              variants={fadeUp}
              initial="hidden"
              animate="show"
              transition={{ duration: 0.6, delay: 0.08 }}
            >
              <div className="rounded-[30px] glass-panel surface-outline p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                  Problem Statement
                </p>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">
                  Most users meet cyber threats for the first time during a real incident.
                  This project closes that gap with controlled practice that feels immediate, understandable,
                  and safe to repeat.
                </p>
                <div className="mt-6 space-y-3">
                  {[
                    "Focused, low-friction learning flow",
                    "Fast explanation after every decision",
                    "No account setup required",
                    "Built for demos, classes, and self-study",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3 rounded-2xl border border-border/70 bg-background/35 px-4 py-3">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" />
                      <span className="text-sm text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[30px] glass-panel surface-outline p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                  Experience Tone
                </p>
                <div className="mt-5 grid gap-3">
                  {[
                    "Calm glass surfaces instead of bright gradients",
                    "Measured animation for motion without clutter",
                    "Clear hierarchy for faster scanning",
                  ].map((item) => (
                    <div key={item} className="rounded-2xl border border-border/70 bg-background/35 px-4 py-3 text-sm text-foreground">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="overview" className="px-6 py-14">
          <div className="mx-auto max-w-7xl">
            <motion.div
              className="mb-8 max-w-3xl"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45 }}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">Objectives</p>
              <h2 className="mt-3 text-3xl font-bold tracking-[-0.03em] md:text-4xl">A practical training tool, not a brochure.</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                The platform is designed to teach recognition and response, not just theory.
              </p>
            </motion.div>

            <div className="grid gap-4 md:grid-cols-2">
              {objectives.map((item, index) => (
                <motion.div
                  key={item}
                  className="rounded-[26px] glass-panel surface-outline p-5"
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.38, delay: index * 0.06 }}
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-4 w-4 text-primary" />
                    <p className="text-sm leading-7 text-foreground">{item}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="modules" className="px-6 py-14">
          <div className="mx-auto max-w-7xl">
            <motion.div
              className="mb-10 max-w-2xl"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">Core Modules</p>
              <h2 className="mt-3 text-3xl font-bold tracking-[-0.03em] md:text-4xl">Four focused simulations for everyday threats.</h2>
            </motion.div>

            <div className="grid gap-5 md:grid-cols-2">
              {trainingModules.map((module, index) => {
                const Icon = module.icon;
                return (
                  <motion.button
                    key={module.title}
                    onClick={() => navigate(module.route)}
                    className="rounded-[28px] glass-panel surface-outline p-6 text-left transition-transform hover:-translate-y-1"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.42, delay: index * 0.06 }}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <span className={`flex h-12 w-12 items-center justify-center rounded-2xl border border-border/80 bg-background/40 ${module.tone}`}>
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="rounded-full border border-border/80 bg-background/35 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                        Simulation
                      </span>
                    </div>
                    <h3 className="mt-5 text-xl font-semibold tracking-[-0.02em]">{module.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-muted-foreground">{module.description}</p>
                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                      Launch Module
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </motion.button>
                );
              })}
            </div>
          </div>
        </section>

        <section id="methodology" className="px-6 py-14">
          <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <motion.div
              className="rounded-[30px] glass-panel surface-outline p-7"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45 }}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">Workflow</p>
              <h2 className="mt-3 text-3xl font-bold tracking-[-0.03em]">Simple path, fast feedback.</h2>
              <div className="mt-6 space-y-3">
                {workflowSteps.map((step, index) => (
                  <div key={step} className="rounded-2xl border border-border/70 bg-background/35 px-4 py-4">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">Step {index + 1}</p>
                    <p className="mt-1 text-sm text-foreground">{step}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="rounded-[30px] glass-panel surface-outline p-7"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">Architecture</p>
              <h3 className="mt-3 text-3xl font-bold tracking-[-0.03em]">Browser-native by design.</h3>
              <div className="mt-6 grid gap-4">
                {architectureCards.map((card) => {
                  const Icon = card.icon;
                  return (
                    <div key={card.title} className="rounded-2xl border border-border/70 bg-background/35 p-4">
                      <div className="flex items-start gap-4">
                        <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-border/80 bg-background/45 text-primary">
                          <Icon className="h-4 w-4" />
                        </span>
                        <div>
                          <p className="font-semibold text-foreground">{card.title}</p>
                          <p className="mt-2 text-sm leading-7 text-muted-foreground">{card.text}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </section>

        <section className="px-6 py-14">
          <div className="mx-auto max-w-7xl">
            <motion.div
              className="mb-10 max-w-3xl"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">Contributions</p>
              <h2 className="mt-3 text-3xl font-bold tracking-[-0.03em] md:text-4xl">Useful for learning now, extendable later.</h2>
            </motion.div>
            <div className="grid gap-5 md:grid-cols-2">
              {contributions.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    className="rounded-[28px] glass-panel surface-outline p-6"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                  >
                    <div className="flex items-start gap-4">
                      <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-border/80 bg-background/40 text-accent">
                        <Icon className="h-5 w-5" />
                      </span>
                      <div>
                        <h3 className="text-lg font-semibold tracking-[-0.02em]">{item.title}</h3>
                        <p className="mt-2 text-sm leading-7 text-muted-foreground">{item.text}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="faq" className="px-6 py-14 pb-20">
          <div className="mx-auto max-w-5xl rounded-[34px] glass-panel-strong surface-outline p-8 md:p-10">
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-background/35 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                <Star className="h-3.5 w-3.5 text-accent" />
                FAQ
              </span>
              <h2 className="mt-5 text-3xl font-bold tracking-[-0.03em] md:text-4xl">A few practical clarifications.</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Web-Based Threat Simulation System is built to teach safer decisions, not simulate offensive behavior.
              </p>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {faqs.map((item) => (
                <div key={item.q} className="rounded-2xl border border-border/70 bg-background/35 p-5">
                  <p className="font-semibold text-foreground">{item.q}</p>
                  <p className="mt-2 text-sm leading-7 text-muted-foreground">{item.a}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 rounded-[28px] border border-border/80 bg-background/35 p-6 text-center md:p-8">
              <h3 className="text-2xl font-bold tracking-[-0.02em]">Ready to start training?</h3>
              <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
                Open a module, make decisions, and build sharper instincts through repetition.
              </p>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                <button
                  onClick={() => navigate("/login")}
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[0_14px_36px_hsl(var(--primary)/0.22)] transition-transform hover:-translate-y-0.5"
                >
                  Start Practicing
                  <ArrowRight className="h-4 w-4" />
                </button>
                <button
                  onClick={() => goTo("overview")}
                  className="rounded-full border border-border bg-background/45 px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-background/60"
                >
                  Review Objectives
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Landing;
