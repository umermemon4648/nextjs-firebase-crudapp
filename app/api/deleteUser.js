import {collection, getFirestore, deleteDoc} from 'firebase/firestore'
import app from '../firebase/config'

const firestore = getFirestore(app)

export default async function handler(req,res){
    if (req.method==='DELETE') {
        const {id} = req.body
        try {
            await deleteDoc(collection(firestore, 'users-info',id))
            res.status(200).json({success:true, message: "Doc deleted"})
        } catch (error) {
            res.status(500).json({error:'Failed to Delete document'})
        }
    }

    else{
        res.status(405).json({error:'This Method is not allowed'})

    }
}