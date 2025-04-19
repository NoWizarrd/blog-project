import { classNames } from 'shared/lib/classNames/classNames';
import { ChangeEvent, memo, useMemo } from 'react';
import classes from './Select.module.scss';

export interface SelectOption {
    value: string;
    content: string
}

interface SelectProps {
    className?: string;
    label?: string;
    options?: SelectOption[];
    value?: string;
    onChange?: (value: string) => void;
    readonly?: boolean
}

export const Select = memo((props: SelectProps) => {
    const {
        className, label, options, value, onChange, readonly,
    } = props;

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value);
    };

    const optionList = useMemo(() => options?.map((opt) => (
        <option
            className={classes.option}
            value={opt.value}
            key={opt.value}
        >
            {opt.content}
        </option>
    )), [options]);

    return (
        <div className={classNames(classes.wrapper, {}, [className])}>
            {label && (
                <span className={classes.label}>
                    {label}
                </span>
            )}
            <select
                disabled={readonly}
                className={classes.select}
                value={value}
                onChange={onChangeHandler}
            >
                {optionList}
            </select>
        </div>
    );
});
