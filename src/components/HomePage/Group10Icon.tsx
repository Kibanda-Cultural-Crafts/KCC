import { memo, SVGProps } from 'react';

const Group10Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 38 38' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <rect width={37.024} height={37.024} rx={10.68} fill='#F6F6F6' />
    <path
      d='M22.4367 19.2687L22.9311 16.0473H19.84V13.9569C19.84 13.0756 20.2718 12.2165 21.6562 12.2165H23.0614V9.47384C23.0614 9.47384 21.7862 9.25621 20.567 9.25621C18.0215 9.25621 16.3576 10.7991 16.3576 13.5922V16.0473H13.528V19.2687H16.3576V27.0562H19.84V19.2687H22.4367Z'
      fill='#2A2F2F'
    />
  </svg>
);

const Memo = memo(Group10Icon);
export { Memo as Group10Icon };
