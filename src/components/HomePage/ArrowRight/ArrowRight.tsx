import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './ArrowRight.module.css';
import { ArrowRightIcon } from './ArrowRightIcon.js';

interface Props {
  className?: string;
  swap?: {
    icon?: ReactNode;
  };
}
/* @figmaId 208:424 */
export const ArrowRight: FC<Props> = memo(function ArrowRight(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.icon}>{props.swap?.icon || <ArrowRightIcon className={classes.icon2} />}</div>
    </div>
  );
});
