import {addDoc, getFirestore, collection} from 'firebase/firestore'
import app from '../firebase/config'

const firestore = getFirestore(app)

export default async function handler(req, res){
    if (req.method==='POST') {
        const {fname, lname, email, gender} = req.body

        try {
            const snapshot = await addDoc(collection(firestore,'users-info'),{fname, lname, email, gender})
            res.status(200).json({id: snapshot.id, fname, lname, email, gender})
        } catch (error) {
            res.status(500).json({error: "Failed to add document"})
        }
    }
    else{
        
        res.status(405).json({error: "Method not allowd"})
    }
}