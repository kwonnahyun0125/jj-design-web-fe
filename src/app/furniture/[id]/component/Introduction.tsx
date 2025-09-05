import Image from "next/image";
import { Furniture } from "@/type/furniture";

export const FurnitureIntro = ({ furniture }: { furniture: Furniture }) => {
  const { name, description, coverImageUrl, introText } = furniture;

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {name}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed white-space-pre-line">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="relative items-center justify-center flex">
            <Image
              src={coverImageUrl || "/image/no-image.png"}
              alt={name}
              width={600}
              height={450}
              className="rounded-2xl shadow-xl"
            />
          </div>

          <div className="space-y-8">
            <div className="text-lg text-gray-700 leading-relaxed space-y-6">
              <p>{introText}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
