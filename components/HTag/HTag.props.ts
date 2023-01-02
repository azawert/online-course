import { ReactNode } from "react";

export interface IPropsHTag {
  children: ReactNode;
  tag: "h1" | "h2" | "h3";
}
