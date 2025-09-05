const BreadcrumbsArrow = ({ className }: { className?: string }) => {
  return (
    <svg
      className={className}
      width="7"
      height="9"
      viewBox="0 0 7 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.72 4.89142L0 8.89142V7.32342L4.672 4.49142L0 1.61142V0.107422L6.72 4.15542V4.89142Z"
        fill="#9FA1AA"
      />
    </svg>
  );
};

const CloseIcon = ({
  className,
  width,
  height,
}: {
  className?: string;
  width: number;
  height: number;
}) => {
  return (
    <svg
      width={`${width}`}
      height={`${height}`}
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.33325 2.33398L23.6666 23.6673M23.6666 2.33398L2.33325 23.6673"
        stroke="#878B90"
        strokeOpacity="0.9"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
};

const PreloaderGear = ({ className }: { className?: string }) => {
  return (
    <svg
      width="50"
      height="50"
      fill="rgba(36, 210, 57, 1)"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10.72,19.9a8,8,0,0,1-6.5-9.79A7.77,7.77,0,0,1,10.4,4.16a8,8,0,0,1,9.49,6.52A1.54,1.54,0,0,0,21.38,12h.13a1.37,1.37,0,0,0,1.38-1.54,11,11,0,1,0-12.7,12.39A1.54,1.54,0,0,0,12,21.34h0A1.47,1.47,0,0,0,10.72,19.9Z">
        <animateTransform
          attributeName="transform"
          type="rotate"
          dur="0.75s"
          values="0 12 12;360 12 12"
          repeatCount="indefinite"
        />
      </path>
    </svg>
  );
};

export { BreadcrumbsArrow, CloseIcon, PreloaderGear };
