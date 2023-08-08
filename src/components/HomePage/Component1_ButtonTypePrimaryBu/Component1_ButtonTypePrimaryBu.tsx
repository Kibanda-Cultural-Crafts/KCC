import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { Heart } from '../Heart/Heart.js';
import classes from './Component1_ButtonTypePrimaryBu.module.css';
import { HeartIcon } from './HeartIcon.js';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    heart?: ReactNode;
  };
}
/* @figmaId 223:602 */
export const Component1_ButtonTypePrimaryBu: FC<Props> = memo(function Component1_ButtonTypePrimaryBu(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      {props.swap?.heart || (
        <Heart
          swap={{
            icon: <HeartIcon className={classes.icon} />,
          }}
        />
      )}
    </div>
  );
});
