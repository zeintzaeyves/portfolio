"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "motion/react";
import { usePathname } from "next/navigation";

const navItems = [
  {
    label: "Home",
    mobileLabel: "Home",
    href: "/#home",
    id: "home",
    sectionId: "home",
  },
  {
    label: "Projects",
    mobileLabel: "Projects",
    href: "/#projects",
    id: "projects",
    sectionId: "projects",
  },
  {
    label: "Biography",
    mobileLabel: "Bio",
    href: "/biography",
    id: "biography",
  },
  {
    label: "Contacts",
    mobileLabel: "Contact",
    href: "/contact",
    id: "contact",
  },
  {
    label: "CV Resume",
    mobileLabel: "CV",
    href: "/cv/resume.pdf",
    id: "resume",
    download: true,
  },
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
  const pathname = usePathname();
  const [homeActiveSection, setHomeActiveSection] = useState("home");

  const activeSection = useMemo(() => {
    if (pathname === "/biography") return "biography";
    if (pathname === "/contact") return "contact";
    if (pathname.startsWith("/case-studies")) return "projects";
    if (pathname === "/") return homeActiveSection;

    return "";
  }, [pathname, homeActiveSection]);

  useEffect(() => {
    if (pathname !== "/") return;

    const sections = navItems
      .filter((item) => item.sectionId)
      .map((item) => document.getElementById(item.sectionId as string))
      .filter(Boolean) as HTMLElement[];

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        const visibleSection = visibleSections[0];

        if (visibleSection?.target.id) {
          setHomeActiveSection(visibleSection.target.id);
        }
      },
      {
        root: null,
        threshold: [0.25, 0.35, 0.5],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [pathname]);

  return (
    <motion.header
      initial={{ y: -18, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
      className="relative z-50 w-full font-sans"
    >
      <div className="flex items-start justify-between gap-4 md:grid md:grid-cols-2">
        <nav
          aria-label="Main navigation"
          className="flex max-w-[250px] flex-wrap items-center gap-x-3 gap-y-1 md:max-w-none md:flex-col md:items-start md:gap-2"
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.id && !item.download;

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
                  "w-fit text-[13px] leading-none tracking-[-0.045em]",
                  "transition-colors duration-300 hover:!text-black",
                  "md:text-[17px] md:leading-[1.08] md:tracking-[-0.055em]",
                  isActive ? "font-medium" : "font-normal",
                ].join(" ")}
              >
                <span className="md:hidden">{item.mobileLabel}</span>
                <span className="hidden md:inline">{item.label}</span>
              </a>
            );
          })}
        </nav>

        <div className="shrink-0 justify-self-end text-right">
          <p className="mb-2 hidden text-[11px] font-normal leading-none tracking-[-0.02em] text-black/35 md:block">
            Social
          </p>

          <div className="flex gap-2 text-[11px] font-medium tracking-[-0.02em] text-black/55 md:gap-3 md:text-[12px] md:text-black/65">
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