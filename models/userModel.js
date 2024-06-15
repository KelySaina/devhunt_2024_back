const supabase = require('../models/supabaseClient');
const bcrypt = require('bcryptjs');

const createUser = async (username, password, email, firstName, lastName, dateOfBirth) => {
    const passwordHash = await bcrypt.hash(password, 10);
    const { data, error } = await supabase
        .from('users')
        .insert([{ username, password_hash: passwordHash, email, first_name: firstName, last_name: lastName, date_of_birth: dateOfBirth}]).select('*');
    
    if (error) throw error;
    return data;
};

const getUserByEmail = async (email) => {
    const { data, error } = await supabase
        .from('users')
        .select('*')
        .eq('email', email)
        .single();
    
    if (error) throw error;
    return data;
};

const getAllUsers = async () => {
    const { data, error } = await supabase
        .from('users')
        .select('*');

    if (error) throw error;
    return data;
};

const getUserById = async (userId) => {
    const { data, error } = await supabase
        .from('users')
        .select('*')
        .eq('user_id', userId)
        .single();
    
    if (error) throw error;
    return data;
};

const updateUser = async (userId, updates) => {
    const { data, error } = await supabase
        .from('users')
        .update(updates)
        .eq('user_id', userId);
    
    if (error) throw error;
    return data;
};

const deleteUser = async (userId) => {
    const { data, error } = await supabase
        .from('users')
        .delete()
        .eq('user_id', userId);
    
    if (error) throw error;
    return data;
};

module.exports = { createUser, getUserByEmail,getAllUsers, getUserById, updateUser, deleteUser };
