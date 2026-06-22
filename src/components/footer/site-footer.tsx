import Link from "next/link";

const navigation = [
  { label: "Home", href: "/#home" },
  { label: "Biography", href: "/biography" },
  { label: "Case Studies", href: "/#projects" },
];

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

const contact = [
  {
    label: "bulaclaczeinkhalidjornadal@gmail.com",
    href: "mailto:bulaclaczeinkhalidjornadal@gmail.com",
  },
  {
    label: "+63 9274000944",
    href: "tel:+639274000944",
  },
  {
    label: "Based in Philippines",
    href: null,
  },
];

export function SiteFooter() {
  return (
    <footer
      id="contacts"
      className="w-full overflow-hidden bg-[#f3f3f1] px-6 pb-8 pt-10 text-[#151515] md:px-8 md:pt-12 lg:px-10 lg:pt-14"
    >
      <div className="grid grid-cols-1 gap-14 md:grid-cols-12 md:gap-8">
        <div className="md:col-span-6 lg:col-span-5">
          <h2 className="max-w-[560px] text-[28px] font-bold leading-[1.02] tracking-[-0.065em] sm:text-[34px] md:text-[38px] lg:text-[44px]">
            Got a project in mind? I have coffee, emotional availability, and
            decent Wi-Fi.
          </h2>

          <p className="mt-6 max-w-[620px] text-[16px] font-normal leading-[1.22] tracking-[-0.045em] text-black/55 sm:text-[17px] md:mt-7 md:text-[18px]">
            Whether it’s a thesis, a side project, or a random 2AM idea, I’m
            always down to listen, collaborate, and build something meaningful
            together.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3 md:col-span-6 lg:col-span-7">
          <div>
            <h3 className="text-[17px] font-bold leading-none tracking-[-0.055em] md:text-[18px]">
              Navigation
            </h3>

            <div className="mt-5 flex flex-col gap-3 md:mt-6">
              {navigation.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="w-fit text-[14px] font-normal leading-none tracking-[-0.04em] text-black/45 transition-colors duration-300 hover:text-black"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-[17px] font-bold leading-none tracking-[-0.055em] md:text-[18px]">
              Socials
            </h3>

            <div className="mt-5 flex flex-col gap-3 md:mt-6">
              {socials.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-fit text-[14px] font-normal leading-none tracking-[-0.04em] text-black/45 transition-colors duration-300 hover:text-black"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-[17px] font-bold leading-none tracking-[-0.055em] md:text-[18px]">
              Connect with Zein
            </h3>

            <div className="mt-5 flex flex-col gap-3 md:mt-6">
              {contact.map((item) =>
                item.href ? (
                  <a
                    key={item.label}
                    href={item.href}
                    className="w-fit break-all text-[14px] font-normal leading-none tracking-[-0.04em] text-black/45 transition-colors duration-300 hover:text-black"
                  >
                    {item.label}
                  </a>
                ) : (
                  <p
                    key={item.label}
                    className="text-[14px] font-normal leading-none tracking-[-0.04em] text-black/45"
                  >
                    {item.label}
                  </p>
                ),
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 flex justify-start sm:justify-center md:mt-24">
        <p className="text-[13px] font-normal tracking-[-0.04em] text-black/35 md:text-[14px]">
          ©2026 Zein Khalid Bulaclac. All rights reserved.
        </p>
      </div>
    </footer>
  );
}