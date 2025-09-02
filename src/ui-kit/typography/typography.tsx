"use client";
import classNames from "classnames";
import styles from "./typography.module.css";

interface ITypography {
  variant: "h1" | "h2" | "h3" | "p" | "span";
  size: "12" | "16" | "18" | "24" | "32" | "64";
  weight?: "regular" | "bold" | "semibold";
  color?: "white" | "red" | "green" | "black" | "text-gray";
  className?: string;
  children: React.ReactNode;
}

const Typography: React.FC<ITypography> = ({
  variant,
  children,
  size,
  weight = "regular",
  color = "black",
  className,
}) => {
  const Tag = variant;
  const typographyClass = styles[`text-${size}-${weight}`];
  const typographyColor = styles[`text-${color}`];
  return (
    <Tag className={classNames(typographyClass, typographyColor, className)}>
      {children}
    </Tag>
  );
};

export default Typography;
