import { memo, SVGProps } from 'react';

const VectorIcon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 154 52' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M153.762 37.6711C153.762 45.1289 147.652 51.239 140.194 51.239H13.5679C6.11003 51.239 0 45.1289 0 37.6711V13.5678C0 6.10999 6.11003 0 13.5679 0H140.194C147.652 0 153.762 6.10999 153.762 13.5678V37.6711Z'
      fill='#404040'
    />
  </svg>
);

const Memo = memo(VectorIcon2);
export { Memo as VectorIcon2 };
