import React from "react";
import { ArrowRight2 } from "iconsax-react";

const Button = ({ children, onClick, appearence = "default" }) => {
  return (
    <button className={`button ${appearence}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
