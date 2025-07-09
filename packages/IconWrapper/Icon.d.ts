import * as LucideIcons from 'lucide-react';
export type IconSizeProps = 8 | 12 | 16 | 18 | 20 | 22 | 24 | 32 | 40 | 48 | 56 | 64 | 104 | 128 | undefined;
export type IconName = keyof typeof LucideIcons;
export type IconProps = {
    name: keyof typeof LucideIcons;
    size?: IconSizeProps;
    className?: string;
    color?: string;
    rotate?: '0' | '90' | '180' | '270';
    strokeWidth?: number;
};
declare const Icon: React.FC<IconProps>;
export default Icon;
