// React imports
import React from "react";

// Components
import MemberCard from "./MemberCard";
import MemberData from "./MemberData";
import Input from "./Input";

// Configs
import { STUDENTS } from "../configs/data";

class Main extends React.Component {
  state = {
    activeStudents: false
  };

  // You can do it =)
  // https://www.youtube.com/watch?v=D_Vg4uyYwEk

  componentDidMount() {
    /*
        According to the universal rule of not mutating the original data,
        here, we convert it into a Map().
        So we can make changes to the "copy" (we can put it like that) of the data.
    */
    const activeStudents = new Map(
      STUDENTS.map(i => [
        i.id,
        {
          id: i.id,
          name: i.name,
          active: i.active
        }
      ])
    );

    this.setState({
      activeStudents
    });
  }

  /*
        Callback function that will be used
        in the MemberCard component.
    */
  handleActive = id => {
    const { activeStudents } = this.state;
    const student = activeStudents.get(id);

    // ! => NOT IN operator
    student.active = !student.active;

    this.setState({
      activeStudents
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
    const { activeStudents } = this.state;

    activeStudents &&
      activeStudents.forEach(i => {
        displayStudents.push(
          <MemberCard
            handleActive={this.handleActive}
            id={i.id}
            active={i.active}
          >
            <MemberData name={i.name} />
          </MemberCard>
        );
      });

    // return the auxiliary array to render
    return displayStudents;
  };

  render() {
    const { renderCards } = this;
    const { activeStudents } = this.state;

    return (
      <>
        <Input />
        <div className="wrapper">
          <div className="students">
            <h3>Students</h3>
            {renderCards()}
          </div>
          {activeStudents && (
            <div className="groups">
              <p>Students:</p>
              {/* Convert student data to json string to show into the div */}
              {JSON.stringify(Array.from(activeStudents.entries()))}
            </div>
          )}
        </div>
      </>
    );
  }
}

export default Main;
