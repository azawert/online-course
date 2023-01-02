import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";
export interface IParagraphProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  children: ReactNode;
  fontSize?: "14px" | "16px" | "18px";
}
