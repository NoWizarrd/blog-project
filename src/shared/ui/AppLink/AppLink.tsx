import { classNames } from 'shared/lib/classNames/classNames';
import { Link, LinkProps } from 'react-router-dom';
import { FC } from 'react';
import classes from './AppLink.module.scss';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary'
}

interface AppLinkProps extends LinkProps{
    className?: string;
    theme?: AppLinkTheme;
}

export const AppLink: FC<AppLinkProps> = (props) => {
    const {
        to, className, children, theme = AppLinkTheme.PRIMARY, ...OtherProps
    } = props;

    return (
        <Link
            to={to}
            className={classNames(classes.applink, {}, [className, classes[theme]])}
            {...OtherProps}
        >
            {children}
        </Link>
    );
};
