import MainSection from "@/components/MainSection";

export default function Page() {
  return (
    <>
      <MainSection />
      <div className="px-4 max-w-[390px] lg:max-w-[800px]">
        <section className="flex flex-col gap-4 py-12">
          <h2 className="text-4xl font-medium">About me</h2>
          <p className="text-base font-normal">
            Always seeking for opportunities to collaborate with companies that are dedicated to
            revolutionizing the world through their products.
            <br />
            <br />
            My creative process involves active observation at every stage, with a focus on
            continuous improvement.
            <br />
            <br />I begin by deeply understanding project goals, the target audience, and unique
            challenges. Throughout the design process, I prioritize aspects like information
            architecture, accessibility, affordability. I believe these elements are crucial for
            enhancing user experiences, ensuring inclusivity, and creating designs that meet both
            user and business needs.
          </p>
        </section>
        <hr className="border-t border-black" />
        <section className="flex flex-col gap-4 py-12">
          <h2 className="text-4xl font-medium">What im looking for?</h2>
          <p className="text-base font-normal">
            Always opportunities to collaborate with forward-thinking companies that are dedicated
            to revolutionizing the world through their products.
          </p>
        </section>
        <hr className="border-t border-black" />
        <section className="flex flex-col gap-4 py-12">
          <h2 className="text-4xl font-medium">My process?</h2>
          <p className="text-base font-normal">
            My creative process involves active observation at every stage, with a focus on
            continuous improvement.
            <br />
            <br /> I begin by deeply understanding project goals, the target audience, and unique
            challenges. Throughout the design process, I prioritize aspects like information
            architecture, accessibility, affordability. I believe these elements are crucial for
            enhancing user experiences, ensuring inclusivity, and creating designs that meet both
            user and business needs.
          </p>
        </section>
      </div>
    </>
  );
}
