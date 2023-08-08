import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './Heart.module.css';
import { HeartIcon } from './HeartIcon.js';

interface Props {
  className?: string;
  swap?: {
    icon?: ReactNode;
  };
}
/* @figmaId 211:515 */
export const Heart: FC<Props> = memo(function Heart(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.icon}>{props.swap?.icon || <HeartIcon className={classes.icon2} />}</div>
    </div>
  );
});
