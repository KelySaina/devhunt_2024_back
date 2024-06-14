const supabase = require('../models/supabaseClient');

const createUserService = async (userId, serviceId) => {
    const { data, error } = await supabase
        .from('user_services')
        .insert(
            [{
                user_id: userId,
                service_id: serviceId
            }]
        ).select('*');

    if (error) {
        throw new Error(error.message);
    }

    return data;
};

const deleteUserService = async (userServiceId) => {
    const { data, error } = await supabase
        .from('user_services')
        .delete()
        .eq('user_service_id', userServiceId);

    if (error) {
        throw new Error('Failed to delete user service');
    }

    return data;
};

module.exports = {
    createUserService,
    deleteUserService
};
