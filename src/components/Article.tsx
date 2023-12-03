import Image from "next/image";
import Link from "next/link";

interface ProjectProps {
  data: {
    image: string;
    minutes: number;
    title: string;
    description: string;
  };
}

export default function Article({ data }: ProjectProps) {
  const { image, minutes, title, description } = data;
  const url = "/resources/" + title.toLowerCase().replace(" ", "-");
  return (
    <Link href={url} className="flex flex-col gap-6 border-b border-black lg:pb-12">
      <aside className="overflow-hidden w-full rounded-2xl relative">
        <Image
          src={image}
          alt={`Image of ${title}`}
          width={659}
          height={372}
          className="w-full object-cover project-image"
        />
      </aside>
      <article className="flex flex-col gap-4 items-start">
        <span className="text-sm font-normal">{minutes} min read</span>
        <h1 className="text-2xl font-medium lg:text-4xl">{title}</h1>
        <p className="text-lg font-normal lg:text-2xl">{description}</p>
        <button className="text-sm font-normal">Read more</button>
      </article>
    </Link>
  );
}
