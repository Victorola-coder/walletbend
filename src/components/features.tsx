interface CardProps {
  img: string;
  name: string;
  date: string;
  text: string;
}

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
          <Cards
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
    </section>
  );
}

const Cards = ({ img, name, date, text }: CardProps) => {
  return (
    <div className="flex flex-col items-start bg-[#EEF3FF]  rounded-[15px] p-[24px]">
      <div className="flex flex-row items-center gap-4">
        <img
          src={img}
          alt={name}
          draggable={false}
          className="w-[50] h-[50px] rounded-full object-cover"
        />
        <div>
          <p className="font-kai text-[#000F40] font-bold text-base leading-[24px]">
            {name}
          </p>
          <p className="font-lato text-[#80879F] font-normal text-[12px] leading-[14px]">
            {date}
          </p>
        </div>
      </div>
      <figure className="mt-4">
        <img src="/images/rating.png" alt="rating" draggable={false} />
      </figure>

      <h4 className="font-lato text-[#80879F] text-[16px] leading-[24px] max-w-[386px ">
        {text}
      </h4>
    </div>
  );
};
