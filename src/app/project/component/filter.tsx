import { useEffect, useState } from "react";
import { Button } from "@/component/button";
import { Keyword, Lineup, ProjectListFilterProps } from "@/type/project";
import { lineupItems, pyItems } from "@/api/project/data";

export const ProjectFilter = ({
  typeFilter,
  setCondition,
}: ProjectListFilterProps) => {
  const [checkedPyItems, setCheckedPyItems] = useState<string[]>([]);
  const [checkedTypeItem, setCheckedTypeItem] = useState<string>("");
  const [checkedLineupItem, setCheckedLineupItem] = useState<Lineup>(
    Lineup.ALL
  );

  useEffect(() => {
    if (typeFilter.length > 0) {
      setCheckedTypeItem(typeFilter[0].key);
    }
    setCheckedPyItems([]);
    setCheckedTypeItem(typeFilter[0]?.key || "");
    setCheckedLineupItem(lineupItems[0].key as Lineup);
  }, [typeFilter]);

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "pyung") {
      if (checkedPyItems.includes(value)) {
        setCheckedPyItems(checkedPyItems.filter((item) => item !== value));
      } else {
        setCheckedPyItems([...checkedPyItems, value]);
      }
    } else if (name === "type") {
      setCheckedTypeItem(value);
    } else if (name === "lineup") {
      setCheckedLineupItem(value as Lineup);
    }
  };

  const handleFilterBtnClick = () => {
    setCondition((prev) => ({
      ...prev,
      page: 1,
      pyung: checkedPyItems,
      keyword: checkedTypeItem as Keyword,
      lineup: checkedLineupItem,
    }));
  };

  const handleClearBtnClick = () => {
    setCheckedPyItems([]);
    setCheckedTypeItem(typeFilter[0]?.key || "");
    setCheckedLineupItem(lineupItems[0].key as Lineup);
    setCondition((prev) => ({
      ...prev,
      page: 1,
      search: "",
      pyung: [],
      keyword: (typeFilter[0]?.key || "") as Keyword,
      lineup: Lineup.FULL,
    }));
  };

  return (
    <aside className="bg-white h-full border-r border-gray-300 py-10 px-6 overflow-y-auto flex flex-col">
      <div className="space-y-6 flex-1">
        {/* 평형 필터 */}
        <section>
          <h3 className="font-semibold text-gray-900 mb-4 text-lg">평형</h3>
          <div className="space-y-3">
            {pyItems.map((item) => (
              <label
                key={item.key}
                className="flex items-center space-x-2 cursor-pointer"
              >
                <input
                  key={item.key}
                  id={item.key}
                  name="pyung"
                  type="checkbox"
                  value={item.key}
                  checked={checkedPyItems.includes(item.key)}
                  onChange={(e) => handleFilterChange(e)}
                  className="w-5 h-5 text-teal-600 border-gray-300 rounded focus:ring-teal-500 focus:ring-2"
                />
                <span className="text-base text-gray-700">{item.label}</span>
              </label>
            ))}
          </div>
        </section>

        {/* 타입 필터 */}
        <section>
          <h3 className="font-semibold text-gray-900 mb-4 text-lg">타입</h3>
          <div className="space-y-3">
            {typeFilter.map((type) => {
              return (
                <label
                  key={type.key}
                  className="flex items-center space-x-2 cursor-pointer"
                >
                  <input
                    id={type.key}
                    key={type.key}
                    name="type"
                    type="radio"
                    value={type.key}
                    onChange={(e) => handleFilterChange(e)}
                    checked={checkedTypeItem === type.key}
                    className="w-5 h-5 text-teal-600 border-gray-300 rounded focus:ring-teal-500 focus:ring-2"
                  />
                  <span className="text-base text-gray-700">{type.label}</span>
                </label>
              );
            })}
          </div>
        </section>

        {/* 라인업 필터 */}
        <section>
          <h3 className="font-semibold text-gray-900 mb-4 text-lg">라인업</h3>
          <div className="space-y-3">
            {/* 라인업 필터 항목 */}
            {lineupItems.map((item) => {
              return (
                <label
                  key={item.key}
                  className="flex items-center space-x-2 cursor-pointer"
                >
                  <input
                    id={item.key}
                    key={item.key}
                    name="lineup"
                    type="radio"
                    value={item.key}
                    checked={checkedLineupItem === item.key}
                    onChange={(e) => handleFilterChange(e)}
                    className="w-5 h-5 border-gray-300 text-teal-500 focus:ring-teal-500"
                  />
                  <span className="text-base text-gray-700">{item.label}</span>
                </label>
              );
            })}
          </div>
        </section>
      </div>

      {/* 버튼 영역 */}
      <div className="flex gap-2 justify-end items-end mt-4">
        <Button
          onClick={handleClearBtnClick}
          className="flex-1 px-4 py-2 text-base border border-gray-300 rounded-md hover:bg-gray-50"
        >
          초기화
        </Button>
        <Button
          onClick={handleFilterBtnClick}
          className="flex-1 px-4 py-2 text-base bg-[#FCE7F3] border border-gray-300 hover:bg-[#111827] hover:text-white rounded-md"
        >
          확인
        </Button>
      </div>
    </aside>
  );
};
