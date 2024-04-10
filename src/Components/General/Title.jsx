import React from "react";

const Title = ({ children, type }) => {
  return <h1 className={`title-component ${type}`}>{children}</h1>;
  /**
   * 36
   * 28
   * 22
   * 18
   * 16
   */
};

export default Title;
