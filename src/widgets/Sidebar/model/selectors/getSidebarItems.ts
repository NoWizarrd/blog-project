import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from 'entities/User';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import AboutIcon from 'shared/assets/icons/about.svg';
import MainIcon from 'shared/assets/icons/main.svg';
import ProfileIcon from 'shared/assets/icons/profileSVG.svg';
import ArticleIcon from 'shared/assets/icons/article-20-20.svg';
import { SidebarITemType } from '../types/sidebar';

export const getSidebarItems = createSelector(
    getUserAuthData,
    (userData) => {
        const sidebarItemList: SidebarITemType[] = [
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

        ];

        if (userData) {
            sidebarItemList.push(
                {
                    path: RoutePath.profile + userData.id,
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
            );
        }
        return sidebarItemList;
    },
);
