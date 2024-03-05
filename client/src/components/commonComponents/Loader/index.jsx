import React from "react";
import "./index.scss";
import { BounceLoader } from "react-spinners";
const Loader = () => {
  return (
    <div className='absolute top-0 left-0 flex z-[80] justify-center w-full items-center bg-background h-full'>
      <BounceLoader color="#36d7b7" />
    </div>
  )
};

export default Loader;
