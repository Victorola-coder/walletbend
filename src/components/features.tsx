import Button from "./button";
import { Card } from "./card";
import { DataDriven } from "./svgs";

export default function features() {
  return (
    <section className="md:my-[64px] mx-[100px] flex flex-col gap-[64px]">
      {/* data driven  */}
      <div className="flex flex-row items-center justify-between flex-1">
        <div className=" rounded-[27.61px] mt-[32px] flex flex-col pl-[32px] pt-[32px]  bg-[#FFA158]">
          <figure>
            <DataDriven />
          </figure>
          <h4 className="text-white font-bold text-[40px] leading-[50px] font-kai max-w-[325px] ">
            Data-Driven Insights for Financial Success
          </h4>
          {/* button and image */}
          <div className="flex flex-row items-end gap-4">
            <button className="bg-transparent border border-solid mb-[32px] transition-all duration-300 active:scale-95 border-white font-lato whitespace-nowrap text-[16px] px-[32px] py-[12px] md:py-[12px] md:px-[18px] leading-[22px] rounded-[12px] text-center outline-none text-[#ffffff] md:text-[16px] md:w-[118px] font-medium md:leading-[22px] md:rounded-[30px]">
              Get Started
            </button>
            {/* image */}
            <figure>
              <img
                src="/images/data-phone.png"
                draggable={false}
                className="w-[300px_] pr-[32px]"
                alt="image illustration"
              />
            </figure>
          </div>
        </div>

        {/* all your bank */}
        <div className="bg-[#F5F5F4] pl-[36px] pb-[24px] rounded-[27.61px] flex flex-col gap-[63px]">
          <figure>
            <img
              src="/images/banks.png"
              alt="multiple_banks"
              className=""
              draggable={false}
              loading="lazy"
            />
          </figure>

          <h4 className="font-kai text-black font-bold text-[24px] leading-[35px] max-w-[242px] ">
            All Your Bank Accounts. <br />
            <span className="text-[#00000080]">One Simple App</span>
          </h4>
        </div>

        {/* your finances*/}
        <div className="bg-[#F5F5F4] pl-[36px] pb-[24px] rounded-[27.61px] flex flex-col gap-[63px]">
          <figure>
            <img
              src="/images/banks.png"
              alt="multiple_banks"
              className=""
              draggable={false}
              loading="lazy"
            />
          </figure>

          <h4 className="font-kai text-black font-bold text-[24px] leading-[35px] max-w-[242px] ">
            All Your Bank Accounts. <br />
            <span className="text-[#00000080]">One Simple App</span>
          </h4>
        </div>
      </div>

      <div className="flex flex-row items-center justify-between">
        <figure>
          <img
            src="/images/yo.png"
            alt="feature illustration"
            className="w-6500px] h-[500px] transition-all duration-300 hover:scale-105"
            draggable={false}
            loading="lazy"
          />
        </figure>
        <div className="flex flex-col items-end text-right">
          <h4 className="font-kai text-[#000F40] text-[40px] leading-[57.96px] font-medium ">
            Get the full picture of your finances
          </h4>

          <p className="font-lato font-normal text-[16px] leading-[24px] text-[#80879F] self-end max-w-[459px]">
            Ditch the multiple apps and passwords. Wallet Blend is your one-stop
            shop for all your banks. Track your spending, view balances, and
            transfer money with just a few taps. It's the easiest way to manage
            your money, stress-free.
          </p>

          <Button className="mt-[32px]">Get started</Button>
        </div>
      </div>

      {/*  */}
      <div>
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
      <div className="bg-[#EEF3FF] mx-[120px] my-[64px] rounded-[40px] px-[64px] flex flex-row items-center justify-between">
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

          <Button>Get Started</Button>
        </div>

        <img src="/images/link.png" alt="link" draggable={false} />
      </div>

      {/* ------------------ */}
    </section>
  );
}
