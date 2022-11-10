// Internal Imports
import { ISectionHeading } from '@src/types/root';
import Styles from './index.module.scss';

/**
 * @param {object} ISectionHeading
 * @returns JSX.Element
 */

export const SectionHeading = ({
  subTitle,
  title,
  description,
  isCenter,
  colorScheme = 'blue',
  isBottomSpacing = true,
}: ISectionHeading) => {
  return (
    <div
      data-testid="section-heading"
      className={`${Styles['section-heading']} ${
        colorScheme ? Styles[`${colorScheme}`] : ''
      } ${isCenter ? 'text-center' : ''} ${
        isBottomSpacing ? 'mb-[1.875rem] md:mb-[3.25rem]' : ''
      }`}
    >
      {subTitle && (
        <span
          className={`${Styles['sub-title']} block text-[1.125rem] font-medium leading-[1.5] md:text-[1.5rem]  md:leading-[1.2] capitalize`}
        >
          {subTitle}
        </span>
      )}
      {title && (
        <h2
          className={`${Styles['section-title']} text-[1.75rem] font-medium leading-[1.3] md:text-[3rem] md:font-bold md:leading-[1.1] capitalize`}
        >
          {title}
        </h2>
      )}
      {description && (
        <p
          className={`${Styles['description']}  text-[.875rem] leading-[1.3] md:text-base`}
        >
          {description}
        </p>
      )}
    </div>
  );
};
