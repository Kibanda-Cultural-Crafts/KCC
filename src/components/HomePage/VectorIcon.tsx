import { memo, SVGProps } from 'react';

const VectorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 154 52' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M153.762 37.6936C153.762 45.1514 147.652 51.2615 140.194 51.2615H13.5679C6.11003 51.2615 0 45.1514 0 37.6936V13.5679C0 6.11006 6.11003 0 13.5679 0H140.194C147.652 0 153.762 6.11006 153.762 13.5679V37.6936Z'
      fill='#404040'
    />
  </svg>
);

const Memo = memo(VectorIcon);
export { Memo as VectorIcon };
