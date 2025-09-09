export const EmptyState = ({
  height = 800,
  message,
}: {
  height?: number;
  message: string;
}) => {
  return (
    <div
      className={`flex flex-1 min-h-[${height}px] items-center justify-center`}
    >
      <div className="text-center">
        <p className="text-gray-500 text-base">{message}</p>
      </div>
    </div>
  );
};
