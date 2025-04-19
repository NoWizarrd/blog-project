import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Select } from './Select';

export default {
    title: 'shared/Select',
    component: Select,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    label: 'Укажите значения',
    options: [
        { value: '123', content: 'Первый пункт' },
        { value: '124124', content: 'Второй пункт' },
        { value: '124214123', content: 'Третий пункт' },
    ],
};
