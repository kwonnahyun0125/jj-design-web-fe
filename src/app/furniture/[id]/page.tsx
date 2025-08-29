import { FurnitureLocation } from "./component/location";
import { FurnitureSpace } from "./component/space";
import { FurnitureIntro } from "./component/Introduction";
import { FurnitureMatelrials } from "./component/matelrials";

const FurnitureDetailPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* 직영가구 소개 페이지 */}
      <FurnitureIntro />

      {/* 직영가구 공간 안내 */}
      <FurnitureSpace />

      {/* 직영가구 제작 안내 */}
      <FurnitureMatelrials />

      {/* 직영가구 위치 안내 */}
      <FurnitureLocation />
    </div>
  );
};

export default FurnitureDetailPage;
