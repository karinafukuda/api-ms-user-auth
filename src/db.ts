import { Pool } from 'pg';

const connectionString =
  'postgres://<your user>:<your password>@castor.db.elephantsql.com/llzouhkt';
const db = new Pool({ connectionString });

export default db;
