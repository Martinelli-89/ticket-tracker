import React, { useState } from "react";
import Job from "../Job/Job.jsx";

const AddJob = () => {

    const [jobs, updateJobs] = useState([]);
    const [input, updateInput] = useState();

    const handleClick = () => {
        updateJobs([...jobs,input]);
    }

    const onChange = (e) => {
        updateInput(e.target.value);
    }

    const handleDelete = (e) => {
        const tempArray = [...jobs];
        const idx = tempArray.indexOf("event.target")
    }

    return (

        <div>
            <input type="text" placeholder="Add job here" onChange={onChange}></input>
            <button onClick={handleClick}>Add job</button>
            <Job job={jobs} />
        </div>

    );

}

export default AddJob;