import { useRouter } from "next/dist/client/router";
import NewMeetupForm from "../../Component/meetups/NewMeetupForm";

const NewMeetup = () => {
    const router = useRouter()

    const handleFormMeetup = async(enteredMeetup) => {
        const response = await fetch('/api/new-meetup', {
            method:"POST",
            body: JSON.stringify(enteredMeetup),
            headers: {
                "Content-Type": "application/json"
            }
        })

        const data = await response.json()
        console.log(data)
        router.push('/')
    }
    return ( 
        <NewMeetupForm onAddMeetup={handleFormMeetup} />
     );
}
 
export default NewMeetup;