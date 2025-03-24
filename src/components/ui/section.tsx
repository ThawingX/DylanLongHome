import React from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
  accent?: boolean;
}

export function Section({
  accent = false,
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        "py-16 px-6 md:px-12 lg:px-20",
        accent ? "bg-[#FCD40B]" : "bg-white",
        className
      )}
      {...props}
    >
      <div className="container mx-auto">{children}</div>
    </section>
  );
} 