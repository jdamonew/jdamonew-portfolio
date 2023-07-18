import React from 'react'
import "../../Styles/Components/_button.scss";
import { ArrowRight2 } from 'iconsax-react';

const Button = ({title, onClick, appearence="default"}) => {
  return (
    <button className={`button ${appearence}`} onClick={onClick}>
      <span>
        {title}
      </span>
      <ArrowRight2
        size="20"
        color="#FFF"
        variant="Broken"
      />
    </button>
  )
}

export default Button