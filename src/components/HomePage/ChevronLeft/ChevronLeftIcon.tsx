import { memo, SVGProps } from 'react';

const ChevronLeftIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 5 10' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M4.66667 0L0.255922 4.41074C-0.069515 4.73618 -0.069515 5.26382 0.255922 5.58926L4.66667 10'
      stroke='#3C4242'
      strokeWidth={1.5}
      strokeLinecap='round'
    />
  </svg>
);

const Memo = memo(ChevronLeftIcon);
export { Memo as ChevronLeftIcon };
