import { useRef, useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface NavlinkProps {
  title: string;
  href: string;
}

export default function Navbar() {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const navRef = useRef<any>(null);

  const handleClick = useCallback(
    function (e: Event) {
      if (isOpened && !navRef.current.contains(e.target)) {
        setIsOpened(false);
      }
    },
    [isOpened]
  );

  useEffect(() => {
    if (typeof window === "undefined") return;

    if (isOpened) {
      setTimeout(() => {
        window.addEventListener("mousedown", handleClick);
      });
    } else {
      window.removeEventListener("mousedown", handleClick);
    }
  }, [isOpened, handleClick]);

  const navlinks: NavlinkProps[] = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Features",
      href: "/#features",
    },
    {
      title: "Benefits",
      href: "/#benefits",
    },
    {
      title: "About Us",
      href: "/#about-us",
    },
    {
      title: "Log In",
      href: "/login",
    },
  ];

  return (
    <header>
      <nav className="mx-[18px] py-[21.33px] flex flex-row justify-between items-center">
        <div className="flex flex-row gap-1.5">
          <figure>
            <img
              src="/images/logo.png"
              alt="logo"
              draggable={false}
              className="w-[26.67px] h-[21.33px]"
              loading="lazy"
            />
          </figure>
          <p className="text-[#000F40] font-mar text-[19.2px] leading-[24.08px] ">
            WalletBend
          </p>
        </div>
        {/* MOBILE NAV */}
        <div className="md:hidden" ref={navRef}>
          <div className="">
            <button
              className="space-y-1.5 focus:outline-none  border-[#EAEBF0] p-1 pb-1.5 rounded-[5px]"
              onClick={() => setIsOpened(!isOpened)}
            >
              <div
                className={`rounded-full h-0.5 bg-black transition-all duration-300 ${
                  isOpened
                    ? "w-7 rotate-45 translate-y-2.5"
                    : "w-7 rotate-0 translate-x-5_"
                }`}
              />
              <div
                className={`rounded-full h-0.5 bg-black w-7 translate-x-[px] transition-all duration-300  ${
                  isOpened ? "opacity-0" : "opacity-100"
                }`}
              />
              <div
                className={`rounded-full h-0.5 bg-black self-end transition-all duration-300 ${
                  isOpened
                    ? "w-7 -rotate-45 -translate-y-1.5"
                    : "w-7 translate-x-[x] rotate-0"
                }`}
              />
            </button>
            <div>
              <div
                className={`grad z-[100] absolute bg-white px-[26px] py-[28px] border-[1.5px] shadow-lg block mt-[60px] md:hidden transition-all duration-300 ${
                  isOpened ? "-translate-y-[50px]" : "-translate-y-[200%]"
                } pt-4 left-0 right-0`}
              >
                <ul className="flex flex-col gap-[22px] items-center justify-center  mx-auto font-medium text-base tracking-tight text-center leading-[24px] font-sailmed text-dark">
                  {navlinks.map((link, id) => (
                    <li key={id}>
                      <Link
                        onClick={() => setIsOpened(!isOpened)}
                        to={link.href}
                        replace={link.href === "/login"}
                      >
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link to="/signup">
                  <button
                    onClick={() => setIsOpened(!isOpened)}
                    className="mt-5 bg-[#2E5EFF] mx-auto block whitespace-nowrap  text-[16px] px-[32px] py-[12px] md:py-[18px] leading-[33px] rounded-[12px] md:absolute md:top-2 md:bottom-2 md:right-[7.8px] text-center outline-none md:px-[37.74px] font-sailmed text-[#ffffff] md:text-[20px] md:w-[218px] font-medium md:leading-[25.65px] md:rounded-[35.942px]"
                  >
                    Download our App
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
