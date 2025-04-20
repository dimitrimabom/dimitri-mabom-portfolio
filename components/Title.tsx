interface TitleProps {
  children: React.ReactNode;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  size?: "sm" | "md" | "lg" | "lg2";
  className?: string;
  underline?: boolean;
}

export const Title: React.FC<TitleProps> = ({
  children,
  level = 1,
  size = "md",
  className = "",
  underline = false,
}) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  const sizeClasses = {
    sm: "text-sm md:text-lg",
    md: "text-lg md:text-xl lg:text-2xl",
    lg: "text-2xl md:text-2xl lg:text-3xl xl:text-4xl",
    lg2: "text-3xl md:text-3xl lg:text-4xl xl:text-3xl",
  };

  const baseClasses = "font-bold mb-4";
  const sizeClass = sizeClasses[size];
  const underlineClass = underline ? "pb-2 border-b-2 border-primary" : "";

  return (
    <Tag
      className={`${baseClasses} ${sizeClass} ${underlineClass} ${className}`}
    >
      {children}
    </Tag>
  );
};
