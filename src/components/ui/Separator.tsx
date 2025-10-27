import { cn } from "@/lib/utils";
import * as SeparatorPrimitive from "@radix-ui/react-separator";
import * as React from "react";

interface SeparatorProps
  extends React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root> {
  className?: string;
  orientation?: "horizontal" | "vertical";
  decorative?: boolean;
  ref?: React.Ref<HTMLDivElement>;
}

const Separator = React.forwardRef(
  ({
    className,
    orientation = "horizontal",
    decorative = true,
    ref,
    ...props
  }: SeparatorProps) => (
    <SeparatorPrimitive.Root
      ref={ref}
      decorative={decorative}
      orientation={orientation}
      className={cn(
        "shrink-0 bg-border",
        orientation === "horizontal" ? "h-px w-full" : "h-full w-px",
        className
      )}
      {...props}
    />
  )
);

Separator.displayName = SeparatorPrimitive.Root.displayName;

export { Separator };
