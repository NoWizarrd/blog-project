import { SVGProps, VFC } from 'react';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import AboutIcon from 'shared/assets/icons/about.svg';
import MainIcon from 'shared/assets/icons/main.svg';
import ProfileIcon from 'shared/assets/icons/profileSVG.svg';
import ArticleIcon from 'shared/assets/icons/article-20-20.svg';

export interface SidebarITemType {
    path: string;
    text: string;
    Icon: VFC<SVGProps<SVGSVGElement>>
    authOnly?: boolean
}

export const SidebarItemList: SidebarITemType[] = [
    {
        path: RoutePath.main,
        Icon: MainIcon,
        text: 'Main',
    },
    {
        path: RoutePath.about,
        Icon: AboutIcon,
        text: 'About',
    },
    {
        path: RoutePath.profile,
        Icon: ProfileIcon,
        text: 'Profile',
        authOnly: true,
    },
    {
        path: RoutePath.articles,
        Icon: ArticleIcon,
        text: 'Articles',
        authOnly: true,
    },
];
