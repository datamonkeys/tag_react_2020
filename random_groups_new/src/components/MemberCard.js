// React Imports
import React from "react";

class MemberCard extends React.Component {
    state = {
        active: true
    };

    /* Get data from the props active and add it to state */
    componentDidMount() {
        const { active } = this.props.obj;

        this.setState({
            active
        });
    }

    /*
        This function will change the state, we will use this.state.activate
        again in rendering to check if active == true
        and change the class of the element dynamically
    */
    handleClick = active => {
        const { handleActive, obj } = this.props;
        const { id } = obj;

        this.setState({
            active: !active
        });
        handleActive(id);
    };

    render() {
        const { active } = this.state;
        const statusClass = active ? "active": "inactive";

        return (
            <div className={`card mb-3 ${statusClass}`} onClick={() => this.handleClick(active)}>
                <div className="row no-gutters">
                    { /* HERE START */}
                    {this.props.children}
                    { /* HERE END */}
                </div>
            </div>
        );
    }
}
export default MemberCard;
