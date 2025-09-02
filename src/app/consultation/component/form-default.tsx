export const FormDefaultInfo = ({
  name,
  phone,
  setName,
  setPhone,
}: {
  name: string;
  phone: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  setPhone: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    if (id === "name") {
      setName(value);
    } else if (id === "phone") {
      setPhone(value);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center">
          <svg
            className="w-5 h-5 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-gray-800">기본 정보</h2>
      </div>

      <div className="space-y-4">
        <div className="group">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            이름
          </label>
          <input
            id="name"
            type="text"
            value={name}
            maxLength={30}
            placeholder="이름을 입력하세요"
            onChange={handleInputChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-gray-800 focus:ring-0 transition-colors duration-200 bg-white"
          />
        </div>

        <div className="group">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            연락처
          </label>
          <input
            id="phone"
            type="tel"
            value={phone}
            placeholder="010-0000-0000"
            maxLength={13}
            onChange={(e) => {
              const value = e.target.value.replace(/[^0-9]/g, "");
              const formatted = value.replace(
                /(\d{3})(\d{4})(\d{4})/,
                "$1-$2-$3"
              );
              setPhone(formatted);
            }}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-gray-800 focus:ring-0 transition-colors duration-200 bg-white"
          />
        </div>
      </div>
    </div>
  );
};
