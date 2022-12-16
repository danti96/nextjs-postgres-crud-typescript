import {Pool} from 'pg'

let conn:any

if(!conn)
    conn = new Pool({
        host:'dpg-cee90d2rrk0c96hgdibg-a.oregon-postgres.render.com',
        database: 'pruebas_ackm',
        port: 5432,
        user: 'root',
        password: 'fXtWhF2xfwHTrjHrQNxATdmwdHPPqIc3'
    });

console.log(conn)
export {conn}