import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useCallback, useState } from 'react';
import { Modal } from 'shared/ui/Modal/Modal';
import classes from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);

    const onToggleModal = useCallback(() => {
        setIsAuthModal((prev) => !prev);
    }, []);
    return (
        <div className={classNames(classes.navbar, {}, [className])}>
            <Button
                theme={ButtonTheme.CLEAR_INVERTED}
                className={classes.links}
                onClick={onToggleModal}
            >
                {t('Enter')}
            </Button>
            <Modal isOpen={isAuthModal} onClose={onToggleModal}>
                Duis nisi do adipisicing veniam est cupidatat esse
                minim et aliqua. Esse ipsum occaecat ut sunt ex
                reprehenderit qui mollit id elit aute ipsum dolore.
                Reprehenderit voluptate aute ex ipsum ut in nulla dolor
                cillum cillum aliqua. Cillum aliqua est nulla ut non
                consectetur reprehenderit. Laboris incididunt velit
            </Modal>
        </div>
    );
};
