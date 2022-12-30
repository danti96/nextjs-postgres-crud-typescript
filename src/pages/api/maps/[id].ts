import { NextApiRequest, NextApiResponse } from 'next'
import { conn } from '../../../utils/database'
// eslint-disable-next-line import/no-anonymous-default-export
export default async function (req: NextApiRequest, res: NextApiResponse) {
    const { method, query, body } = req;

    switch (method) {
        case "GET":
            try {
                const text = "SELECT distinct(place_id), * FROM mapapi where code_zip='$1';"
                const values = [query.id]
                const result = await conn.query(text, values);

                if (result.rows.length === 0)
                    return res.status(404).json({ message: "Task not found." });

                return res.status(200).json(result.rows[0]);
            } catch (error: any) {
                return res.status(500).json({ message: error.message })
            }

        default:
            return res.status(200).json("Method not allowed");
    }
}