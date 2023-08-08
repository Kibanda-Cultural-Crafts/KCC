import { memo, SVGProps } from 'react';

const Frame127Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 18 9' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0.814122 0.556641L8.30849 7.9481C8.86145 8.49346 9.75797 8.49346 10.3109 7.9481L17.8053 0.556642'
      stroke='#F6F6F6'
      strokeWidth={2.88}
      strokeLinecap='round'
    />
  </svg>
);

const Memo = memo(Frame127Icon);
export { Memo as Frame127Icon };
