import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './ChevronLeft.module.css';
import { ChevronLeftIcon } from './ChevronLeftIcon.js';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  hide?: {
    icon?: boolean;
  };
}
/* @figmaId 211:529 */
export const ChevronLeft: FC<Props> = memo(function ChevronLeft(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      {!props.hide?.icon && (
        <div className={classes.icon}>
          <ChevronLeftIcon className={classes.icon2} />
        </div>
      )}
    </div>
  );
});
