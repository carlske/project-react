import * as React from "react";

import { Button } from "@/components/ui";
import { cn } from "@/lib/utils";

interface StepperProps
  extends Omit<React.HTMLAttributes<HTMLSpanElement>, "onChange"> {
  className?: string;
  label: string;
  onChange: (value: number) => void;
  value: number;
  ref?: React.Ref<HTMLSpanElement>;
}

const Stepper = ({
  className,
  label,
  onChange,
  value,
  ref,
  ...props
}: StepperProps) => {
  return (
    <div
      className={cn(
        "flex h-10 min-w-[190px] items-center justify-between gap-2 rounded-md border border-input bg-background py-2 text-sm",
        className
      )}
    >
      <Button
        type="button"
        disabled={value === 0}
        variant="link"
        onClick={() => onChange(value - 1)}
      >
        -
      </Button>
      <span
        className={cn(!value && "truncate text-muted-foreground")}
        ref={ref}
        {...props}
      >
        {value} {label}
        {value > 1 || value === 0 ? "s" : ""}
      </span>
      <Button
        type="button"
        disabled={value === 100}
        variant="link"
        onClick={() => onChange(value + 1)}
      >
        +
      </Button>
    </div>
  );
};
export { Stepper };
