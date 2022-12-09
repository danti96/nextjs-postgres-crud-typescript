// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { conn } from 'src/utils/database';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { method } = req;

    switch (method) {
        case "POST":
            const { title, description } = req.body;

            const query = "INSERT INTO tasks(title, description) VALUES ($1, $2) RETURNING *";
            const values = [title, description];

            const response = await conn.query(query, values);

            return res.status(200).json(response.rows[0]);

        case "GET":
            try {
                const query = "SELECT * FROM tasks order by id desc";
                const response = await conn.query(query);
                return res.status(200).json(response.rows);
            } catch (error: any) {
                return res.status(400).json({ error: error.message });
            }
        default:
            return res.status(400).json("Invalid method");
    }

}
