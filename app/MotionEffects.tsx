"use client";

import { useEffect } from "react";

export default function MotionEffects() {
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("motion-ready");

    const items = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -45px" },
    );

    items.forEach((item) => observer.observe(item));

    let ticking = false;
    const updateProgress = () => {
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const progress = height > 0 ? Math.min(window.scrollY / height, 1) : 0;
      root.style.setProperty("--scroll-progress", progress.toString());
      root.classList.toggle("has-scrolled", window.scrollY > 120);
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(updateProgress);
      }
    };

    updateProgress();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      root.classList.remove("motion-ready");
      root.classList.remove("has-scrolled");
      root.style.removeProperty("--scroll-progress");
    };
  }, []);

  return null;
}
