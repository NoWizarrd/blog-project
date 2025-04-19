import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { Input } from 'shared/ui/Input/Input';
import { Loader } from 'shared/ui/Loader/Loader';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Currency } from 'entities/Currency/model/types/currency';
import { CurrencySelect } from 'entities/Currency';
import { Country } from 'entities/Country/model/types/country';
import { CountrySelect } from 'entities/Country';
import { Profile } from '../../model/types/profile';
import classes from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string;
    data?: Profile;
    error?: string;
    isLoading?: boolean;
    readonly?: boolean;
    onChangeLastName?: (value?: string) => void;
    onChangeFirstName?: (value?: string) => void;
    onChangeAge?: (value?: string) => void;
    onChangeCity?: (value?: string) => void;
    onChangeUsername?: (value?: string) => void;
    onChangeAvatar?: (value?: string) => void;
    onChangeCurrency?: (currency?: Currency) => void;
    onChangeCountry?: (country?: Country) => void;
}

export const ProfileCard = (props: ProfileCardProps) => {
    const { t } = useTranslation('profile');
    const {
        className,
        data,
        error,
        isLoading,
        readonly,
        onChangeFirstName,
        onChangeLastName,
        onChangeCity,
        onChangeUsername,
        onChangeAge,
        onChangeAvatar,
        onChangeCurrency,
        onChangeCountry,
    } = props;

    if (isLoading) {
        return (
            <div className={classNames(classes.profilecard, { [classes.loading]: true }, [className])}>
                <Loader />
            </div>
        );
    }

    if (error) {
        return (
            <div className={classNames(classes.profilecard, { }, [className, classes.error])}>
                <Text
                    theme={TextTheme.ERROR}
                    title={t('Error on load profile')}
                    text={t('Try to reload the page')}
                    align={TextAlign.CENTER}
                />
            </div>
        );
    }

    const mods: Mods = {
        [classes.editing]: !readonly,
    };

    return (
        <div className={classNames(classes.profilecard, mods, [className])}>
            <div className={classes.data}>
                {data?.avatar
                && (
                    <div className={classes.avatarWrapper}>
                        <Avatar src={data.avatar} alt="avatar" />
                    </div>
                )}
                <Input
                    value={data?.firstname}
                    placeholder={t('Your name')}
                    className={classes.input}
                    onChange={onChangeFirstName}
                    readonly={readonly}
                />
                <Input
                    value={data?.lastname}
                    placeholder={t('Your lastname')}
                    className={classes.input}
                    onChange={onChangeLastName}
                    readonly={readonly}
                />

                <Input
                    value={data?.age}
                    placeholder={t('Your age')}
                    className={classes.input}
                    onChange={onChangeAge}
                    readonly={readonly}
                />
                <Input
                    value={data?.city}
                    placeholder={t('Your city')}
                    className={classes.input}
                    onChange={onChangeCity}
                    readonly={readonly}
                />
                <Input
                    value={data?.username}
                    placeholder={t('Username')}
                    className={classes.input}
                    onChange={onChangeUsername}
                    readonly={readonly}
                />
                <Input
                    value={data?.avatar}
                    placeholder={t('Change avatar')}
                    className={classes.input}
                    onChange={onChangeAvatar}
                    readonly={readonly}
                />
                <CurrencySelect
                    className={classes.input}
                    value={data?.currency}
                    onChange={onChangeCurrency}
                    readonly={readonly}
                />
                <CountrySelect
                    className={classes.input}
                    value={data?.country}
                    onChange={onChangeCountry}
                    readonly={readonly}
                />
            </div>
        </div>
    );
};
