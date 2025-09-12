import { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import PropTypes from "prop-types";

import styles from "./Modal.module.scss";
import clsx from "clsx";

const Modal = forwardRef(
    (
        {
            isOpen: _isOpen = false,
            shouldCloseOnOverlayClick = true,
            shouldCloseOnEsc = true,
            children,
            closeTimeoutMS = 0,
            className,
            bodyOpenClassName,
            overlayClassName,
            onRequestClose,
        },
        ref
    ) => {
        const [isOpen, setIsOpen] = useState(_isOpen);

        useEffect(() => {
            setIsOpen(_isOpen);
        }, [_isOpen]);

        useImperativeHandle(
            ref,
            () => ({
                open() {
                    setIsOpen(true);
                },
                close() {
                    setIsOpen(false);
                },
                toggle() {
                    setIsOpen(!isOpen);
                },
            }),
            [isOpen]
        );

        // eslint-disable-next-line react-hooks/exhaustive-deps
        const handleRequestClose = () => {
            setTimeout(onRequestClose, closeTimeoutMS);
        };

        useEffect(() => {
            if (!shouldCloseOnEsc) return;

            const handle = (e) => {
                if (e.code === "Escape") {
                    handleRequestClose();
                }
            };

            if (isOpen) {
                document.addEventListener("keyup", handle);
            }

            return () => {
                document.removeEventListener("keyup", handle);
            };
        }, [isOpen, shouldCloseOnEsc, onRequestClose, handleRequestClose]);

        useEffect(() => {
            document.body.classList.add(bodyOpenClassName);

            return () => {
                document.body.classList.remove(bodyOpenClassName);
            };
        }, [bodyOpenClassName]);

        if (!isOpen) return null;

        return (
            <div className={styles.modal}>
                <div className={clsx(styles.content, className)}>
                    {/* Close button */}
                    <button
                        className={styles.closeBtn}
                        onClick={handleRequestClose}
                    >
                        &times;
                    </button>

                    {/* Children */}
                    <div className={styles.body}>{children}</div>
                </div>

                {/* Overlay */}
                <div
                    className={clsx(styles.overlay, overlayClassName)}
                    onClick={() => {
                        if (shouldCloseOnOverlayClick) handleRequestClose();
                    }}
                />
            </div>
        );
    }
);

Modal.displayName = "Modal";

Modal.propTypes = {
    isOpen: PropTypes.bool,
    shouldCloseOnOverlayClick: PropTypes.bool,
    shouldCloseOnEsc: PropTypes.bool,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    overlayClassName: PropTypes.string,
    bodyOpenClassName: PropTypes.string,
    closeTimeoutMS: PropTypes.number,
    onRequestClose: PropTypes.func,
};

export default Modal;
