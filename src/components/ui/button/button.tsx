import type { PropsOf } from "@builder.io/qwik";
import { component$, Slot } from "@builder.io/qwik";
import { cn } from "@qwik-ui/utils";
import { cva, type VariantProps } from "class-variance-authority";

export const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-base text-sm hover:scale-[1.02] font-medium transition-all duration-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      look: {
        primary:
          "border-base bg-primary text-secondary-foreground shadow-sm hover:bg-accent-foreground active:shadow-base active:press duration-150",
        secondary:
          "border-base bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/90 active:shadow-base active:press duration-150",
        alert:
          "border-base bg-alert text-alert-foreground shadow-sm hover:bg-alert/90 active:shadow-base active:press duration-150",
        outline:
          "border bg-background text-foreground shadow-sm hover:bg-accent active:shadow-base active:press duration-150",
        ghost: "text-accent-foreground hover:bg-accent  duration-150",
        link: "text-foreground hover:bg-transparent hover:text-foreground/80 hover:underline hover:underline-offset-2 duration-150",
      },
      size: {
        sm: "h-8 px-2 py-1.5 text-sm",
        md: "h-12 px-4 py-3 text-base",
        lg: " h-16 px-8 py-4 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      look: "primary",
      size: "md",
    },
  },
);

type ButtonProps = PropsOf<"button"> & VariantProps<typeof buttonVariants>;

export const Button = component$<ButtonProps>(({ size, look, ...props }) => {
  return (
    <button {...props} class={cn(buttonVariants({ size, look }), props.class)}>
      <Slot />
    </button>
  );
});
