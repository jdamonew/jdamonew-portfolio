import React from "react";

const Tag = ({ text = "default", appearance = "default" }) => {
  return <span className={`tag ${appearance}`}>{text}</span>;
};

export default Tag;
