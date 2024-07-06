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
        <div>
          <Cards />
        </div>
      </div>
    </section>
  );
}

const Cards = () => {
  return <div className="flex flex-col items-start"></div>;
};
