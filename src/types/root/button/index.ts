import React from 'react';

// ColorSchemeType
export type colorSchemeType =
  // Solid - Solid Hover
  | 'white-over-blue'
  | 'white-over-skyblue'
  | 'black-over-white'
  | 'gray-over-white'
  | 'green-over-white'
  // Solid - Gradient Hover
  | 'blue-over-gBlueLight'
  | 'blueLight-over-gBlueLight'
  | 'skyblue-over-gSkyblueLight'
  | 'skyblueLight-over-gSkyblueLigh'
  // Gradient - Gradient Hover
  | 'gBlueLight-over-reverseGradient'
  | 'gSkyblue-over-reverseGradient';

// SizeType
export type sizeType =
  // Large
  | 'btn-lg'
  // Medium
  | 'btn-md'
  // Small
  | 'btn-sm';

// IconName
enum iconNames {
  ArrowRight = 'FiCornerUpRight',
  ArrowLeft = 'FiCornerUpLeft',
  Send = 'FiSend',
  Navigation = 'FiNavigation',
  Calendar = 'FiCalendar',
}
export type iconNameType = `${iconNames}`;

// IRedirectButton
export interface IRedirectButton {
  buttonText?: string;
  link?: string | undefined;
  colorScheme?: colorSchemeType;
  size?: sizeType;
  linkOpenNewTab?: boolean;
  iconName?: iconNameType | '';
  iconIsLeft?: boolean;
  clickHandler?: (
    e: React.MouseEvent<HTMLElement> | React.FormEvent<HTMLFormElement>,
    link: string | undefined
  ) => void;
  'data-testid': string;
}
