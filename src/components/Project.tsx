import Image from "next/image";
import Link from "next/link";

interface ProjectProps {
  data: {
    name: string;
    image: string;
  };
}

export default function Project({ data }: ProjectProps) {
  const { name, image } = data;
  const url = "/portfolio/" + name.toLowerCase().replace(" ", "-");
  return (
    <div className="overflow-hidden w-full rounded-2xl relative project-hover">
      <Image
        src={image}
        alt={`Image of ${name}`}
        width={659}
        height={372}
        className="w-full object-cover project-image"
      />
      <Link
        href={url}
        className="project-hover-cape bg-project-cape absolute top-0 w-full h-full hidden justify-start items-end font-semibold text-4xl px-6 py-8"
      >
        {name}
      </Link>
    </div>
  );
}
