import React from 'react';

interface MyComponentProps {
  className?: string;
}
const Facebook: React.FC<MyComponentProps> = ({ className }) => {
  return (
    <svg
      className={className}
      width="34"
      height="34"
      viewBox="0 0 34 34"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
    >
      <path
        d="M31.1667 17C31.1667 9.18004 24.82 2.83337 17 2.83337C9.18 2.83337 2.83333 9.18004 2.83333 17C2.83333 23.8567 7.70666 29.5659 14.1667 30.8834V21.25H11.3333V17H14.1667V13.4584C14.1667 10.7242 16.3908 8.50004 19.125 8.50004H22.6667V12.75H19.8333C19.0542 12.75 18.4167 13.3875 18.4167 14.1667V17H22.6667V21.25H18.4167V31.0959C25.5708 30.3875 31.1667 24.3525 31.1667 17Z"
        fillOpacity="0.8"
        fill="#3083ff"
      />
    </svg>
  );
};

export default Facebook;
