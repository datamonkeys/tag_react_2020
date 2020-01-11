// React Imports
import React from "react";

// General Imports
import { image } from 'faker';

const MemberData = (props) => {
    // Get fake image from faker library
    const imageURL = image.avatar();

    /*
        Nothing special here kkkk
        just show the data
    */
    return (
        <>
            <div className="member-data">
                <div className="image">
                    <img src={imageURL} className="card-img" alt="..." />
                </div>
                <div className="title">
                    <span className="card-title">{props.name}</span>
                </div>
            </div>
        </>
    );
};

export default MemberData;
