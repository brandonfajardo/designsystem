import { type ReactNode } from 'react';
import type { IconSizeProps } from '../IconWrapper/Icon';
import { buttonSizeProps } from './buttonPropsConst';
export declare const calcIconSize: (buttonSize: buttonSizeProps, iconSize?: IconSizeProps) => IconSizeProps;
export declare const iconSizeMap: {
    readonly xxsmall: 12;
    readonly xsmall: 16;
    readonly small: 20;
    readonly medium: 22;
    readonly large: 24;
};
/**
 * Get the tab icon with the correct size
 * @param icon - The icon to get
 * @param size - The size of the tab
 * @returns The tab icon with the correct size
 */
export declare function getButtonIcon(icon: ReactNode, size: buttonSizeProps): ReactNode;
