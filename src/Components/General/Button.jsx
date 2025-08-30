import React from 'react'
import "../../Styles/Components/_button.scss";
import { ArrowRight2 } from 'iconsax-react';

const Button = ({ children, onClick, appearence = "default", className, style }) => {
  return (
    <button className={`button ${appearence} ${className}`} onClick={onClick} style={style} >

      {children}

    </button>
  )
}

export default Button