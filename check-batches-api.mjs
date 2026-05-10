
async function checkBatchesApi() {
    try {
        const res = await fetch('http://localhost:3000/api/batches');
        const json = await res.json();
        console.log('Batches API Response:', JSON.stringify(json, null, 2));
    } catch (err) {
        console.error('Error fetching from /api/batches:', err);
    }
}

checkBatchesApi();
