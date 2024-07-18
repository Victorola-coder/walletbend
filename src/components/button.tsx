interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  prop?: object;
  className?: string;
  children: React.ReactNode;
}

export default function Button({ ...props }: ButtonProps) {
  const { prop, className, children } = props;
  return (
    <button
      {...prop}
      className={`${className} bg-[#2E5EFF] mt-[32px] px-[24px] py-[12px] rounded-[30px] text-white font-semibold leading-[22px] text-base transition-all duration-300 active:scale-95`}
    >
      {children}
    </button>
  );
}
