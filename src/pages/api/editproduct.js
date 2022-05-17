import connectToDatabase from '../../../lib/mongodb';
import { Db } from 'mongodb';

export default async (req, res) => {
    try {
        const db = await connectToDatabase;
        if (db instanceof Db) {
            db.collection('products').updateOne({
                _id: req.body._id
            }, {
                $set: {
                    'product_name': req.body.product_name,
                    'quantity': req.body.quantity,
                    'price': req.body.price
                }
            });
        }
        res.status(200).json("Successful!");
    } catch (e) {
        res.status(500).json("Error!");
        console.error(e);
    }
};
