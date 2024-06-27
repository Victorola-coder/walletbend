import { Binance, Bitcoin, Bitmex, Tether } from "./svgs";

export default function Partner() {
  return (
    <section className="flex flex-col items-center mt-10 mx-[24px]_">
      <div className="mx-auto">
        <h4 className="block mx-auto font-kai font-medium text-[32px] leading-[41.6px] text-center text-[#000F40]">
          Our Partners
        </h4>
        <p className="font-normal text-base leading-[24px] text-center text-[#80879F]">
          Some of our top finance platforms partners.
        </p>
      </div>

      <div className="flex flex-row items-center overflow-auto gap-[70px] py-[30px] animate-fade-in">
        <Binance />
        <Bitcoin />
        <Tether />
        <Bitmex />
      </div>
    </section>
  );
}
