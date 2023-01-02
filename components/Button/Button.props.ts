import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

export interface IButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: ReactNode;
  isPrimary: boolean;
  isArrow: boolean;
  arrowDirection?: "right" | "bottom";
}
