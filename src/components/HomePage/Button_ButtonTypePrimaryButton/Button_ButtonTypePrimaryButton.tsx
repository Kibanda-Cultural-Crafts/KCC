import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { ArrowRight } from '../ArrowRight/ArrowRight.js';
import { ShoppingCart } from '../ShoppingCart/ShoppingCart.js';
import { ArrowRightIcon } from './ArrowRightIcon.js';
import classes from './Button_ButtonTypePrimaryButton.module.css';
import { ShoppingCartIcon } from './ShoppingCartIcon.js';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  hide?: {
    shoppingCart?: boolean;
    arrowRight?: boolean;
  };
  text?: {
    button?: ReactNode;
  };
}
/* @figmaId 209:562 */
export const Button_ButtonTypePrimaryButton: FC<Props> = memo(function Button_ButtonTypePrimaryButton(props = {}) {
  return (
    <button className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      {!props.hide?.shoppingCart && (
        <ShoppingCart
          swap={{
            icon: <ShoppingCartIcon className={classes.icon} />,
          }}
        />
      )}
      {props.text?.button != null ? props.text?.button : <div className={classes.button}>Button</div>}
      {!props.hide?.arrowRight && (
        <ArrowRight
          swap={{
            icon: <ArrowRightIcon className={classes.icon2} />,
          }}
        />
      )}
    </button>
  );
});
