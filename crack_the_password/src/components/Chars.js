import React from "react";

import Char from "./Char";

const renderChars = (chars, handleChars) => {
  return chars.map(char => <Char char={char} handleChars={handleChars} />);
};

const Chars = props => {
  const { chars, handleChars } = props;
  return (
    <div className="chars">
      {renderChars(chars, handleChars)}
      <div className={`char empty`}></div>
    </div>
  );
};

export default Chars;
