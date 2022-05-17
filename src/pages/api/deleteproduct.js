import connectToDatabase from '../../../lib/mongodb';
import { Db, ObjectId } from 'mongodb';

export default async (req, res) => {
    try {
        const db = await connectToDatabase;
        if (db instanceof Db) {
            db.collection('products').deleteOne({ "_id": ObjectId(req.body._id) });
        }
        res.status(200).json("Successful!");
    } catch (e) {
        res.status(500).json("Error!");
        console.error(e);
    }
};