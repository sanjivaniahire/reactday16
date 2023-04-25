import React from "react";
function ProfileCard(props){
    const{ image, designation, name, jobDescription } = props;
    function handleClick(){
        alert(name);
    };
    return(
<>


<div className="card">
<img src={image} alt={name} />
<div className="card-body">
<h4 className="card-subtitle">{designation}</h4>
<h3 className="card-title">{name}</h3> 
<p className="card-text">{jobDescription}</p>
<button onClick={handleClick}>See More</button>
</div>
</div>
</>
    );
    }
    export default ProfileCard;