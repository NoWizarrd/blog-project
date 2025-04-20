import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import AvatarImg from 'shared/assets/tests/storybook.jpg';
import { ProfileCard } from './ProfileCard';

export default {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

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

export const Primary = Template.bind({});
Primary.args = {
    data,
};

export const withError = Template.bind({});
withError.args = {
    error: 'error',
};

export const Loading = Template.bind({});
Loading.args = {
    isLoading: true,
};

// Secondary.decorators = [
//     ThemeDecorator(Theme.DARK),
//     StoreDecorator({
//         loginForm: { username: '123', password: 'asd' },
//     }),
// ];
