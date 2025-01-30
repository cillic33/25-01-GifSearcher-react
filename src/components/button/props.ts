import {MouseEventHandler} from "react";

export interface Props {
  title?: string;
  onClick: MouseEventHandler<HTMLButtonElement> | undefined;
}
