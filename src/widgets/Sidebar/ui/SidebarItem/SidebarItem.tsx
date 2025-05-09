import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { SidebarITemType } from 'widgets/Sidebar/model/types/sidebar';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';
import classes from './SidebarItem.module.scss';

interface SidebarItemProps {
    item: SidebarITemType;
    collapsed: boolean;
}

export const SidebarItem = ({ item, collapsed }: SidebarItemProps) => {
    const { t } = useTranslation();
    const isAuth = useSelector(getUserAuthData);

    if (item.authOnly && !isAuth) {
        return null;
    }

    return (
        <AppLink
            theme={AppLinkTheme.SECONDARY}
            to={item.path}
            className={classNames(classes.item, { [classes.collapsed]: collapsed }, [])}
        >
            <item.Icon className={classes.icon} />
            <span className={classes.link}>
                {t(item.text)}
            </span>
        </AppLink>
    );
};
