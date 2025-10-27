import { cn } from "@/lib/utils";
import * as React from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  ref?: React.Ref<HTMLDivElement>;
}

interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  ref?: React.Ref<HTMLDivElement>;
}

interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  className?: string;
  ref?: React.Ref<HTMLHeadingElement>;
}

interface CardDescriptionProps
  extends React.HTMLAttributes<HTMLParagraphElement> {
  className?: string;
  ref?: React.Ref<HTMLParagraphElement>;
}

interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  ref?: React.Ref<HTMLDivElement>;
}

interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  ref?: React.Ref<HTMLDivElement>;
}

const Card = ({ className, ref, ...props }: CardProps) => (
  <div
    ref={ref}
    className={cn(
      "overflow-hidden rounded-md bg-card text-card-foreground shadow-sm",
      className
    )}
    {...props}
  />
);

const CardHeader = ({ className, ref, ...props }: CardHeaderProps) => (
  <div ref={ref} className={cn("flex flex-col p-6", className)} {...props} />
);

const CardTitle = ({ className, ref, ...props }: CardTitleProps) => (
  <h3
    ref={ref}
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
);

const CardDescription = ({
  className,
  ref,
  ...props
}: CardDescriptionProps) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
);

const CardContent = ({ className, ref, ...props }: CardContentProps) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
);

const CardFooter = ({ className, ref, ...props }: CardFooterProps) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
);

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
};
