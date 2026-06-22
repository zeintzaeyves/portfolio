import Image from "next/image";
import { SiteHeader } from "@/components/siteheader";
import { SiteFooter } from "@/components/footer/site-footer";

const biographyParagraphs = [
  "I'm Zein Khalid Bulaclac, a freelance UI/UX web designer and front-end developer based in the Philippines. Since 2024, I've been working on thesis and side projects, helping clients turn their ideas into reality through clean design and functional web experiences. My work focuses on crafting intuitive interfaces and building responsive, modern websites that prioritize usability and performance.",
  "While my main expertise lies in front-end development and UI/UX design, I also have experience in backend development and AI integration, allowing me to create more complete and scalable digital solutions. I'm passionate about designing user-friendly interfaces and continuously improving my skills to keep up with evolving technologies.",
  "My interest in design started long before I began coding. I've always been fascinated by how layouts, typography, and visual elements come together to communicate a message. Whether it was analyzing magazine layouts or noticing details in posters, I naturally developed a keen eye for design.",
  "When I discovered UI/UX design and front-end development, it felt like the perfect intersection of my interests in technology and creativity. From that moment on, I immersed myself in learning and building, knowing that this field was where I truly belonged.",
];

const experience = [
  {
    year: "2024 - Present",
    title: "Freelance Front-end Developer",
    description:
      "Worked with students and small business clients to develop responsive websites and web systems for thesis projects, academic requirements, and online stores. I implemented front-end interfaces using modern web technologies and integrated them with backend systems or platforms like Shopify when needed. My role included translating UI designs into functional web pages, ensuring mobile responsiveness, and optimizing performance.",
  },
  {
    year: "2024 - Present",
    title: "Freelance UI/UX Web Designer",
    description:
      "Provided UI/UX design services for students working on capstone or thesis projects, helping them create user-friendly interfaces for their systems and applications. I designed wireframes, user flows, and high-fidelity prototypes to clearly present their system concepts and improve usability.",
  },
  {
    year: "2024",
    title: "Capstone Frontend Developer and Designer",
    description:
      "Served as the frontend developer and UI designer for our capstone project, responsible for designing the system interface and implementing the web-based user experience. I created the layout, navigation flow, and responsive design to ensure the system was accessible across different devices.",
  },
  {
    year: "2025",
    title: "Technical Support at Bangko Mabuhay",
    description:
      "Worked as a technical support assistant, helping employees resolve hardware, software, and basic network issues to maintain smooth office operations. My responsibilities included troubleshooting computer problems, assisting with system setups, and ensuring that workstations were functioning properly.",
  },
  {
    year: "2026",
    title: "Frontend Developer at Filinvest Land Philippines",
    description:
      "Worked on frontend development tasks for company web projects, translating designs into responsive pages and improving interface consistency across digital platforms. My responsibilities included building clean layouts, refining components, fixing UI issues, and ensuring smooth responsive behavior across different screen sizes.",
  },
];

const education = [
  {
    year: "2022 - 2026",
    school: "City College of Tagaytay",
    title: "Bachelor of Science in Computer Science",
    description:
      "Studied computer science with a focus on software development, web technologies, system design, and project-based learning. My academic experience helped me build a strong foundation in programming, problem-solving, database concepts, and modern web development.",
  },
  {
    year: "2024",
    school: "FreeCodeCamp.org",
    title: "Front-end Development Coding Bootcamp",
    description:
      "Completed self-paced frontend development training focused on HTML, CSS, JavaScript, responsive design, accessibility, and building interactive web interfaces through practical coding exercises.",
  },
  {
    year: "2024",
    school: "Flux Academy",
    title: "UI/UX Designing Bootcamp",
    description:
      "Studied UI/UX design principles including layout composition, typography, visual hierarchy, wireframing, prototyping, and user-centered design workflows for modern digital products.",
  },
];

const techStacks = [
  {
    label: "Frontend",
    value:
      "HTML, CSS, Tailwind CSS, React.js, Next.js, Vue.js, JavaScript, Svelte, Angular",
  },
  {
    label: "Backend",
    value: "Node.js, MongoDB, Laravel, PHP, Java, Python, Django",
  },
  {
    label: "Non-Code",
    value: "Figma, Framer, Webflow, Canva",
  },
  {
    label: "Artificial Intelligence",
    value: "Open AI, Gemini, Claude Code",
  },
];

const gallery = [
  "/images/gal1.png",
  "/images/gal2.png",
  "/images/gal3.png",
  "/images/gal5.png",
];

export default function BiographyPage() {
  return (
    <main className="min-h-screen bg-[#f3f3f1] px-6 pb-0 pt-6 text-[#151515] md:px-8 lg:px-10">
      <SiteHeader />

      <section className="mt-16 grid grid-cols-12 gap-6 md:mt-24 lg:mt-28">
        <div className="col-span-12 md:col-span-4">
          <p className="max-w-[300px] text-[15px] font-normal leading-[1.1] tracking-[-0.045em] text-black/50">
            How Design and Technology Shaped My Career
          </p>
        </div>

        <div className="col-span-12 md:col-span-8">
          <h1 className="text-[58px] font-normal leading-[0.9] tracking-[-0.09em] md:text-[88px] lg:text-[124px]">
            Biography
          </h1>

          <div className="mt-10 max-w-[850px] space-y-6">
            {biographyParagraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="text-[18px] font-normal leading-[1.22] tracking-[-0.055em] text-black/70 md:text-[22px]"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-28 border-t border-black/10 pt-10 md:mt-36">
        <h2 className="text-[44px] font-normal leading-none tracking-[-0.08em] md:text-[64px]">
          Experience
        </h2>

        <div className="mt-12 space-y-10">
          {experience.map((item) => (
            <div
              key={item.title}
              className="grid grid-cols-12 gap-6 border-t border-black/10 pt-8"
            >
              <p className="col-span-12 text-[14px] tracking-[-0.04em] text-black/45 md:col-span-4">
                {item.year}
              </p>

              <div className="col-span-12 max-w-[760px] md:col-span-8">
                <h3 className="text-[22px] font-medium leading-none tracking-[-0.06em]">
                  {item.title}
                </h3>

                <p className="mt-4 text-[16px] leading-[1.25] tracking-[-0.045em] text-black/55 md:text-[18px]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-28 border-t border-black/10 pt-10 md:mt-36">
        <h2 className="text-[44px] font-normal leading-none tracking-[-0.08em] md:text-[64px]">
          Education
        </h2>

        <div className="mt-12 space-y-10">
          {education.map((item) => (
            <div
              key={item.title}
              className="grid grid-cols-12 gap-6 border-t border-black/10 pt-8"
            >
              <div className="col-span-12 md:col-span-4">
                <p className="text-[14px] tracking-[-0.04em] text-black/45">
                  {item.year}
                </p>

                <p className="mt-2 text-[13px] tracking-[-0.04em] text-black/35">
                  {item.school}
                </p>
              </div>

              <div className="col-span-12 max-w-[760px] md:col-span-8">
                <h3 className="text-[22px] font-medium leading-none tracking-[-0.06em]">
                  {item.title}
                </h3>

                <p className="mt-4 text-[16px] leading-[1.25] tracking-[-0.045em] text-black/55 md:text-[18px]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-28 border-t border-black/10 pt-10 md:mt-36">
        <h2 className="text-[44px] font-normal leading-none tracking-[-0.08em] md:text-[64px]">
          Tech Stacks
        </h2>

        <div className="mt-12 space-y-6">
          {techStacks.map((stack) => (
            <div
              key={stack.label}
              className="grid grid-cols-12 gap-6 border-t border-black/10 pt-6"
            >
              <p className="col-span-12 text-[15px] font-medium tracking-[-0.045em] md:col-span-4">
                {stack.label}
              </p>

              <p className="col-span-12 max-w-[760px] text-[16px] leading-[1.25] tracking-[-0.045em] text-black/60 md:col-span-8 md:text-[18px]">
                {stack.value}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-28 border-t border-black/10 pt-10 md:mt-36">
        <h2 className="text-[44px] font-normal leading-none tracking-[-0.08em] md:text-[64px]">
          Gallery
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2">
          {gallery.map((image) => (
            <div
              key={image}
              className="relative h-[260px] overflow-hidden rounded-[22px] bg-black/5 md:h-[340px]"
            >
              <Image
                src={image}
                alt="Gallery image"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      <div className="-mx-6 mt-20 md:-mx-8 lg:-mx-10">
        <SiteFooter />
      </div>
    </main>
  );
}