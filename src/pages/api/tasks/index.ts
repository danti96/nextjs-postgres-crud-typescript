// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    const {method} = req;

    switch (method) {
        case "POST":
            return res.status(200).json("Creating Tasks");
        case "GET":
            return res.status(200).json("Getting Tasks");
        default:
            return res.status(400).json("Invalid method");
    }

}
