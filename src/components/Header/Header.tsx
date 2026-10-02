import { useEffect, useState } from "react";
import { motion, AnimatePresence, type Variants, type MotionProps } from "framer-motion";
import { Menu, X, UserRound } from "lucide-react";
import { ThemeToggle } from "../lightswind/theme-toggle";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Education", href: "#education" },
  { name: "Career", href: "#career" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  const [showHeader, setShowHeader] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowHeader(!(currentScrollY > lastScrollY && currentScrollY > 80));
      lastScrollY = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (id: string) => {
    const target = document.querySelector(id);
    if (!target) {
      setIsMobileMenuOpen(false);
      return;
    }

    const headerOffset = window.innerWidth < 768 ? 88 : 112;
    const top = target.getBoundingClientRect().top + window.scrollY - headerOffset;
    window.scrollTo({ top, behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  const menuVariants: Variants = {
    open: {
      clipPath: "circle(1500px at 90% 5%)",
      transition: { type: "spring", stiffness: 20, restDelta: 2 },
    },
    closed: {
      clipPath: "circle(0px at 90% 5%)",
      transition: { type: "spring", stiffness: 400, damping: 40 },
    },
  };

  const listVariants: Variants = {
    open: { transition: { staggerChildren: 0.07, delayChildren: 0.2 } },
    closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
  };

  const itemVariants: Variants = {
    open: { y: 0, opacity: 1, transition: { y: { stiffness: 1000, velocity: -100 } } },
    closed: { y: 50, opacity: 0, transition: { y: { stiffness: 1000 } } },
  };

  return (
    <AnimatePresence>
      {showHeader && (
        <motion.header
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0, transition: { duration: 0.4 } }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed top-3 md:top-6 left-0 right-0 z-50 flex justify-center px-3 sm:px-4"
        >
          <div className="glass-panel w-full max-w-7xl rounded-[2rem] flex items-center justify-between px-4 sm:px-6 py-3.5 md:py-4 shadow-xl">
            <a
              href="#hero"
              onClick={(event) => {
                event.preventDefault();
                handleScrollTo("#hero");
              }}
              className="cursor-pointer font-extrabold text-lg flex items-center gap-3 group select-none"
              aria-label="Go to home"
            >
              <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-transparent border-2 border-white shadow-lg group-hover:scale-105 transition-transform duration-300 overflow-hidden">
                <div className="w-full h-full bg-background rounded-[11px] overflow-hidden relative">
                  <img src="/assets/sudipto-kumar-1x1.webp" alt="Sudipto Kumar" className="w-full h-full object-cover" loading="eager" decoding="async" onError={(event) => { event.currentTarget.style.display = "none"; const fallback = event.currentTarget.nextElementSibling; if (fallback) fallback.classList.remove("hidden"); }} />
                  <UserRound className="hidden absolute inset-0 m-auto w-5 h-5 text-primary" aria-hidden="true" />
                </div>
              </div>
              <div className="flex flex-col text-left">
                <span className="font-extrabold tracking-tight text-foreground text-[13px] sm:text-sm leading-none group-hover:text-primary transition-colors">Sudipto Kumar</span>
                <span className="text-[9px] font-bold text-muted-foreground tracking-widest uppercase mt-0.5">Portfolio</span>
              </div>
            </a>

            <nav className="hidden md:flex flex-1 justify-center" aria-label="Primary navigation">
              <ul className="flex space-x-8">
                {navItems.map((item) => (
                  <motion.li key={item.name} className="relative group text-sm font-medium text-muted-foreground transition-colors">
                    <a
                      href={item.href}
                      onClick={(event) => {
                        event.preventDefault();
                        handleScrollTo(item.href);
                      }}
                      className="cursor-pointer hover:text-foreground"
                    >
                      {item.name}
                    </a>
                    <motion.span
                      className="absolute -bottom-2 left-1/2 w-0 h-0.5 bg-primary/80 rounded-full shadow-[0_0_8px_rgba(139,92,246,0.8)]"
                      initial={{ width: 0, x: "-50%" }}
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.li>
                ))}
              </ul>
            </nav>

            <div className="flex items-center gap-2">
              <ThemeToggle />
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(true)}
                className="md:hidden text-foreground hover:text-primary transition-colors p-2"
                aria-label="Open menu"
              >
                <Menu size={24} />
              </button>
            </div>
          </div>

          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                {...({ initial: "closed", animate: "open", exit: "closed", variants: menuVariants } as MotionProps)}
                className="fixed inset-0 z-40 bg-background/95 backdrop-blur-2xl md:hidden flex flex-col items-center justify-center"
              >
                <motion.button
                  type="button"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="absolute top-8 right-8 text-foreground"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  transition={{ delay: 0.2 }}
                  aria-label="Close menu"
                >
                  <X size={32} />
                </motion.button>

                <motion.ul {...({ variants: listVariants } as MotionProps)} className="flex flex-col items-center justify-center h-full space-y-10">
                  {navItems.map((item) => (
                    <motion.li key={item.name} {...({ variants: itemVariants } as MotionProps)}>
                      <a
                        href={item.href}
                        onClick={(event) => {
                          event.preventDefault();
                          handleScrollTo(item.href);
                        }}
                        className="text-4xl font-bold text-muted-foreground hover:text-primary hover:tracking-wider transition-all cursor-pointer"
                      >
                        {item.name}
                      </a>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.header>
      )}
    </AnimatePresence>
  );
}
