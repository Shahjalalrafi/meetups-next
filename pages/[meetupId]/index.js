import MeetupDetail from "../../Component/meetups/MeetupDetail";

const MeetUpDetails = ({meetupData}) => {
    return (
        <MeetupDetail
            id={meetupData.id}
            title={meetupData.title}
            image={meetupData.image}
            address="55-d blog, chittagong, bangladesh"
            description="it's my home town"
        />
    );
}

export const getStaticPaths = async() => {
    return {
        fallback:false,
        paths: [
            {
                params: {
                    meetupId: 'm1'
                }
            },
            {
                params: {
                    meetupId: 'm2'
                }
            },
        ]
    }
}

export const getStaticProps = async (context) => {
    const meetupId = context.params.meetupId
    console.log(meetupId)
    return {
        props: {
            meetupData: {
                id: meetupId,
                title: 'this is home',
                image: "https://www.fairobserver.com/wp-content/uploads/2014/05/shutterstock_163182242.jpg",
                address: "55-d blog, chittagong, bangladesh",
                description: "it's my home town"
            }
        }
    }
}

export default MeetUpDetails;