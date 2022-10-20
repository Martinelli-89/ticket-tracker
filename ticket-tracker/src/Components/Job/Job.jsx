const Job = (props) => {

    const jobs = props.job.map (job => { return (

        <div>
            {job}
            <button>Finished</button>
            <button>Delete</button>
         </div>
    );
    })

    return (

        <>
            {jobs}
        </>

    )

}

export default Job;