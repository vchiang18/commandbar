import Dexie from 'dexie';

const db = new Dexie('PracticeDatabase');

db.version(1).stores({
    practices: '++id, period, practiceType, rep, offensivePersonnel, formation, formationVariation, backfield'
})

db.open().catch((err)=> {
    console.error('Failed to open db:', err.stack || err);
});

export default db;
