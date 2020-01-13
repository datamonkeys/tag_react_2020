// React imports
import React from "react";

// Components
import MemberCard from "./MemberCard";
import MemberData from "./MemberData";
import Input from "./Input";
import Groups from "./Groups";

// General Imports
import { image } from "faker";

// Configs
import { STUDENTS } from "../configs/data";

class Main extends React.Component {
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
        */
    const students = new Map(
      STUDENTS.map(i => [
        i.id,
        {
          id: i.id,
          name: i.name,
          active: i.active,
          image: image.avatar()
        }
      ])
    );

    console.log(students);

    this.setState({
      students
    });
  }

  /*
        Callback function that will be used
        in the MemberCard component.
    */
  handleActive = id => {
    const { students } = this.state;
    const student = students.get(id);

    // ! => NOT IN operator
    student.active = !student.active;

    this.setState({
      students
    });
  };

  /* Get value from input for later use */
  handleMaxStudentsInput = e => {
    this.setState({
      maxStudentsPerGroup: e.target.value
    });
  };

  /*
    we create an empty auxiliary array (it will receive the components later)

    We take the activeStudents from the state and we loop over it.
    For each "row" of the student data we create a new array entry with the generated component.

    Then we return the auxiliary array to render.
    */
  renderCards = () => {
    // auxiliary array
    const displayStudents = [];
    const { students } = this.state;

    students &&
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
    const { renderCards } = this;
    const { students, maxStudentsPerGroup } = this.state;

    return (
      <>
        <div className="wrapper">
          <div className="students">
            <h3>
              Students{" "}
              <Input handleMaxStudentsInput={this.handleMaxStudentsInput} />
            </h3>
            {renderCards()}
          </div>
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
