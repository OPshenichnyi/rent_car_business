interface Class {
  className: string;
}
const Arrow: React.FC<Class> = ({ className }) => {
  return (
    <svg
      className={className}
      width="14"
      height="8"
      viewBox="0 0 14 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13 3.99992H1M10.3333 1.33325L13 3.99992L10.3333 1.33325ZM13 3.99992L10.3333 6.66659L13 3.99992Z"
        stroke="#1D1E21"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Arrow;
