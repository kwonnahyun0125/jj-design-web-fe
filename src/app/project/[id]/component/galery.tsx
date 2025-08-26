import { ProjectGalleryProps } from "@/type/project";
import Image from "next/image";

export const DetailGalery = ({
  selectedView = "card",
  imageList,
}: ProjectGalleryProps) => {
  return (
    <>
      <div className="border-t border-gray-200 mb-8 mx-8" />
      {selectedView === "card" ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8 px-8">
          <div className="lg:col-span-4 grid grid-cols-1 md:grid-cols-4 gap-4">
            {imageList.map((image, idx) => (
              <div
                key={`${image.id}_${idx}`}
                className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden group cursor-pointer hover:shadow-md transition-shadow"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <Image
                    src={image.img}
                    alt={image.label}
                    width={400}
                    height={300}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 mb-8 mx-8">
          {imageList.map((image, idx) => (
            <div
              key={`${image.id}_${idx}`}
              className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden group cursor-pointer hover:shadow-md transition-shadow"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <Image
                  src={image.img}
                  alt={image.label}
                  width={400}
                  height={300}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="border-t border-gray-200 mb-8 px-8" />
    </>
  );
};
