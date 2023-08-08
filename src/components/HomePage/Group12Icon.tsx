import { memo, SVGProps } from 'react';

const Group12Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 39 38' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <rect x={0.984001} y={0.000207031} width={37.024} height={37.024} rx={10.68} fill='#F6F6F6' />
    <path
      d='M28.3464 14.9951C28.3577 15.1532 28.3577 15.3113 28.3577 15.4694C28.3577 20.2921 24.687 25.849 17.9781 25.849C15.9113 25.849 13.9912 25.2504 12.3761 24.2113C12.6698 24.2452 12.9521 24.2565 13.2571 24.2565C14.9625 24.2565 16.5324 23.6805 17.7861 22.6979C16.1823 22.664 14.8383 21.6136 14.3752 20.1679C14.6011 20.2018 14.827 20.2244 15.0642 20.2244C15.3917 20.2244 15.7193 20.1792 16.0242 20.1002C14.3526 19.7613 13.0989 18.293 13.0989 16.5198V16.4747C13.5846 16.7457 14.1493 16.9151 14.7479 16.9377C13.7653 16.2826 13.1215 15.1645 13.1215 13.8995C13.1215 13.2219 13.3022 12.6007 13.6185 12.0585C15.4143 14.2722 18.1137 15.7179 21.1405 15.876C21.0841 15.605 21.0502 15.3226 21.0502 15.0403C21.0502 13.0298 22.6766 11.3922 24.6983 11.3922C25.7486 11.3922 26.6974 11.8327 27.3637 12.5442C28.1882 12.3861 28.9788 12.0811 29.6791 11.6632C29.408 12.5103 28.832 13.2219 28.0753 13.6736C28.8094 13.5946 29.521 13.3913 30.176 13.1089C29.6792 13.8317 29.0579 14.4755 28.3464 14.9951V14.9951Z'
      fill='#2A2F2F'
    />
  </svg>
);

const Memo = memo(Group12Icon);
export { Memo as Group12Icon };