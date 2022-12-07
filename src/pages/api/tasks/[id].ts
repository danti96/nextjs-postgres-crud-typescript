import { NextApiRequest, NextApiResponse } from 'next'

// eslint-disable-next-line import/no-anonymous-default-export
export default function (req: NextApiRequest, res: NextApiResponse) {
    const { method } = req;
    switch (method) {
        case "GET":
            return res.status(200).json("Getting a unique task");
        case "PUT":
            return res.status(200).json("Updating a unique task");
        case "DELETE":
            return res.status(200).json("Deleting a unique task");
        default:
            return res.status(200).json("Method not allowed");
    }
}
