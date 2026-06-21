"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";

const navItems = [
  { label: "Home", href: "#home", id: "home" },
  { label: "Projects", href: "#projects", id: "projects" },
  { label: "About", href: "#about", id: "about" },
  { label: "Contacts", href: "#contacts", id: "contacts" },
  { label: "CV Resume", href: "/cv/resume.pdf", id: "resume", download: true },
];
const socials = [
  {
    label: "TW",
    href: "https://x.com/zeintzaeyves",
  },
  {
    label: "IG",
    href: "https://www.instagram.com/zeinkhalid._/",
  },
  {
    label: "BE",
    href: "https://www.behance.net/zeinkhalidbulaclac",
  },
  {
    label: "IN",
    href: "https://www.linkedin.com/in/zeinkhalid/",
  },
];

export function SiteHeader() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean) as HTMLElement[];

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find((entry) => entry.isIntersecting);

        if (visibleSection?.target.id) {
          setActiveSection(visibleSection.target.id);
        }
      },
      {
        root: null,
        threshold: 0.35,
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <motion.header
      initial={{ y: -18, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
      className="relative z-50 w-full font-sans"
    >
      <div className="grid grid-cols-2 items-start">
        <nav aria-label="Main navigation" className="flex flex-col gap-2">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;

            return (
              <a
                key={item.id}
                href={item.href}
                download={item.download ? "Zein-Khalid-Resume.pdf" : undefined}
                target={item.download ? "_blank" : undefined}
                rel={item.download ? "noopener noreferrer" : undefined}
                style={{
                  color: isActive ? "#000000" : "rgba(0, 0, 0, 0.32)",
                }}
                className={[
                  "w-fit text-[17px] leading-[1.08] tracking-[-0.055em]",
                  "transition-colors duration-300 hover:!text-black",
                  isActive ? "font-medium" : "font-normal",
                ].join(" ")}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className="justify-self-end text-right">
          <p className="mb-2 text-[11px] font-normal leading-none tracking-[-0.02em] text-black/35">
            Social
          </p>

          <div className="flex gap-3 text-[12px] font-medium tracking-[-0.02em] text-black/65">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-300 hover:text-black"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </motion.header>
  );
}
