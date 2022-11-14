import pg from 'pg';
import dotenv from 'dotenv';
dotenv.config();

const { Pool } = pg;
const config = {
    connectionString: process.env.DATABASE_URL
}

const db: pg.Pool = new Pool(config);
export default db;

