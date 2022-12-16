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
            try {
                const {
                    address,
                    business_status,
                    icon,
                    icon_background_color,
                    icon_mask_base_uri,
                    lat,
                    lng,
                    name,
                    place_id,
                    plus_code_compound_code,
                    plus_code_global_code,
                    rating,
                    telephone,
                    toJSON,
                    types,
                    vicinity,
                    website,
                    adr_address
                  } = req.body;

                if(!existsName(name)){
                    const query = 'INSERT INTO mapapi (address, business_status, icon, icon_background_color, icon_mask_base_uri, lat, lng, name, place_id, plus_code_compound_code, plus_code_global_code, rating, telephone, tojson, types, vicinity, website,adr_address)VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18) RETURNING *';

                    const values = [
                        address,
                        business_status,
                        icon,
                        icon_background_color,
                        icon_mask_base_uri,
                        lat,
                        lng,
                        name,
                        place_id,
                        plus_code_compound_code,
                        plus_code_global_code,
                        rating,
                        telephone,
                        toJSON,
                        types,
                        vicinity,
                        website,
                        adr_address
                    ];

                    const response = await conn.query(query, values);
                    return res.status(200).json(response.rows[0]);
                }
                return res.status(200).json({message:`Ya existe ${name}`});

            } catch (error) {
                console.log(error)
                return res.status(200).json(error);
            }

        case "GET":
            try {
                const query = "SELECT * FROM mapapi order by id desc";
                const response = await conn.query(query);
                return res.status(200).json(response.rows);
            } catch (error: any) {
                return res.status(400).json({ error: error.message });
            }
        default:
            return res.status(400).json("Invalid method");
    }

}
async function existsName(nombre:string){
    try {
        const query = `SELECT * FROM mapapi where name='${nombre}'`;
        const response = await conn.query(query);
        const nrows = response.rows.length;
        if( nrows > 0){
            return true;
        }
        return false;
    } catch (error: any) {
        return true;
    }
}