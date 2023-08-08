import { memo, SVGProps } from 'react';

const Arrow3Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    preserveAspectRatio='none'
    viewBox='0 0 18 1.675813913345337'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M18.4678 0.59249C18.7951 0.265267 18.7951 -0.265267 18.4678 -0.59249L13.1354 -5.9249C12.8082 -6.25212 12.2777 -6.25212 11.9504 -5.9249C11.6232 -5.59767 11.6232 -5.06714 11.9504 -4.73992L16.6904 0L11.9504 4.73992C11.6232 5.06714 11.6232 5.59767 11.9504 5.9249C12.2777 6.25212 12.8082 6.25212 13.1354 5.9249L18.4678 0.59249ZM0 0.837907L17.8753 0.837907V-0.837907L0 -0.837907L0 0.837907Z'
      fill='#797979'
    />
  </svg>
);

const Memo = memo(Arrow3Icon);
export { Memo as Arrow3Icon };
