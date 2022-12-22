import { Pool } from 'pg'

let conn: any

if (!conn)
    conn = new Pool({
<<<<<<< HEAD
        host:'dpg-cee90d2rrk0c96hgdibg-a.oregon-postgres.render.com',
=======
        host: 'dpg-cee90d2rrk0c96hgdibg-a.oregon-postgres.render.com',
>>>>>>> 84db92667fa6f7e362d99cbfc33a3e226b7edd9e
        database: 'pruebas_ackm',
        port: 5432,
        user: 'root',
        password: 'fXtWhF2xfwHTrjHrQNxATdmwdHPPqIc3',
        ssl: true
    });

console.log(conn)
export { conn }