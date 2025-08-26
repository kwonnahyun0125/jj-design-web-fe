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
          className={`flex items-center justify-center p-2 border border-gray-300 rounded-md hover:bg-gray-50 ${
            selectedView === "card" ? "bg-gray-200" : ""
          }`}
          onClick={() => setSelectedView("card")}
        >
          <CardViewIcon />
        </Button>
        <Button
          className={`flex items-center justify-center p-2 border border-gray-300 rounded-md hover:bg-gray-50 ${
            selectedView === "list" ? "bg-gray-200" : ""
          }`}
          onClick={() => setSelectedView("list")}
        >
          <ListViewIcon />
        </Button>
      </div>
    </>
  );
};
