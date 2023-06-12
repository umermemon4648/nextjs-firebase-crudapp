import {getFirestore, collection, getDoc} from 'firebase/firestore'
import app from '../firebase/config'
const firestore = getFirestore(app)

export default async function handler(req, res){
    if (req.method==='GET') {
        const {id} = req.body
        try {
            const getSnapShot = await getDoc(collection(firestore, 'users-info'))

            const usersInfo = getSnapShot.docs.map((doc)=>({
                id: doc.id,
                ...doc.data()
            }))

            res.status(200).json({success:true, usersInfo})
        } catch (error) {
            res.status(500).json({error:'Failed to load document'})
        }
    }

    else{
        res.status(405).json({error:'This Method is not allowed'})

    }
}