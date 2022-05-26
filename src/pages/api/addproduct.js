import connectToDatabase from '../../../lib/mongodb';
import { Db, ObjectId } from 'mongodb';

/**
 * API to add a product.
 */
export default async (req, res) => {
    try {
        // Get the connection to the database.
        const db = await connectToDatabase;
        // Check if db is a database object.
        if (db instanceof Db) {
            // Add a product to the collection.
            db.collection('products').insertOne({
                'product_name': req.body.product_name,
                'quantity': req.body.quantity,
                'price': req.body.price,
                'category': ObjectId(req.body.category)
            });
        }
        // Return 200 if everything was successful.
        res.status(200).json("Successful!");
    } catch (e) {
        // Return 500 if there is an error.
        res.status(500).json("Error!");
        console.error(e);
    }
};
