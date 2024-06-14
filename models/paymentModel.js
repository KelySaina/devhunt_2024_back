const supabase = require('../models/supabaseClient');

const createPayment = async (userId, serviceId, amount, paymentMethod, status) => {
    const { data, error } = await supabase
        .from('payments')
        .insert([{ user_id: userId, service_id: serviceId, amount, payment_method: paymentMethod, status }]);
    
    if (error) throw error;
    return data;
};

const getPaymentById = async (paymentId) => {
    const { data, error } = await supabase
        .from('payments')
        .select('*')
        .eq('payment_id', paymentId)
        .single();
    
    if (error) throw error;
    return data;
};

const getPaymentsByUserId = async (userId) => {
    const { data, error } = await supabase
        .from('payments')
        .select('*')
        .eq('user_id', userId);
    
    if (error) throw error;
    return data;
};

module.exports = { createPayment, getPaymentById, getPaymentsByUserId };
