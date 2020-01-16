// React imports
import React from "react";

// Components
import MemberCard from "./MemberCard";
import MemberData from "./MemberData";
import Input from "./Input";
import Groups from "./Groups";

// General Imports: We import the faker library for the development phase. It generates fake data like pictures.
import { image } from "faker";

/* Configs: Here we import our data. In this case a hard coded array of obj, with
/   { id: 1, name: "Aleksandar", image: " ", active: true },
    { id: 2, name: "Bettina", image: " ", active: true },
    ...

    */

import { STUDENTS } from "../configs/data";

class Main extends React.Component {
  /*
  Here we prepare the state for our students. We use a Map Object to store the data
  because we can make use of the id to address our data.

  */
  state = {
    students: false,
    maxStudentsPerGroup: 0
  };

  // You can do it =)
  // https://www.youtube.com/watch?v=D_Vg4uyYwEk

  componentDidMount() {
    /*
        According to the universal rule of not mutating the original data,
        here, we convert it into a Map().
        So we can make changes to the "copy" (we can put it like that) of the data.
        We decided to generate a new Map object by iterating over our original data array and
        write a new object for every array element (which is an object ;-)
    */
    const students = new Map(
      STUDENTS.map(i => [
        i.id,
        {
          id: i.id, // We get the value of id of our Student obj.
          name: i.name, // We get the value of name of our Student obj.
          active: i.active, // We get the value of active of our Student obj.
          image: image.avatar() // We generate a picture with our faker library.
        }
      ])
    );

    console.log(students); // Just to check how the Map obj. looks like

    this.setState({
      students // And here we finally set the state with our new generated Map
      // which can be addressed by the property students.
      // if we would use this.state.students we get the entire Map!
    });
  }

  /*
        Callback function that will be used
        in the MemberCard component.
        If a MemberCard is clicked we get the id of the component and toggle the
        property active in the student obj (it is a copy already!)
    */
  handleActive = id => {
    const { students } = this.state; // we get the students Map from the state
    const student = students.get(id); // we get the student obj by id

    // ! => NOT IN operator
    student.active = !student.active; // We toggle the active property
    // and call this.setState to store the new information and re-render the components
    this.setState({
      students
    });
  };

  /* Get value from input for later use. */
  handleMaxStudentsInput = e => {
    this.setState({
      maxStudentsPerGroup: e.target.value
    });
  };

  /* Here we render the list of students on the left-hand side. For this reason
    we create an empty auxiliary array (it will receive the components later)

    We take the activeStudents from the state and we loop over it.
    For each "row" of the student data we create a new array entry with the generated component.

    Then we return the auxiliary array to render.

    */
  renderCards = () => {
    // auxiliary array
    const displayStudents = [];
    const { students } = this.state; // ES6 way to get the value of an object with the key students
    // It will be stored in a variable named students!

    students /* Here we check if students variable is empty or not. Because we use a ForEach loop
     to generate our List for displaying we have to check if its empty. Otherwise it would
    throw an error when we would display the website for the first time. We generate our students
    Map after we mounted the component (componentDidMount). That means the render() was already called the first time
    We decided to make an array of Components we can display. We pass the callback function
    handleActive to the child MemberCard. With this callback function we get later the information
    which child was clicked by passing its id.
    */ &&
      students.forEach(i => {
        displayStudents.push(
          <MemberCard handleActive={this.handleActive} obj={i}>
            <MemberData obj={i} />
          </MemberCard>
        );
      });

    // return the auxiliary array to render
    return displayStudents;
  };

  render() {
    const { renderCards } = this; //
    const { students, maxStudentsPerGroup } = this.state; // deconstruct the state obj.

    return (
      <>
        <div className="wrapper">
          <div className="students">
            <h3>
              Students{" "}
              <Input handleMaxStudentsInput={this.handleMaxStudentsInput} />{" "}
              {/*Here we
               pass the callback function to get the data from child component Input*/}
            </h3>
            {renderCards()} {/* Here we call our method renderCards */}
          </div>
          {/* Here we check if the students Map is empty and if not, we can start to generate our
          Groups. For this reason we give the component the students Map and the maxStudentsPerGroup info as props*/}

          {students && (
            <Groups
              students={students}
              maxStudentsPerGroup={maxStudentsPerGroup}
            />
          )}
        </div>
      </>
    );
  }
}

export default Main;
