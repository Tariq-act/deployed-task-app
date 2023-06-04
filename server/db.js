const Pool = require('pg').Pool;
require('dotenv').config();

const pool = new Pool({
  user: process.env.PG_USERNAME,
  password: process.env.PASSWORD,
  host: process.env.HOST,
  port: process.env.DBPORT,
  database: process.env.DATABASE,
  connectionTimeoutMillis: 5000, // Increase timeout value in milliseconds
  idleTimeoutMillis: 30000, // Increase idle timeout value in milliseconds
  ssl: true,
});

// Attempt to connect and execute a test query
// pool.connect((error, client, release) => {
//   if (error) {
//     console.error('Error connecting to the database:', error);
//     return;
//   }

//   client.query('SELECT 1', (queryError, result) => {
//     release(); // Release the client back to the pool

//     if (queryError) {
//       console.error('Error executing test query:', queryError);
//       return;
//     }

//     console.log('Successfully connected to the database');
//     // You can perform additional operations or start your application logic here

//     pool.end(); // Close the connection pool when you're done
//   });
// });

module.exports = pool;
