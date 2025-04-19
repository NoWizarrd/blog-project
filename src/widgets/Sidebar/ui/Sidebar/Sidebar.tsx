import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useMemo, useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher/LangSwitcher';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { SidebarItemList } from 'widgets/Sidebar/model/items';
import classes from './Sidebar.module.scss';
import { SidebarItem } from '../SidebarItem/SidebarItem';

interface SidebarProps {
    className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    const itemsList = useMemo(
        () => SidebarItemList.map((item) => (
            <SidebarItem
                item={item}
                collapsed={collapsed}
                key={item.path}
            />
        )),
        [collapsed],
    );

    return (
        <div
            data-testid="sidebar"
            className={classNames(
                classes.sidebar,
                { [classes.collapsed]: collapsed },
                [className],
            )}
        >

            <Button
                data-testid="sidebar-toggle"
                onClick={onToggle}
                className={classes.collapseBtn}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                square
                size={ButtonSize.L}
            >
                {collapsed ? '>' : '<'}
            </Button>
            <div className={classes.items}>
                {itemsList}
            </div>
            <div className={classes.switchers}>
                <ThemeSwitcher />
                <LangSwitcher
                    short={collapsed}
                    className={classes.lang}
                />
            </div>
        </div>
    );
});
