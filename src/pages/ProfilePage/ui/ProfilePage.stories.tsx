import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import AvatarImg from 'shared/assets/tests/storybook.jpg';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import ProfilePage from './ProfilePage';

export default {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: '/',
    },
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = (args) => <ProfilePage />;

const data = {
    username: 'admin',
    age: 22,
    country: Country.Armenia,
    lastname: 'lastname',
    firstname: 'firstname',
    city: 'fsdfs',
    currency: Currency.USD,
    avatar: AvatarImg,
};

export const Normal = Template.bind({});
Normal.args = {
};
Normal.decorators = [StoreDecorator({
    profile: {
        form: data,
    },
})];

export const Dark = Template.bind({});
Dark.args = {
};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
    profile: {
        form: data,
    },
})];
