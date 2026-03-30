import mysql from 'mysql2/promise';

const globalForMysql = global as unknown as { mysqlPool: mysql.Pool };

const pool = globalForMysql.mysqlPool || mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'tomsutton',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});

if (process.env.NODE_ENV !== 'production') {
    globalForMysql.mysqlPool = pool;
}

export default pool;
