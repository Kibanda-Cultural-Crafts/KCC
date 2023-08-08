import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './User.module.css';
import { UserIcon } from './UserIcon.js';

interface Props {
  className?: string;
  swap?: {
    icon?: ReactNode;
  };
}
/* @figmaId 211:517 */
export const User: FC<Props> = memo(function User(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.icon}>{props.swap?.icon || <UserIcon className={classes.icon2} />}</div>
    </div>
  );
});
