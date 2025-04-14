import { classNames, Mods } from 'shared/lib/classNames/classNames';
import {
    ReactNode, MouseEvent, useState, useRef,
    useEffect,
    useCallback,
    MutableRefObject,
} from 'react';
import classes from './Modal.module.scss';
import { Portal } from '../Portal/Portal';

interface ModalProps {
    className?: string;
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
    lazy?: boolean;
}

const ANIMATION_DELAY = 300;

export const Modal = (props : ModalProps) => {
    const {
        className,
        children,
        lazy,
        isOpen,
        onClose,
    } = props;

    const [isClosing, setIsClosing] = useState(false);
    const [isOpening, setIsOpening] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const timerRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>;

    const closeHandler = useCallback(() => {
        if (onClose) {
            setIsClosing(true);
            timerRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, ANIMATION_DELAY);
        }
    }, [onClose]);

    const onContentClick = (e: MouseEvent) => {
        e.stopPropagation();
    };

    const onKeyDown = useCallback((e: globalThis.KeyboardEvent) => {
        if (e.key === 'Escape') {
            closeHandler();
        }
    }, [closeHandler]);

    useEffect(() => {
        if (isOpen) {
            setIsMounted(true);
            timerRef.current = setTimeout(() => {
                setIsOpening(true);
            }, 0);
            window.addEventListener('keydown', onKeyDown);
        }
        return () => {
            setIsOpening(false);
            clearTimeout(timerRef.current);
            window.removeEventListener('keydown', onKeyDown);
            setIsMounted(false);
        };
    }, [isOpen, onKeyDown]);

    const mods: Mods = {
        [classes.opened]: isOpening,
        [classes.isClosing]: isClosing,
    };

    if (lazy && !isMounted) return null;

    return (
        <Portal>
            <div className={classNames(classes.modal, mods, [className])}>
                <div className={classes.overlay} onClick={closeHandler}>
                    <div
                        className={classes.content}
                        onClick={onContentClick}
                    >
                        { children }
                    </div>
                </div>
            </div>
        </Portal>

    );
};
