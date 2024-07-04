import { Link } from "react-router-dom";
import { AppleStore, PlayStore } from "./svgs";

interface LinksProps {
  title: string;
  href: string;
}

export default function Footer() {
  const links: LinksProps[] = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Our Products",
      href: "/product",
    },

    {
      title: "Contact",
      href: "/contacts",
    },
  ];
  return (
    <footer className="bg-[#2E5EFF] px-[24px] py-[32px] flex flex-col md:flex  md:flex-row md:items-center">
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
        {/* app and google dowwnload */}
        <div className="flex flex-row items-center justify-center mt-[24px] gap-[28.45px]">
          <AppleStore />
          <PlayStore />
        </div>
      </div>

      {/* image */}
      <figure className="my-[32px]">
        <img
          src="/images/app.png"
          alt="walletbend_app_screenshot"
          draggable={false}
          loading="lazy"
          className="object-cover"
        />
      </figure>

      {/* line */}
      <div className="bg-white h-[1px]"></div>

      <div className="flex flex-row items-center gap-1.5 justify-center">
        <figure>
          <svg
            width="33"
            height="33"
            viewBox="0 0 33 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M6.13298 6.06885H27.4663C28.9391 6.06885 30.133 7.26275 30.133 8.73551V24.7355C30.133 26.2083 28.9391 27.4022 27.4663 27.4022H6.13298C4.66022 27.4022 3.46631 26.2083 3.46631 24.7355V8.73551C3.46631 7.26275 4.66022 6.06885 6.13298 6.06885Z"
              fill="white"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M25.4666 15.4014H8.1333C7.02873 15.4014 6.1333 16.2968 6.1333 17.4014V18.068H12.2477C12.6013 18.068 12.9404 18.2085 13.1905 18.4586L14.5238 19.7919C15.1275 20.3956 15.9462 20.7347 16.8 20.7347C17.6537 20.7347 18.4724 20.3956 19.0761 19.7919L20.4094 18.4586C20.6595 18.2085 20.9986 18.068 21.3523 18.068H27.4666V17.4014C27.4666 16.2968 26.5712 15.4014 25.4666 15.4014Z"
              fill="#2E5EFF"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8.1333 8.73535C7.02873 8.73535 6.1333 9.63078 6.1333 10.7354V11.402H27.4666V10.7354C27.4666 9.63078 26.5712 8.73535 25.4666 8.73535H8.1333Z"
              fill="#2E5EFF"
            />
          </svg>
        </figure>
        <p className="text-white font-mar text-[19.2px] leading-[24.08px] ">
          WalletBend
        </p>
      </div>

      <div className="py-[24px]">
        <ul className="flex flex-row gap-[32px] items-center justify-center  mx-auto font-medium text-base tracking-tight text-center leading-[24px] text-white">
          {links.map((link, id) => (
            <li key={id}>
              <Link to={link.href}>{link.title}</Link>
            </li>
          ))}
        </ul>
      </div>

      {/* links */}
      <div className="flex flex-row items-center justify-center gap-[32px]">
        <figure className="w-[32px] h-[32px] rounded-full bg-white transition-all duration-300 flex flex-col items-center justify-center hover:bg-white/80 hover:text-white">
          <img
            src="/images/facebook.svg"
            className="w-fit hover:text-white"
            alt="facebook_icon"
            draggable={false}
            loading="lazy"
          />
        </figure>
        <figure className="w-[32px] h-[32px] rounded-full bg-white transition-all duration-300 flex flex-col items-center justify-center hover:bg-white/80 hover:text-white">
          <img
            src="/images/instagram.svg"
            className="w-fit hover:text-white"
            alt="instagram_icon"
            draggable={false}
            loading="lazy"
          />
        </figure>
        <figure className="w-[32px] h-[32px] rounded-full bg-white transition-all duration-300 flex flex-col items-center justify-center hover:bg-white/80 hover:text-white">
          <img
            src="/images/x.svg"
            className="w-fit hover:text-white"
            alt="x_icon"
            draggable={false}
            loading="lazy"
          />
        </figure>
      </div>
    </footer>
  );
}
