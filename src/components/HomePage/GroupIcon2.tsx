import { memo, SVGProps } from 'react';

const GroupIcon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 31 34' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0.670614 33.1188V0.142504L30.3223 16.1589L0.670614 33.1188Z' fill='#5CA9B3' />
    <path d='M0.670614 0.142504L21.6514 21.1233L30.3223 16.1589L0.670614 0.142504Z' fill='#C8DB9B' />
    <path d='M21.4717 11.3739L0.670574 33.1185L30.3223 16.1586L21.4717 11.3739Z' fill='#AC5067' />
    <path d='M21.6517 21.123L30.3226 16.1586L21.472 11.3739L16.7996 16.2709L21.6517 21.123Z' fill='#F4A676' />
  </svg>
);

const Memo = memo(GroupIcon2);
export { Memo as GroupIcon2 };
