import {updateDoc, getFirestore, collection} from 'firebase/firestore'
import app from '../firebase/config'
const firestore = getFirestore(app)

export default async function handler(req, res){
    if (req.method==='PUT') {
        const {id, fname, lname, email, gender} = req.body
        try {

            const updatedSnapshot = await updateDoc(collection(firestore, 'users-info',id), 
            {fname, lname, email, gender}
            )
            res.status(200).json({success:true, updatedSnapshot})
        } catch (error) {
            res.status(500).json({error:'Failed to update document'})
        }
    }
    
    else{
        res.status(405).json({error:'This Method is not allowed'})
    }

}