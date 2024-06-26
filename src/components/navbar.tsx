import { useRef, useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpened, setIsOpened] = useState<boolean>(false);
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

  return (
    <header>
      <nav className="mx-[18px] py-[21.33px] flex flex-row justify-between items-center">
        <div>
          <figure>
            <img
              src="/images/logo.png"
              alt="logo"
              draggable={false}
              className="w-[26.67px] h-[21.33px]"
              loading="lazy"
            />
          </figure>
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
                  <li>
                    <Link to="#features">Home</Link>
                  </li>
                  <li>
                    <Link to="#faqs">Features</Link>
                  </li>
                  <li>
                    <Link to="#benefits">Benefits</Link>
                  </li>
                  <li>
                    <Link to="#about">About Us</Link>
                  </li>
                  <li>
                    <Link to="/login" replace>
                      Log In
                    </Link>
                  </li>
                </ul>
                <Link to="/sign-up">
                  <button className="mt-5 bg-[#2E5EFF] mx-auto block whitespace-nowrap w-[330px] text-[16px] py-[12px] md:py-[18px] leading-[33px] rounded-[12px] md:absolute md:top-2 md:bottom-2 md:right-[7.8px] text-center outline-none md:px-[37.74px] font-sailmed text-[#ffffff] md:text-[20px] md:w-[218px] font-medium md:leading-[25.65px] md:rounded-[35.942px]">
                    download our app
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
