import connectToDatabase from '../../../lib/mongodb';
import { Db } from 'mongodb';

/**
 * API to list categories.
 */
export default async (req, res) => {
    // Get the connection to the database.
    const db = await connectToDatabase;
    // Array of categories.
    let categories = [];
    // Check if db is a database object.
    if (db instanceof Db) {
        // Get a list of categories from the collection. By default 20 categories
        categories = await db
            .collection("categories")
            .find({})
            .sort({ id: -1 })
            .limit(20)
            .toArray();
    }
    // Return 200 and a list of categories.
    res.status(200).json(categories);
};