require('dotenv').config({ path: '.env.local' });  // Specify the .env.local file

const { Client } = require('pg');

const client = new Client({
  connectionString: 'postgresql://moolamaster_owner:JkTMXGE1O4VY@ep-young-mountain-a13l9f43.ap-southeast-1.aws.neon.tech/MoolaMaster?sslmode=require',
});

async function testConnection() {
  try {
    await client.connect();
    console.log('Connection successful');
    const res = await client.query('SELECT NOW()');
    console.log('Current Time:', res.rows[0]);
  } catch (error) {
    console.error('Connection failed:', error);
  } finally {
    await client.end();
  }
}

testConnection();
