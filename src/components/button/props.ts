import {CSSProperties, MouseEventHandler} from "react";

export interface Props {
  title?: string;
  onClick: MouseEventHandler<HTMLButtonElement> | undefined;
  style: CSSProperties | null;
}
