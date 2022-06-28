import { FC, memo } from "react";

type SpinnerProps = {};

const Spinner: FC<SpinnerProps> = (props) => {
  return (
    <div className="flex space-x-2 items-center  sm:justify-start justify-end">
      <h1 className="font-medium text-medium">Loading..</h1>
      <img
        className={"animate-spin"}
        src="https://img.icons8.com/windows/32/000000/loading-sign.png"
      />
    </div>
  );
};

Spinner.defaultProps = {};

export default memo(Spinner);
