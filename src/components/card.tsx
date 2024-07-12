interface CardProps {
  img: string;
  name: string;
  date: string;
  text: string;
}

export const Card = ({ img, name, date, text }: CardProps) => {
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
