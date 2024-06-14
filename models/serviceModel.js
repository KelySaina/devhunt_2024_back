const supabase = require('../models/supabaseClient');

const createService = async (name, description, apiUrl) => {
    const { data, error } = await supabase
        .from('services')
        .insert([{ name, description, api_url: apiUrl }]);
    
    if (error) throw error;
    return data;
};

const getServiceById = async (serviceId) => {
    const { data, error } = await supabase
        .from('services')
        .select('*')
        .eq('service_id', serviceId)
        .single();
    
    if (error) throw error;
    return data;
};

const getAllServices = async () => {
    const { data, error } = await supabase
        .from('services')
        .select('*');
    
    if (error) throw error;
    return data;
};

module.exports = { createService, getServiceById, getAllServices };
