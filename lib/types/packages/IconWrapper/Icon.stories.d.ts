import type { StoryObj } from '@storybook/react-vite';
declare const meta: {
    title: string;
    component: import("react").FC<import("./Icon").IconProps>;
    parameters: {
        layout: string;
    };
    tags: string[];
    argTypes: {
        name: {
            type: "string";
        };
        color: {
            control: {
                type: "color";
            };
        };
        size: {
            control: {
                type: "number";
            };
        };
        rotate: {
            control: {
                type: "number";
            };
        };
        strokeWidth: {
            control: {
                type: "number";
            };
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const RotatedIcon: Story;
export declare const LargeIcon: Story;
export declare const LoadingIcon: Story;
