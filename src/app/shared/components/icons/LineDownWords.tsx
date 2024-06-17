interface Class {
  className: string;
}
const LineDownWords: React.FC<Class> = ({ className }) => {
  return (
    <svg
      className={className}
      width="137"
      height="13"
      viewBox="0 0 137 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.842868 5.4468L136.512 0.0232306L133.754 2.71257L0.959219 12.2669L0.842868 5.4468Z"
        fill="#3083FF"
      />
    </svg>
  );
};

export default LineDownWords;
