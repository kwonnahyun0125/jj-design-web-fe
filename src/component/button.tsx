export const Button = ({
  children,
  onClick,
  className,
  disabled = false,
  style,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  style?: React.CSSProperties;
}) => {
  return (
    <button
      onClick={onClick}
      className={`cursor-pointer ${className}`}
      style={style}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
