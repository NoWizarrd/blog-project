import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Modal } from './Modal';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    isOpen: true,
    children: `Duis nisi do adipisicing veniam est cupidatat esse
                minim et aliqua. Esse ipsum occaecat ut sunt ex
                reprehenderit qui mollit id elit aute ipsum dolore.
                Reprehenderit voluptate aute ex ipsum ut in nulla dolor
                cillum cillum aliqua. Cillum aliqua est nulla ut non
                consectetur reprehenderit. Laboris incididunt velit`,
};

export const Dark = Template.bind({});
Dark.args = {
    isOpen: true,
    children: `Duis nisi do adipisicing veniam est cupidatat esse
                minim et aliqua. Esse ipsum occaecat ut sunt ex
                reprehenderit qui mollit id elit aute ipsum dolore.
                Reprehenderit voluptate aute ex ipsum ut in nulla dolor
                cillum cillum aliqua. Cillum aliqua est nulla ut non
                consectetur reprehenderit. Laboris incididunt velit`,
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
