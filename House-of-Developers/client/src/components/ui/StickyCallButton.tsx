"use client";

import { Phone } from "lucide-react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export function StickyCallButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsVisible(true);
      } else if (window.scrollY <= 50) {
        setIsVisible(false);
      }
    };

    timer = setTimeout(() => setIsVisible(true), 3000);

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, []);

  if (location === "/contact") return null;

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 pointer-events-none">
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{
              type: "spring",
              stiffness: 280,
              damping: 26,
            }}
            className="pointer-events-auto"
          >
            <div
              className="mx-4 mb-4 rounded-2xl overflow-hidden"
              style={{
                marginBottom: "max(1rem, env(safe-area-inset-bottom))",
              }}
            >
              <Link href="/contact">
                <button
                  aria-label="Book a consultation call"
                  className="w-full flex items-center justify-center gap-2.5 h-14 rounded-2xl font-semibold text-sm tracking-wide transition-all duration-200 active:scale-[0.97] select-none relative overflow-hidden"
                  style={{
                    background: "rgba(255, 255, 255, 0.08)",
                    backdropFilter: "blur(24px) saturate(180%)",
                    WebkitBackdropFilter: "blur(24px) saturate(180%)",
                    border: "1px solid rgba(255, 255, 255, 0.18)",
                    boxShadow: `
                      0 0 0 0.5px rgba(255,255,255,0.08) inset,
                      0 1px 0 rgba(255,255,255,0.15) inset,
                      0 8px 32px rgba(0, 0, 0, 0.18),
                      0 2px 8px rgba(0, 0, 0, 0.12)
                    `,
                    color: "var(--foreground)",
                  }}
                >
                  <span
                    aria-hidden="true"
                    className="absolute top-0 left-0 right-0 h-px rounded-t-2xl"
                    style={{
                      background:
                        "linear-gradient(90deg, transparent 10%, rgba(255,255,255,0.35) 50%, transparent 90%)",
                    }}
                  />
                  <span
                    aria-hidden="true"
                    className="absolute top-2 bottom-2 left-0 w-px"
                    style={{
                      background:
                        "linear-gradient(180deg, transparent, rgba(255,255,255,0.2), transparent)",
                    }}
                  />
                  <span
                    className="flex items-center justify-center w-7 h-7 rounded-full"
                    style={{
                      background: "rgba(255,255,255,0.12)",
                      border: "1px solid rgba(255,255,255,0.16)",
                      boxShadow: "0 1px 3px rgba(0,0,0,0.15)",
                    }}
                  >
                    <Phone size={13} strokeWidth={2.5} />
                  </span>
                  <span className="font-semibold text-[13px] tracking-[0.01em]">
                    Book a Call
                  </span>
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 rounded-2xl opacity-0 active:opacity-100 transition-opacity duration-100"
                    style={{
                      background:
                        "radial-gradient(ellipse at center, rgba(255,255,255,0.08) 0%, transparent 70%)",
                    }}
                  />
                </button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
