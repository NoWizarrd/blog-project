import { classNames, Mods } from 'shared/lib/classNames/classNames';
import {
    ChangeEvent, InputHTMLAttributes, memo, useRef,
} from 'react';
import classes from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'>

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string | number;
    onChange?: (value: string)=>void;
    readonly?: boolean
}

export const Input = memo((props: InputProps) => {
    const {
        className,
        value,
        onChange,
        type = 'text',
        readonly,
        ...otherProps
    } = props;

    const ref = useRef<HTMLInputElement>(null);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    const mods: Mods = {
        [classes.readonly]: readonly,
    };

    return (
        <input
            ref={ref}
            className={classNames(classes.input, mods, [className])}
            type={type}
            value={value}
            readOnly={readonly}
            onChange={handleInputChange}
            {...otherProps}
        />
    );
});
