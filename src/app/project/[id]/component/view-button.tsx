import { Button } from "@/component/button";
import { CardViewIcon, ListViewIcon } from "@/component/Icon";
import { ViewButtonProps } from "@/type/project";

export const ViewGroupButton = ({
  selectedView,
  setSelectedView,
}: ViewButtonProps) => {
  return (
    <>
      {/* view type 버튼 */}
      <div className="flex items-center gap-2">
        <Button
          className={`flex items-center justify-center p-2 rounded-md ${
            selectedView === "card"
              ? "bg-[#111827] text-white"
              : "bg-[#E5E7EB] text-black"
          }`}
          onClick={() => setSelectedView("card")}
        >
          <CardViewIcon />
        </Button>
        <Button
          className={`flex items-center justify-center p-2 rounded-md ${
            selectedView === "list"
              ? "bg-[#111827] text-white"
              : "bg-[#E5E7EB] text-black"
          }`}
          onClick={() => setSelectedView("list")}
        >
          <ListViewIcon />
        </Button>
      </div>
    </>
  );
};
