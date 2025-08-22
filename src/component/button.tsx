export const Button = ({
  children,
  onClick,
  className,
  style,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  style?: React.CSSProperties;
}) => {
  return (
    <button
      onClick={onClick}
      className={`cursor-pointer ${className}`}
      style={style}
    >
      {children}
    </button>
  );
};
