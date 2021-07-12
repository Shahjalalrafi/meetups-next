import NewMeetupForm from "../../Component/meetups/NewMeetupForm";

const NewMeetup = () => {
    const handleFormMeetup = (enteredMeetup) => {
        console.log(enteredMeetup)
        return enteredMeetup
    }
    return ( 
        <NewMeetupForm onAddMeetup={handleFormMeetup} />
     );
}
 
export default NewMeetup;