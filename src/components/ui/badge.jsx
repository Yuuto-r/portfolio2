import { cn } from "../../lib/utils";

function Badge({ className, ...props }) {
  return (
    <span
      className={cn(
        "inline-flex min-h-10 items-center rounded-lg border border-line bg-slate-50 px-4 text-sm font-bold text-slate-700",
        className
      )}
      {...props}
    />
  );
}

export { Badge };
