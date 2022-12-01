import React from "react";

const Button = ({ title, onClick }) => {
  return (
    <div className="select-language">
      <div className="btn">
        <button onClick={onClick}>{title}</button>
      </div>
    </div>
  );
};

export default Button;
