import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import classes from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
}

export const LoginForm = ({ className }: LoginFormProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(classes.loginForm, {}, [className])}>
            <Input placeholder={t('Enter login')} autoFocus type="text" className={classes.input} />
            <Input placeholder={t('Enter password')} type="text" className={classes.input} />
            <Button className={classes.loginBtn}>
                {t('Enter')}
            </Button>
        </div>
    );
};
