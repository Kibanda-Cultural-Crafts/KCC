import { memo, SVGProps } from 'react';

const SearchIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 15 15' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M13.6363 14.697C13.9292 14.9899 14.4041 14.9899 14.697 14.697C14.9899 14.4041 14.9899 13.9292 14.697 13.6363L13.6363 14.697ZM10.9166 5.83334C10.9166 8.64079 8.64074 10.9167 5.83329 10.9167V12.4167C9.46917 12.4167 12.4166 9.46922 12.4166 5.83334H10.9166ZM5.83329 10.9167C3.02585 10.9167 0.749959 8.64079 0.749959 5.83334H-0.750041C-0.750041 9.46922 2.19742 12.4167 5.83329 12.4167V10.9167ZM0.749959 5.83334C0.749959 3.02589 3.02585 0.750005 5.83329 0.750005V-0.749995C2.19742 -0.749995 -0.750041 2.19746 -0.750041 5.83334H0.749959ZM5.83329 0.750005C8.64074 0.750005 10.9166 3.02589 10.9166 5.83334H12.4166C12.4166 2.19746 9.46917 -0.749995 5.83329 -0.749995V0.750005ZM9.46963 10.5303L13.6363 14.697L14.697 13.6363L10.5303 9.46968L9.46963 10.5303Z'
      fill='#3C4242'
    />
  </svg>
);

const Memo = memo(SearchIcon);
export { Memo as SearchIcon };
