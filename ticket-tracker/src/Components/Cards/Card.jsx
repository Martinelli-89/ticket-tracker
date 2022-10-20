import "./Cards.scss";
import {react, useState} from "react";
import Work from "../Work/Work.jsx";

const Card = (props) => {

    const teamMember = props.team.map ( (member, index) => { return (
            <section className="card" key={index +1}>
                <h3>{member.name}</h3>
                <h4>{member.role}</h4>
                <Work />  
            </section>
    );
    })

    return (
        <>
            {teamMember}
        </>
    );

}

export default Card;