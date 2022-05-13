import connectToDatabase from '../../../lib/mongodb';
import { Db } from 'mongodb';

export default async (req, res) => {
    try {
        const db = await connectToDatabase;
        if (db instanceof Db) {
            db.collection('products').insertOne({ 'product_name': 'Product 2', 'quantity': 5, 'price': 4.50 });
        }
        res.status(200);
    } catch (e) {
        res.status(500);
        console.error(e);
    }
};