const { createLog, listLogsByUser } = require('../models/logModel');

async function addLog(req, res) {
    try {
        const log = req.body;
        const data = await createLog(log);
        res.status(201).json(data);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

async function listLogs(req, res) {
    try {
        const { userId } = req.params;
        const data = await listLogsByUser(userId);
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

module.exports = {
    addLog,
    listLogs
};
