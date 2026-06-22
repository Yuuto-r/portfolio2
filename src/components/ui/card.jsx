import { cn } from "../../lib/utils";

function Card({ className, ...props }) {
  return (
    <article
      className={cn("overflow-hidden rounded-lg border border-line bg-white shadow-sm", className)}
      {...props}
    />
  );
}

function CardContent({ className, ...props }) {
  return <div className={cn("p-5 sm:p-6", className)} {...props} />;
}

export { Card, CardContent };
