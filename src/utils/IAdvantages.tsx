import { ReactElement, SVGProps } from "react";

type SvgInHtml = ReactElement | SVGProps<SVGElement>;

export interface IAdvatages {
  icon: SvgInHtml; // TODO! this type may change if we get this data from db
  title: string;
  description: string;
}
