/**
 * @method iconSelector
 * @param {string} iconName
 * @returns {string}
 * @description this function will receive iconName and return font color
 */

// Icon
import { iconNameType } from '@src/types/root';
import {
  FiCornerUpRight,
  FiCornerUpLeft,
  FiSend,
  FiNavigation,
  FiCalendar,
} from 'react-icons/fi';

// IconName
const ICON_NAME = {
  ArrowRight: 'FiCornerUpRight',
  ArrowLeft: 'FiCornerUpLeft',
  Send: 'FiSend',
  Navigation: 'FiNavigation',
  Calendar: 'FiCalendar',
};

export const iconSelector = (iconName: iconNameType) => {
  switch (iconName) {
    case ICON_NAME.ArrowRight: {
      return <FiCornerUpRight />;
    }
    case ICON_NAME.ArrowLeft: {
      return <FiCornerUpLeft />;
    }
    case ICON_NAME.Send: {
      return <FiSend />;
    }
    case ICON_NAME.Navigation: {
      return <FiNavigation />;
    }
    case ICON_NAME.Calendar: {
      return <FiCalendar />;
    }
  }
};
