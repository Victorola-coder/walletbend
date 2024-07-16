import Button from "./button";

export default function Hero() {
  return (
    <section className="flex flex-col items-center mt-10 mx-[24px]_">
      <div className="max-w-[342px] md:max-w-[812px]">
        <h4 className="max-w-max font-kai font-medium text-[32px] leading-[41.6px] text-center text-[#000F40] md:text-[52px] md:leading-[62.4px]">
          The Financial Companion for the new generation
        </h4>
        <p className="font-normal text-base leading-[24px] text-center text-[#80879F] md:text-[18px] md:leading-[27px]">
          Your comprehensive financial companion, providing a unified view of
          your finances in a single, user-friendly interface. Connecting all
          your bank accounts, credit cards.
        </p>
      </div>
      <Button>Get Started Now</Button>

      <figure className="block md:hidden mt-[28px] mx-0 md:mt-[64px] md:mx-[120px]">
        <img
          src="/images/hero.png"
          alt="hero"
          draggable={false}
          loading="lazy"
          className="transition-all duration-300 hover:scale-[0.98]"
        />
      </figure>
      <figure className="md:block hidden mt-[28px] mx-0 md:mt-[64px] md:mx-[120px]">
        <img
          src="/images/heroo.png"
          alt="hero_dewktop"
          draggable={false}
          loading="lazy"
          className="transition-all duration-300 hover:scale-[1]"
        />
      </figure>
    </section>
  );
}
