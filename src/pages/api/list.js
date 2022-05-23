import connectToDatabase from '../../../lib/mongodb';
import { Db } from 'mongodb';

/**
 * API to list a product.
 */
export default async (req, res) => {
    // Get the connection to the database.
    const db = await connectToDatabase;
    // Array of products.
    let products = [];
    // Check if db is a database object.
    if (db instanceof Db) {
        // Get a list of products from the collection. By default 20 products
        products = await db
            .collection("products")
            .find({})
            .sort({ id: -1 })
            .limit(20)
            .toArray();
    }
    // Return 200 and a list of products.
    res.status(200).json(products);
};