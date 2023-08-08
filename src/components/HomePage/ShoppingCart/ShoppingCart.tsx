import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './ShoppingCart.module.css';
import { ShoppingCartIcon } from './ShoppingCartIcon.js';

interface Props {
  className?: string;
  swap?: {
    icon?: ReactNode;
  };
}
/* @figmaId 208:426 */
export const ShoppingCart: FC<Props> = memo(function ShoppingCart(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.icon}>{props.swap?.icon || <ShoppingCartIcon className={classes.icon2} />}</div>
    </div>
  );
});
