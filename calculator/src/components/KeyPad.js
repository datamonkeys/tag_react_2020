// React imports
import React from "react";

// Component imports
import Key from "./Key";

const KeyPad = props => {
  return (
    <div className="keypad">
      <Key onClick={props.onClick} type="grey" button="C" />
      <Key type="grey" button="+/-" />
      <Key type="grey" button="%" />
      <Key onClick={props.onClick} type="orange" button="/" symbol="&#247;" />
      <Key onClick={props.onClick} type="lightGrey" button="7" />
      <Key onClick={props.onClick} type="lightGrey" button="8" />
      <Key onClick={props.onClick} type="lightGrey" button="9" />
      <Key onClick={props.onClick} type="orange" button="*" symbol="&times;" />
      <Key onClick={props.onClick} type="lightGrey" button="4" />
      <Key onClick={props.onClick} type="lightGrey" button="5" />
      <Key onClick={props.onClick} type="lightGrey" button="6" />
      <Key onClick={props.onClick} type="orange" button="-" symbol="&minus;" />
      <Key onClick={props.onClick} type="lightGrey" button="1" />
      <Key onClick={props.onClick} type="lightGrey" button="2" />
      <Key onClick={props.onClick} type="lightGrey" button="3" />
      <Key onClick={props.onClick} type="orange" button="+" />
      <Key onClick={props.onClick} type="lightGrey" button="0" size="big" />
      <Key onClick={props.onClick} type="lightGrey" button="," />
      <Key onClick={props.onClick} type="orange last-right" button="=" />
    </div>
  );
};

export default KeyPad;
