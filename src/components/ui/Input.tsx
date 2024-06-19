import { cn } from "@/lib/cn";

export default function Input(
  props: React.InputHTMLAttributes<HTMLInputElement> & {
    parentClassName?: string;
    errorMessage?: string | null;
  },
) {
  return (
    <div
      className={cn(
        "flex w-full min-w-fit flex-col items-center justify-center gap-2",
        props.parentClassName,
      )}
    >
      <input
        {...props}
        className={cn("w-full rounded-none border px-2 py-2", props.className)}
      />

      {props.errorMessage && (
        <p className="text-sm text-red-500">{props.errorMessage}</p>
      )}
    </div>
  );
}
