import Database from 'better-sqlite3';

const db = new Database('d:/work/network-masters-hub-main/backend/.tmp/data.db');
const tables = db.prepare("SELECT name FROM sqlite_master WHERE type='table'").all();
console.log("Tables:", tables.map(t => t.name).join(', '));

const policyTable = tables.find(t => t.name.includes('policy_pages'))?.name;
if (policyTable) {
    const info = db.prepare(`PRAGMA table_info(${policyTable})`).all();
    console.log(`Schema for ${policyTable}:`, info.map(c => c.name).join(', '));
} else {
    console.log("Policy table not found!");
}
db.close();
