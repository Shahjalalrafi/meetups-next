import Head from 'next/head'
import Image from 'next/image'
import MeetupList from '../Component/meetups/MeetupList'

const DUMMY_DATA = [
  {
    id: 'm1',
    title: 'this is home',
    image: "https://www.fairobserver.com/wp-content/uploads/2014/05/shutterstock_163182242.jpg",
    description: "it's my home town"
  },
  {
    id: 'm2',
    title: 'this is home2',
    image: "https://www.fairobserver.com/wp-content/uploads/2014/05/shutterstock_163182242.jpg",
    description: "it's my home town in town side"
  },
]

export default function Home(props) {  
  return (
      <MeetupList meetups={props.meetups} />
  )
}

export const getStaticProps = async() => {
  return {
    props: {
      meetups: DUMMY_DATA
    }
  }
}
