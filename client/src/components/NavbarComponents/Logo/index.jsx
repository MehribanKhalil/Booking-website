import React from "react";

const Logo = ({ isScroll }) => {
  return (
    <div>
      {/* <img
        src={` ${isScroll ? ' https://www.radiustheme.com/demo/wordpress/themes/tripfery/wp-content/uploads/2024/01/white__logo.svg' : 'https://www.radiustheme.com/demo/wordpress/themes/tripfery/wp-content/uploads/2024/01/dark_logo.svg'} `}
        alt="Logo"
        className=" w-[140px] md:w-[130px]"
      /> */}
      <img
        src="https://www.radiustheme.com/demo/wordpress/themes/tripfery/wp-content/uploads/2024/01/white__logo.svg"
        alt="Logo"
        className=" w-[140px] md:w-[130px]"
      />
    </div>
  );
};

export default Logo;
