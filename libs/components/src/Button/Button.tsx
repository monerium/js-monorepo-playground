'use client';
/* eslint-disable react/button-has-type */
import React, {
  ButtonHTMLAttributes,
  FunctionComponent,
  HTMLAttributeAnchorTarget,
  HTMLAttributes,
  MouseEvent,
  ReactNode,
} from 'react';
import cx from 'classnames';
// import history from 'src/history';
// import s from './Button.less';
import s from './Button.module.css';

const blur = (e: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
  const element = e.target as HTMLElement;
  const tagName = element.tagName.toLowerCase();
  if (tagName !== 'button') {
    element?.parentElement?.blur();
  } else element?.blur();
};

const isLeftClickEvent = (
  e: MouseEvent<HTMLButtonElement | HTMLAnchorElement>
) => e.button === 0;

const isModifiedEvent = (
  e: MouseEvent<HTMLButtonElement | HTMLAnchorElement>
) => !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);

const getTitle = (title?: string, small?: boolean, children?: ReactNode) => {
  if (title === undefined && small) {
    return String(children);
  }
  return String(title);
};

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  HTMLAttributes<HTMLAnchorElement> & {
    icon?: string;
    small?: boolean;
    medium?: boolean;
    secondary?: boolean;
    white?: boolean;
    round?: boolean;
    success?: boolean;
    info?: boolean;
    warning?: boolean;
    danger?: boolean;
    outlined?: boolean;
    link?: boolean;
    to?: string;
    href?: string;
    rotate?: string;
    stopPropagation?: boolean;
    preventDefault?: boolean;
    blurOnClick?: boolean;
    onClick?: (e: MouseEvent<HTMLButtonElement & HTMLAnchorElement>) => void;
    target?: HTMLAttributeAnchorTarget;
    rel?: string;
    smallDefault?: boolean;
    square?: boolean;
  };

const Button: FunctionComponent<ButtonProps> = React.forwardRef<
  HTMLButtonElement,
  ButtonProps
>(
  (
    {
      type = 'button',
      blurOnClick = true,
      stopPropagation = true,
      preventDefault = true,
      className = '',
      href = '',
      to = '',
      rotate = '0',
      icon,
      small,
      medium,
      secondary,
      outlined,
      white,
      round,
      success,
      info,
      warning,
      danger,
      children,
      onClick,
      link,
      smallDefault,
      square,
      title,
      ...otherProps
    },
    forwardedRef
  ) => {
    const classNames = cx(s.btn, className, {
      [s.btnSquare]: !!square,
      [s.btnSmallDefault]: !!smallDefault,
      [s.btnSmall]: !!small || !!smallDefault,
      [s.btnMedium]: !!medium,
      [s.btnDefault]: !small,
      [s.btnSecondary]: !!secondary,
      [s.btnWhite]: !!white,
      [s.btnRound]: !!round,
      [s.success]: !!success,
      [s.info]: !!info,
      [s.warning]: !!warning,
      [s.danger]: !!danger,
      [s.outlined]: !!outlined,
    });

    function handleClick(e: MouseEvent<HTMLButtonElement & HTMLAnchorElement>) {
      if (typeof onClick === 'function') onClick(e);
      if (isModifiedEvent(e) || !isLeftClickEvent(e)) {
        return false;
      }
      if (e.defaultPrevented === true) return false;
      // TODO ROUTES
      // if (to && history)
      //   history.push(to, {
      //     previous: `${history?.location?.pathname}${history?.location?.search}`,
      //   });
      if (blurOnClick) blur(e);
      if (stopPropagation) {
        e.stopPropagation();
      }
      if (preventDefault) {
        e.preventDefault();
        return false;
      }
      return true;
    }
    const atitle = getTitle(title, small, children);
    if (link) {
      return (
        <a
          href={to || href}
          onClick={handleClick}
          className={classNames}
          title={atitle}
          {...(otherProps as HTMLAttributes<HTMLAnchorElement>)}
        >
          {icon && <i className={cx('material-icons', s.icon)}>{icon}</i>}
          {!small && children && <span className={s.label}>{children}</span>}
        </a>
      );
    }

    return (
      <button
        ref={forwardedRef}
        type={type}
        className={classNames}
        onClick={handleClick}
        title={atitle}
        {...(otherProps as ButtonHTMLAttributes<HTMLButtonElement>)}
      >
        {icon && (
          <i
            style={{ transform: `rotate(${rotate}deg)` }}
            className={cx('material-icons', s.icon)}
          >
            {icon}
          </i>
        )}
        {!small && children && <span className={s.label}>{children}</span>}
        <div className={s.test}></div>
      </button>
    );
  }
);

export default Button;
