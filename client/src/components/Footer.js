import React from "react";

const Footer = () => {
  const thisYear = () => {
    const year = new Date().getFullYear();
    return year;
  };

  return (
    <div>
      Copyright &copy; <span>{thisYear()}</span>
    </div>
  );
};
export default Footer;
