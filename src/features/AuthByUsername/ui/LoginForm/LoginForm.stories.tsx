import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import LoginForm from './LoginForm';

export default {
    title: 'features/LoginForm',
    component: LoginForm,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};
Primary.decorators = [StoreDecorator({
    loginForm: { username: '123', password: 'asd' },
})];

export const Secondary = Template.bind({});
Secondary.args = {
};
Secondary.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
        loginForm: { username: '123', password: 'asd' },
    }),
];

export const WithError = Template.bind({});
WithError.args = {
};
WithError.decorators = [
    StoreDecorator({
        loginForm: { username: '123', password: 'asd', error: 'error' },
    }),
];

export const Loading = Template.bind({});
Loading.args = {
};
Loading.decorators = [
    StoreDecorator({
        loginForm: { isLoading: true },
    }),
];
