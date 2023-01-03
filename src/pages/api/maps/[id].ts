// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { conn } from 'src/utils/database';
import NextCors from 'nextjs-cors';

// eslint-disable-next-line import/no-anonymous-default-export
export default async function (req: NextApiRequest, res: NextApiResponse) {
    // Run the cors middleware
    // nextjs-cors uses the cors package, so we invite you to check the documentation https://github.com/expressjs/cors
    await NextCors(req, res, {
        // Options
        methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
        origin: '*',
        optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
        preflightContinue: false,
    });

    const { method, query } = req;

    switch (method) {
        case "GET":
            try {
                const text = "SELECT distinct(place_id), * FROM mapapi where code_zip = $1;"
                const values = [query.id]
                const result = await conn.query(text, values);
                console.log("result", {text,result});
                if (result.rows.length === 0)
                    return res.status(404).json({ message: "Task not found." });

                return res.status(200).json(result.rows);
            } catch (error: any) {
                return res.status(500).json({ message: error.message })
            }

        default:
            return res.status(200).json("Method not allowed");
    }
}