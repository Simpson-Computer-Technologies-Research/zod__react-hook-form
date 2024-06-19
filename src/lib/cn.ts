import clsx from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...classes: (string | undefined | null)[]) =>
  clsx(classes.map((c) => twMerge(c)));
