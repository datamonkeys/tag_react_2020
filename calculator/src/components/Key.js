// React imports
import React from "react";

const Key = props => {
  const { button, type, symbol, onClick, size } = props;
  return (
    <button
      className={`${type} ${size ? "big" : ""}`}
      onClick={e => onClick && onClick(button)}
    >
      {symbol || button}
    </button>
  );
};

export default Key;
