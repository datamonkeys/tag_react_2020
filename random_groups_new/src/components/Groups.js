// React Imports
import React from "react";

// Component Imports
import Group from "./Group";

//-------------------------------------------------
/* Starting from here we generate our groups. Don't worry about this part so much
We used the approach to shuffle our array and afterwards we split it up
shuffleArray and chunk are just auxil functions
*/
// https://stackoverflow.com/a/12646864

const shuffleArray = array => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};

/*
  Create an empty array to hold the chunks called chunked_arr.
  Declare a variable called index started at 0
  While index is less than length of the given array
  Slice the array from index to size + index and push it into the chunked_arr
  Increment the index with size.

  https://medium.com/@Dragonza/four-ways-to-chunk-an-array-e19c889eac4
*/
function chunk(array, size) {
  const chunked_arr = [];
  let index = 0;
  while (index < array.length) {
    chunked_arr.push(array.slice(index, size + index));
    index += size;
  }
  return chunked_arr;
}
// End of fancy mathematics
//-------------------------------------------------

// Here we start to create our Groups to be displayed. createGroups is not a component it is a normal method!
// No JSX elements are returned!

const createGroups = props => {
  // The take the students Map and the maxStudentsPerGroup input data from our parent via the props obj
  const { students, maxStudentsPerGroup } = props;

  // Now we create a new array with all our active Students. Means who has the property active: true will be pushed to our activeStudents array
  const activeStudents = [];
  students.forEach(student => {
    // We now iterate over our Map and get the value = student obj.
    student.active && activeStudents.push(student); // first we check if the property active is true if it is true we call the push method
  });

  shuffleArray(activeStudents); // Here we call the shuffle Array method.

  const slicedArray = chunk(activeStudents, Number(maxStudentsPerGroup)); // We call the chunk method which gives us back an array of arrays ;-)
  console.log("slicedArray", slicedArray); // Basically every array in the array is a group, take a look in the console to understand the structure!
  return slicedArray; // Now we return the array of arrays
};

/* This method is called to:
  1. generate our array of arrays = our groups
  2. generate based on the output of createGroups the Group Component.
  Check if you get the difference between groups and group !!
*/
const renderGroups = props => {
  const groups = createGroups(props); // Here we generate our groups
  // We take now the array of arrays and pass one by one to our Group Component. So we pass an array!
  // the map will iterate over the array and after it finishes returns the result
  // we need the index
  return groups.map((group, index) => (
    <Group group={group} key={index} index={index} />
  ));
};

const Groups = props => {
  const { maxStudentsPerGroup } = props; // We get the data from the parent
  return (
    <div className="groups">
      <h3>Groups</h3>
      {/* We have to have a maxStudentsPerGroup selected before we can generate */}
      {maxStudentsPerGroup > 0 ? renderGroups(props) : <div>Select...</div>}
    </div>
  );
};

export default Groups;
