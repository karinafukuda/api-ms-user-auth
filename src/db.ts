import { Pool } from 'pg';

const connectionString =
  'postgres://llzouhkt:5SLE5X7vrlWBpRE8cxwHlqtaG6e3j99M@castor.db.elephantsql.com/llzouhkt';
const db = new Pool({ connectionString });

export default db;
//'postgres://<your user>:<your password>@castor.db.elephantsql.com/llzouhkt';
