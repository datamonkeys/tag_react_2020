// React Imports
import React from "react";

// We keep the structure flat here and generate the Group via this function which is basically
// a component. It returns JSX elements. So you can create a component out of the return statement
// e.g GroupMember which displays the JSX and call it in the return statement. However you need to pass the right props to it.
const renderGroup = props => {
  // We pass here an array from our parent Groups
  const { group } = props;
  const leader = Math.floor(
    Math.random() * group.length
  ); /* Based on our array we put in
  get on element of array with a random number to choose the leader
  */
  // We now iterate over the array of student obj and furthermore get the index of our position while iterating (the index comes from .map())
  return group.map((student, index) => {
    // Now we use the leader index to compare it with our actual position while iterating
    const isLeader = leader === index ? "leader" : ""; // If the index=== leander index we set a css property the leader
    /* You find in the App.css sheet the rules for this class.
      .leader {
        background-color: cornflowerblue;
        color: white;
      }
    */
    // We generate for every student the following JSX elements. Which will be displayed in the <div className="group">{renderGroup(props)}</div>
    return (
      <div className={`student ${isLeader}`}>
        {" "}
        {/* Here we add the class or remove the leader class */}
        <div className="image">
          <img src={student.image} className="card-img" alt={student.name} />
        </div>
        <div className="name">{student.name}</div>
      </div>
    );
  });
};

const Group = props => {
  return <div className="group">{renderGroup(props)}</div>;
};

export default Group;
