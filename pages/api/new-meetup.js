import { MongoClient } from "mongodb"

async function handler(req, res) {
    if(req.method === 'POST') {
        const data = req.body
        const client = await MongoClient.connect(`mongodb+srv://myTodos:rafi1234@cluster0.fltsf.mongodb.net/meetups?retryWrites=true&w=majority`,{
            useNewUrlParser: true,
            useUnifiedTopology: true
          })
        const db = client.db()
        const meetupCollection = db.collection('meetups')

        const result = await meetupCollection.insertOne(data)
        console.log(result)
        
        client.close()

        res.status(201).json({
            message: "meetup inserted"
        })
    }
}

export default handler