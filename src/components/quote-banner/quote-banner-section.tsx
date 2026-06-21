import Image from "next/image";

export function QuoteBannerSection() {
  return (
    <section className="w-full overflow-hidden bg-[#f3f3f1] py-8 text-[#151515] md:py-10 lg:py-12">
      <div className="relative h-[340px] w-full overflow-hidden md:h-[430px] lg:h-[500px]">
        <Image
          src="/images/archi.png"
          alt="Architecture background"
          fill
          sizes="100vw"
          className="object-cover brightness-[0.55]"
        />

        <div className="absolute inset-0 bg-black/45" />

        <div className="relative z-10 flex h-full items-center justify-center px-6 text-center">
          <h2 className="text-[18px] font-bold leading-none tracking-[-0.045em] text-white md:text-[24px] lg:text-[30px]">
            Design is learned. Empathy is felt.
          </h2>
        </div>
      </div>
    </section>
  );
}