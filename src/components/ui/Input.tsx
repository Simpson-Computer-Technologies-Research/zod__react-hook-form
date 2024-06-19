import { cn } from "@/lib/cn";

import React, { DetailedHTMLProps, FC, InputHTMLAttributes } from "react";

interface Props
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  errorMessage?: string;
  parentClassName?: string;
}

const Input: FC<Props> = React.forwardRef((props, ref) => {
  return (
    <div
      className={cn(
        "flex w-full min-w-fit flex-col items-center justify-center gap-2",
        props.parentClassName,
      )}
    >
      <input
        {...props}
        ref={ref}
        className={cn("w-full rounded-none border px-2 py-2", props.className)}
      />

      {props.errorMessage && (
        <p className="text-sm text-red-500">{props.errorMessage}</p>
      )}
    </div>
  );
});

export default Input;
