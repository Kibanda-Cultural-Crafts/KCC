import { memo, SVGProps } from 'react';

const ArrowRightIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 12 10' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0.166667 5H11M6.83333 0L11.2441 4.41074C11.5695 4.73618 11.5695 5.26382 11.2441 5.58926L6.83333 10'
      stroke='#3C4242'
      strokeWidth={1.5}
      strokeLinecap='round'
    />
  </svg>
);

const Memo = memo(ArrowRightIcon);
export { Memo as ArrowRightIcon };
