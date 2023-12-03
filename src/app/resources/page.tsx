import Article from "@/components/Article";
import MainSection from "@/components/MainSection";

export default function Page() {
  return (
    <>
      <MainSection />
      <div className="articles px-5 max-w-[1500px]">
        <Article
          data={{
            image: "http://lorempixel.com.br/1000/500",
            minutes: 5,
            title: "Cómo utilizar menos para lograr más",
            description:
              "Lorem ipsum dolor sit amet consectetur. Nisi tincidunt pretium adipiscing diam dolor varius ipsum. Vel volutpat faucibus tincidunt vitae at.",
          }}
        />
        <Article
          data={{
            image: "http://lorempixel.com.br/1000/500",
            minutes: 5,
            title: "Cómo utilizar menos para lograr más",
            description:
              "Lorem ipsum dolor sit amet consectetur. Nisi tincidunt pretium adipiscing diam dolor varius ipsum. Vel volutpat faucibus tincidunt vitae at.",
          }}
        />
      </div>
    </>
  );
}
