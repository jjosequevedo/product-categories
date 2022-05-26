import connectToDatabase from '../../../lib/mongodb';
import { Db, ObjectId } from 'mongodb';

/**
 * API to edit a category.
 */
export default async (req, res) => {
    try {
        // Get the connection to the database.
        const db = await connectToDatabase;
        // Check if db is a database object.
        if (db instanceof Db) {
            // Update the category in the collection using the _id.
            db.collection('categories').updateOne({
                _id: ObjectId(req.body._id)
            }, {
                $set: {
                    'category_name': req.body.category_name
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
