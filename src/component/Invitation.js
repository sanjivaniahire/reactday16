

function Invitation(props){
    const{subject, to, name, event, friends, location}= props

    return(
<>
<p> Subject: {subject}</p>
<p> To: {to}</p>
<p> Hi, {name}</p>
<p>  I am having a {event} next Friday at my Home . Would you like to come ? It will be fun . 
Lots of people from my school are coming . you know some of them - {friends} .
  </p>
<p> My house is behind our school , near {location} .
</p>
<p> from,</p>
<p>{name}</p>
</>
    )
}
export default Invitation;