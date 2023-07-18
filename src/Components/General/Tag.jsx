import React from 'react'
import "../../Styles/Components/_tag.scss";

const Tag = ({ text = "default", appearance="default" }) => {
  return (
    <span className={`tag ${appearance}`}>
      {text}
    </span>
  )
}

export default Tag