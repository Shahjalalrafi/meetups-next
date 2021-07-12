import { MongoClient } from 'mongodb'
import Head from 'next/head'
import Image from 'next/image'
import MeetupList from '../Component/meetups/MeetupList'

// const DUMMY_DATA = [
//   {
//     id: 'm1',
//     title: 'this is home',
//     image: "https://www.fairobserver.com/wp-content/uploads/2014/05/shutterstock_163182242.jpg",
//     description: "it's my home town"
//   },
//   {
//     id: 'm2',
//     title: 'this is home2',
//     image: "https://www.fairobserver.com/wp-content/uploads/2014/05/shutterstock_163182242.jpg",
//     description: "it's my home town in town side"
//   },
// ]

export default function Home(props) {  
  return (
      <MeetupList meetups={props.meetups} />
  )
}

export const getStaticProps = async() => {

  const client = await MongoClient.connect(`mongodb+srv://myTodos:rafi1234@cluster0.fltsf.mongodb.net/meetups?retryWrites=true&w=majority`)
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
