import { cn } from "@/lib/utils";
import React from "react";

type ButtonProps = React.ComponentPropsWithoutRef<"button"> & {
  loading?: boolean;
};

const Button = React.forwardRef<React.ElementRef<"button">, ButtonProps>(
  ({ className, loading, children, ...props }, ref) => (
    <button className={cn("btn", className)} ref={ref} {...props}>
      {children}
      {loading && <span className="loading loading-spinner loading-xs" />}
    </button>
  ),
);

export default Button;
