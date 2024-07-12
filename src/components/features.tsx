import { Card } from "./card";

export default function features() {
  return (
    <section>
      <div className="md:my-[64px] mx-[100px] ">
        <p className="font-lato font-normal text-[18px] leading-[21.6px] text-[#80879F]">
          What our customers says?
        </p>
        <h1 className="font-kai text-medium text-[40px] leading-[57.92px] text-[#000F40]">
          Financial Life, Simplified.
        </h1>
        <div className="flex flex-row items-center max-w-[434px] gap-[32px]">
          <Card
            img="/images/pena.png"
            name="Eleanor Pena"
            date="October 31, 2023"
            text="I was always struggling to keep track of my finances. I had multiple
        bank accounts and credit cards, and I was constantly worried about
        overspending. Then I discovered Wallet Blend. It was a game-changer! Now
        I can see all of my accounts in one place, and I can easily track my
        spending and set budgets. I've even saved money since I started using
        Wallet Blend. Thanks, Wallet Blend!"
          />
        </div>
      </div>

      {/* ---------------- */}
      <div className="bg-[#EEF3FF] mx-[120px] my-[64px] rounded-[40px] p-[64px] flex flex-row items-center justify-between">
        <div>
          <h2 className="font-kai font-bold text-[40px] leading-[60px] tracking-tight text-black">
            Link cards
          </h2>
          <h4 className="mt-4 font-lato max-w-[564px]">
            <span className="font-bold text-[48px] leading-[48px] text-[#EEF3FF] bg-[#2E5EFF] rounded-[60px] py-[12px] px-[18px]">
              10%
            </span>
            <span className="font-semibold text-[40px] leading-[60px]">
              {" "}
              discount on every card transaction
            </span>
          </h4>
        </div>

        <img src="/images/link.png" alt="link" draggable={false} />
      </div>

      {/* ------------------ */}
    </section>
  );
}
