import { Binance, Coinbase, Bitcoin, Bitmex, Tether } from "./svgs";

export default function Partner() {
  return (
    <section className="flex flex-col items-center mt-10 mx-[24px]_">
      <div className="mx-auto">
        <h4 className="block mx-auto font-kai font-medium text-[32px] leading-[41.6px] text-center text-[#000F40]">
          Our Partners
        </h4>
        <p className="font-normal text-base leading-[24px] text-center text-[#80879F] md:text-[18px]">
          Some of our top finance platforms partners.
        </p>
      </div>

      <div className="animate-alternate_  flex flex-row  flex-wrap flex-1 flex-auto items-center overflow-auto gap-[70px] py-[30px] animate-fade-in">
        <Binance />
        <Coinbase />
        <Bitcoin />
        <Tether />
        <Bitmex />
      </div>
    </section>
  );
}
