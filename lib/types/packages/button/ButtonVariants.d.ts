import { buttonSizeProps, buttonVariantProps } from './buttonPropsConst';
export declare const buttonVariants: (props?: {
    size?: buttonSizeProps;
    variant?: buttonVariantProps;
    inverse?: boolean;
    loading?: boolean;
} & import("class-variance-authority/types").ClassProp) => string;
