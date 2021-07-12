import { MongoClient, ObjectID } from "mongodb";
import MeetupDetail from "../../Component/meetups/MeetupDetail";

const MeetUpDetails = ({ meetupData }) => {
    return (
        <MeetupDetail
            id={meetupData.id}
            title={meetupData.title}
            image={meetupData.image}
            address={meetupData.address}
            description={meetupData.description}
        />
    );
}

export const getStaticPaths = async () => {
    const client = await MongoClient.connect(`mongodb+srv://myTodos:rafi1234@cluster0.fltsf.mongodb.net/meetups?retryWrites=true&w=majority`)
    const db = client.db()
    const meetupCollection = db.collection('meetups')

    const meetups = await meetupCollection.find({}, { _id: 1 }).toArray()
    return {
        fallback: false,
        paths: meetups.map(meetup => ({ params: { meetupId: meetup._id.toString() } }))
    }
}

export const getStaticProps = async (context) => {
    const meetupId = context.params.meetupId

    const client = await MongoClient.connect(`mongodb+srv://myTodos:rafi1234@cluster0.fltsf.mongodb.net/meetups?retryWrites=true&w=majority`,{
        useNewUrlParser: true,
        useUnifiedTopology: true
      })
    const db = client.db()
    const meetupCollection = db.collection('meetups')

    const selectedMeetup = await meetupCollection.findOne({ _id: ObjectID(meetupId)})
    return {
        props: {
            meetupData: {
                id: selectedMeetup._id.toString(),
                title: selectedMeetup.title,
                address: selectedMeetup.address,
                description: selectedMeetup.description,
                image: selectedMeetup.image
            }
        }
    }
}

export default MeetUpDetails;