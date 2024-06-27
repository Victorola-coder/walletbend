export default function Hero() {
  return (
    <section className="flex flex-col items-center mt-10 mx-[24px]_">
      <div className="max-w-[342px]">
        <h4 className="max-w-max font-kai font-medium text-[32px] leading-[41.6px] text-center text-[#000F40]">
          The Financial Companion for the new generation
        </h4>
        <p className="font-normal text-base leading-[24px] text-center text-[#80879F]">
          Your comprehensive financial companion, providing a unified view of
          your finances in a single, user-friendly interface. Connecting all
          your bank accounts, credit cards.
        </p>
      </div>
      <button className="bg-[#2E5EFF] mt-[32px] px-[24px] py-[12px] rounded-[30px] text-white font-semibold leading-[22px] text-base ">
        Get Started Now
      </button>

      <figure className="mt-[28px]">
        <img
          src="/images/hero.png"
          alt="hero"
          draggable={false}
          loading="lazy"
        />
      </figure>
    </section>
  );
}
