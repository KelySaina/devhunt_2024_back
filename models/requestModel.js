const supabase = require('../models/supabaseClient');

const createRequest = async (userId, serviceId, status, details) => {
    const { data, error } = await supabase
        .from('requests')
        .insert([{ user_id: userId, service_id: serviceId, status, details }]);
    
    if (error) throw error;
    return data;
};

const getRequestById = async (requestId) => {
    const { data, error } = await supabase
        .from('requests')
        .select('*')
        .eq('request_id', requestId)
        .single();
    
    if (error) throw error;
    return data;
};

const getRequestsByUserId = async (userId) => {
    const { data, error } = await supabase
        .from('requests')
        .select('*')
        .eq('user_id', userId);
    
    if (error) throw error;
    return data;
};

module.exports = { createRequest, getRequestById, getRequestsByUserId };
