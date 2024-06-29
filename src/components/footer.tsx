import { Applestore, Playstore } from "./svgs";

export default function Footer() {
  return (
    <footer className="bg-[#2E5EFF] px-[24px] py-[32px] flex flex-col">
      <div>
        <figure>
          <img
            src="/images/qr.png"
            alt="walletbend.app"
            draggable={false}
            loading="lazy"
          />
        </figure>

        <p className="font-normal max-w-[342px] font-kai text-[24px] leading-[34.75px] text-left text-white">
          Get control of your finance now
        </p>
      </div>
      {/* app and google dowwnload */}
      <div className="flex flex-row items-center justify-center mt-[24px] gap-[28.45px]"></div>
    </footer>
  );
}
