import type { VariantProps } from 'class-variance-authority';
import { buttonVariants } from './ButtonVariants';
import type { buttonSizeProps, buttonVariantProps } from './buttonPropsConst';
export type ButtonProps = React.ComponentProps<'button'> & VariantProps<typeof buttonVariants> & {
    /** If true, the component will be rendered as a child of the parent component. */
    asChild?: boolean;
    /** If true, the component will be rendered in a loading state. */
    loading?: boolean;
    /** The size of the button. */
    size?: buttonSizeProps;
    /** The variant of the button. */
    variant?: buttonVariantProps;
    /** If true, the component will be rendered with an inverse color scheme on a dark background. */
    inverse?: boolean;
    /** The left icon of the button. */
    leftIcon?: React.ReactNode;
    /** The right icon of the button. */
    rightIcon?: React.ReactNode;
};
