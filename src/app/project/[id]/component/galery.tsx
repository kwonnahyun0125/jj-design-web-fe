import { Modal } from "@/component/modal";
import { ProjectGalleryProps } from "@/type/project";
import Image from "next/image";
import { useEffect, useState } from "react";

export const DetailGalery = ({
  selectedView = "card",
  imageItems,
}: ProjectGalleryProps) => {
  //모달 열림 상태 관리
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);

  const handleClickImage = (index: number) => {
    // 이미지 클릭 시 동작
    setSelectedImageIndex(index);
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="border-t border-gray-200 mb-8 mx-8" />
      {selectedView === "card" ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8 px-8">
          <div className="lg:col-span-4 grid grid-cols-1 md:grid-cols-4 gap-4">
            {imageItems.map((item, idx) => (
              <div
                key={`image_${idx}`}
                className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden group cursor-pointer hover:shadow-md transition-shadow"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <Image
                    src={item.image.url || "/image/default-image.png"}
                    alt={""}
                    width={400}
                    height={300}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                    onClick={() => handleClickImage(idx)}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 mb-8 mx-8">
          {imageItems.map((item, idx) => (
            <div
              key={`image_${idx}`}
              className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden group cursor-pointer hover:shadow-md transition-shadow"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <Image
                  src={item.image.url || "/image/default-image.png"}
                  alt={""}
                  width={400}
                  height={300}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  onClick={() => handleClickImage(idx)}
                />
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="border-t border-gray-200 mb-8 px-8" />
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        size="full"
      >
        <div className="flex items-center justify-center overflow-y-auto">
          <Image
            src={
              imageItems[selectedImageIndex]?.image.url ||
              "/image/default-image.png"
            }
            alt={""}
            width={2560}
            height={1920}
            className="object-contain max-w-[70vw] max-h-[80vh] rounded-lg "
          />
        </div>
      </Modal>
    </>
  );
};
