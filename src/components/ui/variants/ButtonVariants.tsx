import { cva } from "class-variance-authority";

const buttonVariants = cva(
  "inline-flex items-center justify-center select-none rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-linear-to-r from-primary to-primary-darker text-primary-foreground hover:opacity-50",
        destructive:
          "bg-destructive text-destructive-foreground hover:opacity-50",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:opacity-50",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-foreground text-md font-normal",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export { buttonVariants };
