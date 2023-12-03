import Image from "next/image";

export default function MainSection() {
  return (
    <div className="h-[485px] max-w-[380px] flex flex-col justify-center items-center gap-6 text-center lg:max-w-[800px] lg:h-[600px]">
      <Image
        src={"/imgs/Matias Cánepa.png"}
        alt="Matias Kanepa"
        width={80}
        height={80}
        className="w-[80px] h-[80px] rounded-full bg-black"
      />
      <h1 className="text-4xl font-bold lg:text-[76px] lg:leading-none">
        Hi! I’m Matias Cánepa
        <br /> a Product designer
      </h1>
      <p className="text-base font-normal w-[464px] max-w-[90%] lg:text-2xl lg:w-[608px]">
        Lorem ipsum dolor sit amet consectetur. Accumsan donec nunc netus facilisis at tellus diam
        viverra proin.
      </p>
      <button className="border rounded-full p-[19px] text-base font-semibold">
        matiascanepadcv@gmail.com
      </button>
    </div>
  );
}
