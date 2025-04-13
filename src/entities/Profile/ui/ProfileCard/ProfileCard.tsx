import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getProfileData } from 'entities/Profile/model/selectors/getProfileData/getProfileData';
import { getProfileIsLoading } from 'entities/Profile/model/selectors/getProfileIsLoading/getProfileIsLoading';
import { getProfileError } from 'entities/Profile/model/selectors/getProfileError/getProfileError';
import { Text } from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import classes from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string;
}

export const ProfileCard = ({ className }: ProfileCardProps) => {
    const { t } = useTranslation('profile');
    const data = useSelector(getProfileData);
    const isLoading = useSelector(getProfileIsLoading);
    const error = useSelector(getProfileError);

    return (
        <div className={classNames(classes.profilecard, {}, [className])}>
            <div className={classes.header}>
                <Text title={t('Profile')} />
                <Button theme={ButtonTheme.OUTLINE} className={classes.editBtn}>
                    {t('Edit')}
                </Button>
            </div>
            <div className={classes.data}>
                <Input
                    value={data?.firstname}
                    placeholder={t('Your name')}
                    className={classes.input}
                />
                <Input
                    value={data?.lastname}
                    placeholder={t('Your lastname')}
                    className={classes.input}
                />
            </div>
        </div>
    );
};
