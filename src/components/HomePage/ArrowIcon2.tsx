import { memo, SVGProps } from 'react';

const ArrowIcon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 14 12' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M13.5858 6L0.585787 6M5.58579 12L0.292894 6.70711C-0.09763 6.31658 -0.0976299 5.68342 0.292894 5.29289L5.58579 -6.99382e-07'
      stroke='#3C4242'
      strokeWidth={1.6}
      strokeLinecap='round'
    />
  </svg>
);

const Memo = memo(ArrowIcon2);
export { Memo as ArrowIcon2 };
