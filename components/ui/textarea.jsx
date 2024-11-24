import * as React from "react";
import { cn } from "@/lib/utils";

const Textarea = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex w-full h-[200px] rounded-md border border-transparent bg-[rgba(255,255,255,0.1)] backdrop-blur-md px-4 py-5 text-base text-white placeholder:text-white/70 outline-none transition-all duration-300",
        "hover:bg-[rgba(255,255,255,0.15)] focus:bg-[rgba(255,255,255,0.2)] focus:border-accent focus:ring-accent focus:ring-1",
        "disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Textarea.displayName = "Textarea";

export { Textarea };
