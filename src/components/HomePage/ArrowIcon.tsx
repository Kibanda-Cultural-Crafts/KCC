import { memo, SVGProps } from 'react';

const ArrowIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 14 12' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0.00012207 6H13.0001M8.00012 0L13.293 5.29289C13.6835 5.68342 13.6835 6.31658 13.293 6.70711L8.00012 12'
      stroke='#3C4242'
      strokeWidth={1.6}
      strokeLinecap='round'
    />
  </svg>
);

const Memo = memo(ArrowIcon);
export { Memo as ArrowIcon };
