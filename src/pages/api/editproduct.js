import connectToDatabase from '../../../lib/mongodb';
import { Db, ObjectId } from 'mongodb';

/**
 * API to edit a product.
 */
export default async (req, res) => {
    try {
        // Get the connection to the database.
        const db = await connectToDatabase;
        // Check if db is a database object.
        if (db instanceof Db) {
            // Update the product in the collection using the _id.
            db.collection('products').updateOne({
                _id: ObjectId(req.body._id)
            }, {
                $set: {
                    'product_name': req.body.product_name,
                    'quantity': req.body.quantity,
                    'price': req.body.price
                }
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
