import {Pool} from 'pg'

let conn:any

if(!conn)
    conn = new Pool({
        user:'root',
        password:'fXtWhF2xfwHTrjHrQNxATdmwdHPPqIc3',
        host:'postgres://root:fXtWhF2xfwHTrjHrQNxATdmwdHPPqIc3@dpg-cee90d2rrk0c96hgdibg-a/pruebas_ackm',
        port: 5432,
        database: 'pruebas_ackm'
    });

console.log(conn)
export {conn}