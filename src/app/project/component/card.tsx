import Image from "next/image";
import Link from "next/link";

export const ProjectCard = ({
  id,
  title,
  year,
  py,
  price,
  img,
  label,
}: {
  id: number;
  title: string;
  year: number;
  py: number;
  price: number;
  img: string;
  label: string;
}) => {
  return (
    <Link
      href={`/project/${id}`}
      className="bg-white rounded-lg shadow overflow-hidden flex flex-col min-h-[350px]"
    >
      <div className="relative">
        {label && (
          <span className="absolute top-2 left-2 bg-black text-white text-xs font-bold px-2 py-1 rounded z-10">
            {label}
          </span>
        )}
        <Image
          width={400}
          height={300}
          src={img}
          alt={title}
          className="w-full h-48 object-cover"
        />
      </div>
      <div className="p-4 flex flex-col gap-1 flex-1">
        <h4 className="font-semibold text-lg">
          {title} <span className="text-xs align-top">{py}PY</span>
        </h4>
        <div className="text-xs text-gray-500">{year} 준공</div>
        <div className="text-xs text-gray-500">
          평당 {Math.round(price / py / 10000)}만원
        </div>
        <div className="font-bold text-2xl mt-2">
          {price.toLocaleString()}
          <span className="text-base font-normal">원</span>
        </div>
      </div>
    </Link>
  );
};
