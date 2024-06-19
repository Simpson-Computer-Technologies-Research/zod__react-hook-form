import { cn } from "@/lib/cn";

export default function Button(
  props: React.ButtonHTMLAttributes<HTMLButtonElement>,
) {
  return (
    <button
      {...props}
      className={cn(
        "w-full min-w-fit rounded-none bg-green-700 px-2 py-2 text-white",
        props.className,
      )}
    />
  );
}
