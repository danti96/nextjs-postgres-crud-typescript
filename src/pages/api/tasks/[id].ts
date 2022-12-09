import { NextApiRequest, NextApiResponse } from 'next'
import { conn } from '../../../utils/database'
// eslint-disable-next-line import/no-anonymous-default-export
export default async function (req: NextApiRequest, res: NextApiResponse) {
    const { method, query, body } = req;

    switch (method) {
        case "GET":
            try {
                const text = "SELECT * FROM tasks WHERE id = $1"
                const values = [query.id]
                const result = await conn.query(text, values);

                if (result.rows.length === 0)
                    return res.status(404).json({ message: "Task not found." });

                return res.status(200).json(result.rows[0]);
            } catch (error: any) {
                return res.status(500).json({ message: error.message })
            }

        case "PUT":
            try {
                const text = "UPDATE tasks set title=$1, description=$2 WHERE id=$3 RETURNING *"
                const values = [body.title, body.description, query.id]
                const result = await conn.query(text, values);

                if (result.rows.length === 0)
                    return res.status(404).json({ message: "Task not found." });

                return res.status(200).json(result.rows[0]);
            } catch (error: any) {
                return res.status(500).json({ message: error.message })
            }
        case "DELETE":
            try {
                const text = "DELETE FROM tasks WHERE id = $1 RETURNING *"
                const values = [query.id]
                const result = await conn.query(text, values);

                if (result.rows.length === 0)
                    return res.status(404).json({ message: "Task not found." });

                return res.status(200).json("Deleting successfull");
            } catch (error: any) {
                return res.status(500).json({ message: error.message })
            }
        default:
            return res.status(200).json("Method not allowed");
    }
}
