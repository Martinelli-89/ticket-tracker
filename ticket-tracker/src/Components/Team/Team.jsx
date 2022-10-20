import {react, useState} from "react";
import Card from "../Cards/Card.jsx";
import "./Team.scss";


const Team = (props) => {


    return (

        <main className="main">

            <section className="team">
                <Card team={props.team}/>
            </section>
        </main>

    );

}

export default Team;