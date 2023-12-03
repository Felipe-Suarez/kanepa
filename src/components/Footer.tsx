import Image from "next/image";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center py-12 lg:w-10/12 lg:m-auto relative">
      <Image
        src={"/imgs/Matias Cánepa.png"}
        alt="Matias Kanepa"
        width={80}
        height={80}
        className="w-[80px] h-[80px] rounded-full bg-black lineElement"
      />
      <span className="text-xl font-bold mt-6 mb-2">Matias Cánepa</span>
      <a className="text-base font-semibold" href={"https://www.linkedin.com/in/mcanepadcv"}>
        LinkedIn
      </a>
    </footer>
  );
}
