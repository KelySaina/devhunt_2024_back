const supabase = require('../models/supabaseClient');

async function createLog(log) {
    const { data, error } = await supabase
        .from('logs')
        .insert([log]);

    if (error) {
        throw error;
    }

    return data;
}

async function listLogsByUser(userId) {
    const { data, error } = await supabase
        .from('logs')
        .select('*')
        .eq('user_id', userId);

    if (error) {
        throw error;
    }

    return data;
}

module.exports = {
    createLog,
    listLogsByUser
};
