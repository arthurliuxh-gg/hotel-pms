const { pool } = require('../config/database');

async function reset() {
  try {
    console.log('⚠️  WARNING: This will delete all data!');
    console.log('🔄 Resetting database...');
    
    // Drop all tables
    await pool.query(`
      DROP TABLE IF EXISTS housekeeping_tasks CASCADE;
      DROP TABLE IF EXISTS payments CASCADE;
      DROP TABLE IF EXISTS reservations CASCADE;
      DROP TABLE IF EXISTS rooms CASCADE;
      DROP TABLE IF EXISTS room_types CASCADE;
      DROP TABLE IF EXISTS guests CASCADE;
      DROP TABLE IF EXISTS users CASCADE;
      DROP FUNCTION IF EXISTS update_updated_at_column CASCADE;
    `);
    
    console.log('✅ Database reset complete');
    console.log('💡 Run npm run db:migrate to recreate schema');
    console.log('💡 Run npm run db:seed to add demo data');
    
    process.exit(0);
  } catch (error) {
    console.error('❌ Reset failed:', error);
    process.exit(1);
  }
}

reset();