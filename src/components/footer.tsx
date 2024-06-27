export default function Footer() {
  return (
    <footer className="bg-[#2E5EFF] px-[24px] py-[32px] flex flex-col">
      <div>
        <figure>
          <img
            src="/images/qrcode.png"
            alt="walletbend.app"
            draggable={false}
            loading="lazy"
          />
        </figure>

        <p>Get control of your finance now</p>
      </div>
      {/* app and google dowwnload */}
      <div className="flex flex-row items-center justify-center gap-[28.45px]">
        <div></div>
      </div>
    </footer>
  );
}
