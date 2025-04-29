// pages/api/export.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient } from 'mongodb';
import { parse } from 'json2csv';

const uri = process.env.MONGODB_URI;

if (!uri) {
  throw new Error('MONGODB_URI is not defined in environment variables');
}

const client = new MongoClient(uri);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Only GET method is allowed' });
  }

  try {
    await client.connect();
    const db = client.db("test");
    const collection = db.collection("waitlists");

    const data = await collection.find({}).toArray();

    if (data.length === 0) {
      return res.status(404).json({ message: 'No documents found' });
    }

    const fields = [
      '_id',
      'fullName',
      'email',
      'country',
      'phoneNumber',
      'preferredCurrency',
      'updatePreference',
      'infoSource',
      'interests'
    ];

    const csv = parse(data, {
      fields,
      transforms: [
        
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (item: any) => ({
          ...item,
          _id: item._id.toString(),
          interests: Array.isArray(item.interests) ? item.interests.join(', ') : item.interests
        })
      ]
    });

    res.setHeader('Content-Type', 'text/csv');
    res.setHeader('Content-Disposition', 'attachment; filename="waitlist.csv"');
    res.status(200).send(csv);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error', error: (err as Error).message });
  } finally {
    await client.close();
  }
}
