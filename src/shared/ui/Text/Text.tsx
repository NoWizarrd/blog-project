import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import classes from './Text.module.scss';

export enum TextTheme {
    PRIMARY = 'primary',
    ERROR = 'error'
}

export enum TextAlign {
    RIGHT = 'right',
    LEFT = 'left',
    CENTER = 'center'
}

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    theme?: TextTheme;
    align?: TextAlign;
}

export const Text = memo((props: TextProps) => {
    const {
        text,
        title,
        className,
        theme = TextTheme.PRIMARY,
        align = TextAlign.LEFT,
    } = props;

    const mods: Mods = {
        [classes[theme]]: true,
        [classes[align]]: true,
    };

    return (
        <div className={classNames(classes.textWrapper, mods, [className])}>
            {title && <p className={classes.title}>{title}</p>}
            {text && <p className={classes.text}>{text}</p>}
        </div>
    );
});
