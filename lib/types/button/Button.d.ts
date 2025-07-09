import React from 'react';
import type { ButtonProps } from './ButtonTypes';
/** Button component */
declare const Button: React.ForwardRefExoticComponent<Omit<ButtonProps, "ref"> & React.RefAttributes<HTMLButtonElement>>;
/** Export the Button component */
export { Button };
