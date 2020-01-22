// React Imports
import React from "react";

function Input() {
  return (
    <form>
      <div className="form-row">
        <div className="col">
          <input
            type="text"
            className="form-control"
            placeholder="First name"
          />
        </div>
        <div className="col">
          <input type="text" className="form-control" placeholder="Last name" />
        </div>
        <div className="col">
          <button type="submit" class="btn btn-primary  btn-block">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default Input;
