import connectToDatabase from '../../../lib/mongodb';
import { Db } from 'mongodb';

export default async (req, res) => {
    const db = await connectToDatabase;
    let products = [];
    if (db instanceof Db) {
        products = await db
            .collection("products")
            .find({})
            .sort({ id: -1 })
            .limit(20)
            .toArray();
    }
    res.status(200).json(products);
};