import type { Metadata } from "next";
import { SiteHeader } from "@/components/siteheader";

export const metadata: Metadata = {
  title: "Contact — Zein Khalid",
  description:
    "Get in touch with Zein Khalid for frontend development, UI/UX design, thesis, side projects, and collaboration inquiries.",
};

const socials = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/zeinkhalid._/",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/zeinkhalid/",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/zeintzaeyves",
  },
  {
    label: "Behance",
    href: "https://www.behance.net/zeinkhalidbulaclac",
  },
  {
    label: "Twitter / X",
    href: "https://x.com/zeintzaeyves",
  },
];

export default function ContactPage() {
  return (
    <main className="min-h-[100svh] overflow-x-hidden bg-[#f3f3f1] px-6 pb-6 pt-6 text-[#151515] md:px-8 lg:h-[100svh] lg:overflow-hidden lg:px-10">
      <SiteHeader />

      <section className="flex min-h-[calc(100svh-92px)] flex-col justify-center gap-9 py-8 md:gap-10 lg:h-[calc(100svh-92px)] lg:py-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:items-start md:gap-8">
          <div className="md:col-span-7">
            <p className="text-[14px] font-normal leading-none tracking-[-0.045em] text-black/45 md:text-[17px]">
              Contact
            </p>

            <h1 className="mt-4 max-w-[820px] text-[64px] font-normal leading-[0.86] tracking-[-0.095em] sm:text-[86px] md:text-[112px] lg:text-[138px] xl:text-[156px]">
              Let’s build something.
            </h1>
          </div>
          <div className="md:col-span-5 md:pt-[22px] lg:pt-[28px] xl:pt-[34px]">
            <p className="max-w-[650px] text-[24px] font-normal leading-[1.02] tracking-[-0.075em] text-black/70 sm:text-[28px] md:text-[32px] lg:text-[38px]">
              Got a thesis, startup idea, landing page, portfolio, or web app in
              mind? Send me a message and let’s make it real.
            </p>

            <div className="mt-7 flex flex-col gap-3 md:mt-8">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=bulaclaczeinkhalidjornadal@gmail.com&su=Project%20Inquiry&body=Hi%20Zein%2C%0A%0AI%20would%20like%20to%20discuss%20a%20project%20with%20you."
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-[58px] items-center justify-between rounded-[22px] bg-[#151515] px-6 text-[#f3f3f1] transition-opacity duration-300 hover:opacity-85 md:h-[72px] md:rounded-[26px]"
              >
                <span className="text-[16px] font-medium leading-none tracking-[-0.045em] text-[#f3f3f1] md:text-[18px]">
                  Email me
                </span>

                <span className="text-[20px] leading-none text-[#f3f3f1] transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>

              <a
                href="tel:+639274000944"
                className="group flex h-[58px] items-center justify-between rounded-[22px] bg-[#e4e4e1] px-6 text-[#151515] transition-opacity duration-300 hover:opacity-75 md:h-[72px] md:rounded-[26px]"
              >
                <span className="text-[16px] font-medium leading-none tracking-[-0.045em] md:text-[18px]">
                  +63 927 400 0944
                </span>

                <span className="text-[20px] leading-none transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className="w-full border-t border-black/10 pt-6">
          <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 md:grid-cols-12 md:gap-8">
            <div className="md:col-span-5">
              <p className="text-[13px] font-normal leading-none tracking-[-0.04em] text-black/35">
                Email
              </p>

              <a
                href="mailto:bulaclaczeinkhalidjornadal@gmail.com"
                className="mt-3 block break-all text-[15px] font-normal leading-[1.1] tracking-[-0.04em] text-black/70 transition-colors duration-300 hover:text-black md:text-[17px]"
              >
                bulaclaczeinkhalidjornadal@gmail.com
              </a>
            </div>

            <div className="md:col-span-3">
              <p className="text-[13px] font-normal leading-none tracking-[-0.04em] text-black/35">
                Location
              </p>

              <p className="mt-3 text-[15px] font-normal leading-[1.1] tracking-[-0.04em] text-black/70 md:text-[17px]">
                Based in the Philippines
              </p>
            </div>

            <div className="md:col-span-4">
              <p className="text-[13px] font-normal leading-none tracking-[-0.04em] text-black/35">
                Socials
              </p>

              <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[15px] font-normal leading-none tracking-[-0.04em] text-black/70 transition-colors duration-300 hover:text-black md:text-[17px]"
                  >
                    {social.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
