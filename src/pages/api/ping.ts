import {NextApiRequest, NextApiResponse} from 'next'
import {conn} from '../../utils/database'

 export default async function index(_: NextApiRequest, res: NextApiResponse){

    const response = await conn.query("select now()");

    console.log(response);
    const message = {
        messsage:"pong",
        time:response.rows
    };

    return res.status(200).json(message)
}
