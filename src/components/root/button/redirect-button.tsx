// External Imports
import Link from 'next/link';

// Internal Imports
import { IRedirectButton } from '@src/types/root';
import { iconSelector } from '@src/utils';

import Styles from './redirect-button.module.css';

// RedirectButton
export const RedirectButton = ({
  buttonText,
  link,
  colorScheme = 'blue-over-gBlueLight',
  size = 'btn-lg',
  linkOpenNewTab = false,
  iconName = '',
  iconIsLeft,
  clickHandler,
  'data-testid': dataTestId,
}: IRedirectButton) => {
  return (
    <>
      {clickHandler ? (
        <a
          onClick={(e) => clickHandler(e, link)}
          className={`${Styles['bs-button']} ${
            colorScheme ? Styles[`${colorScheme}`] : ''
          }
        ${size ? Styles[`${size}`] : ''} ${
            iconIsLeft ? 'flex-row-reverse' : ''
          } group relative cursor-pointer overflow-hidden inline-flex gap-[1rem] items-center justify-center backdrop-blur-[2px] capitalize font-medium rounded-[8px] transition-colors duration-[400ms]`}
          data-testid={dataTestId}
        >
          {buttonText && <span className="bs-btn-text">{buttonText}</span>}
          {iconName && (
            <span className="bs-btn-icon">{iconSelector(`${iconName}`)}</span>
          )}
          <span
            className={`absolute ${Styles['bs-button-bg']} inset-0 opacity-0 transition-opacity backdrop-blur-[2px] duration-[400ms] z-[-1] group-hover:opacity-[1]`}
          ></span>
        </a>
      ) : (
        <Link href={link ? link : ''} passHref>
          <a
            target={linkOpenNewTab ? '_blank' : '_self'}
            className={`${Styles['bs-button']} ${
              colorScheme ? Styles[`${colorScheme}`] : ''
            }
          ${size ? Styles[`${size}`] : ''} ${
              iconIsLeft ? 'flex-row-reverse' : ''
            } group relative cursor-pointer overflow-hidden inline-flex gap-[1rem] items-center justify-center backdrop-blur-[2px] capitalize font-medium rounded-[8px] transition-colors duration-[400ms]`}
          >
            {buttonText && <span className="bs-btn-text">{buttonText}</span>}
            {iconName && (
              <span className="bs-btn-icon">{iconSelector(`${iconName}`)}</span>
            )}
            <span
              className={`absolute ${Styles['bs-button-bg']} inset-0 opacity-0 transition-opacity backdrop-blur-[2px] duration-[400ms] z-[-1] group-hover:opacity-[1]`}
            ></span>
          </a>
        </Link>
      )}
    </>
  );
};
