export const Button = ({
  children,
  type = "button",
  onClick,
  className,
  disabled = false,
  style,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  disabled?: boolean;
  style?: React.CSSProperties;
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`cursor-pointer ${className}`}
      style={style}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
