import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Text } from 'shared/ui/Text/Text';
import { useSelector } from 'react-redux';
import { getProfileReadonly, profileActions } from 'entities/Profile';
import { useCallback } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import classes from './ProfilePageHeader.module.scss';
import { updateProfileData } from '../../../../entities/Profile/model/services/updateProfileData/updateProfileData';

interface ProfilePageHeaderProps {
    className?: string;
}

export const ProfilePageHeader = ({ className }: ProfilePageHeaderProps) => {
    const { t } = useTranslation('profile');
    const readonly = useSelector(getProfileReadonly);
    const dispatch = useAppDispatch();

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false));
    }, [dispatch]);

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);

    const onSave = useCallback(() => {
        dispatch(updateProfileData());
    }, [dispatch]);

    return (
        <div className={classNames(classes.profilepageheader, {}, [className])}>
            <Text title={t('Profile')} />
            {readonly
                ? (
                    <Button
                        theme={ButtonTheme.OUTLINE}
                        className={classes.editBtn}
                        onClick={onEdit}
                    >
                        {t('Edit')}
                    </Button>
                )
                : (
                    <>
                        <Button
                            theme={ButtonTheme.OUTLINE_RED}
                            className={classes.cancelBtn}
                            onClick={onCancelEdit}
                        >
                            {t('Cancel')}
                        </Button>
                        <Button
                            theme={ButtonTheme.OUTLINE}
                            className={classes.saveBtn}
                            onClick={onSave}
                        >
                            {t('Save')}
                        </Button>
                    </>
                )}

        </div>
    );
};
