import { MongoClient } from 'mongodb'
import MeetupList from '../Component/meetups/MeetupList'

export default function Home(props) {  
  return (
      <MeetupList meetups={props.meetups} />
  )
}

export const getStaticProps = async() => {

  const client = await MongoClient.connect(`mongodb+srv://myTodos:rafi1234@cluster0.fltsf.mongodb.net/meetups?retryWrites=true&w=majority`,{
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  const db = client.db()
  const meetupCollection = db.collection('meetups')

  const meetups = await meetupCollection.find().toArray()
  
  client.close()

  return {
    props: {
      meetups: meetups.map(meetup => ({
        title: meetup.title,
        address:meetup.address,
        image: meetup.image,
        description: meetup.description,
        id: meetup._id.toString(),

      }))
    },
    revalidate: 1
  }
}
