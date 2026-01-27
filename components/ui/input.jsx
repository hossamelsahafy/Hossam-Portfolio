import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        "flex h-[48px] rounded-md border border-transparent focus:border-accent font-light bg-[rgba(255,255,255,0.1)] backdrop-blur-md px-4 py-5 text-base text-white placeholder:text-white/70 outline-none transition-all duration-300",
        "hover:bg-[rgba(255,255,255,0.15)] focus:bg-[rgba(255,255,255,0.2)]", // Hover and focus background
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Input.displayName = "Input";

export { Input };
